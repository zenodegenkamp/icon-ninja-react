import React from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Header from "./components/Header"
import Die from "./components/Die"
import { onSnapshot, addDoc } from "firebase/firestore"
import { scoresCollection } from "./firebase"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [winGame, setWinGame] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [highscore, setHighscore] = React.useState([])

    React.useEffect(() => {
        const unsubscribe = onSnapshot(scoresCollection, function(snapshot){
            const scoreArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
        }))
        console.log(scoreArr)
        setHighscore(scoreArr)
        })
        return unsubscribe
    }, [])
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setCount(0)
            setWinGame(true)
            createNewHighscore()
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 20; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!winGame) {
            setCount(oldCount => {
                return oldCount + 1
            })
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setWinGame(false)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    async function createNewHighscore(){
        const newScore = {
            body: count
        }
        const newScoreRef = await addDoc(scoresCollection, newScore)
    
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))

    const scoreElements = highscore.map(score => {
        return score.body
    })

    const scoreElementsHTML =  scoreElements.sort().slice(0, 3).map(score => {
        return <li>{score}</li>
    })
    return (
        <main>
            {winGame && <Confetti />}
            <Header />

            <div className="flex-container">
                <div className="scoreboard">
                    <div className="score">{count}</div>
                </div>
            <div className="dice-section">
                <div className="dice-container">
                    {diceElements}
                </div>
                <button 
                    className="roll-dice" 
                    onClick={rollDice}
                    >
                    {winGame ? "New Game" : "Roll"}
                </button>
            </div>
                <div className="highscore">
                    <h1> Top scores </h1>
                    <ol>
                    {scoreElementsHTML}
                    </ol>
                </div>
            </div>
        </main>
    )
}