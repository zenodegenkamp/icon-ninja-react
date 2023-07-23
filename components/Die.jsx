import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faHeart, faStar, faBomb, faBolt, faFish } from '@fortawesome/free-solid-svg-icons'

const elementDiamond = <FontAwesomeIcon icon={faDiamond} />
const elementHeart = <FontAwesomeIcon icon={faHeart} />
const elementStar = <FontAwesomeIcon icon={faStar} />
const elementBomb = <FontAwesomeIcon icon={faBomb} />
const elementBolt = <FontAwesomeIcon icon={faBolt} />
const elementFish = <FontAwesomeIcon icon={faFish} />

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#FEFEFE" : "black"
    }

    let icon 
    let classCss
    
    if(props.value === 1){
        icon = elementDiamond
        classCss = "diamond"
    }
    else if(props.value === 2){
        icon = elementHeart
        classCss = "heart"
    }
    else if(props.value === 3){
        icon = elementStar
        classCss = "star"
    }
    else if(props.value === 4){
        icon = elementBomb
        classCss = "bomb"
    }
    else if(props.value === 5){
        icon = elementBolt
        classCss = "bolt"
    }
    else if(props.value === 6){
        icon = elementFish
        classCss = "fish"
    }

    return (
        <div 
            className={classCss}
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{icon}</h2>
        </div>
    )
}