# Icon Ninja - Tenzies Game App

Icon Ninja is a simple dice game app built with React where players roll dice to match and freeze the icons to score points. The game includes a feature called "Tenzies" where all dice must have the same icon to score extra points.

![Icon Ninja Game](link/to/icon-ninja-game-screenshot.png)

## Getting Started

To run the Icon Ninja app on your local machine, follow the instructions below:

1. **Clone the repository:**

git clone https://github.com/your-username/icon-ninja.git
cd icon-ninja

2. **Install dependencies:**

Make sure you have Node.js and npm installed. Then, run:

npm install


3. **Firebase setup:**

This app uses Firebase to store high scores. Make sure to set up a Firebase project and configure it in the `firebase.js` file. You can follow the Firebase documentation for instructions on how to set up a Firestore database.

4. **Run the app:**

npm start


The app will be available at http://localhost:3000 in your browser.

## How to Play

1. Click the "Roll" button to roll the dice and randomize the icons.
2. Click on individual icons to hold or release them.
3. If all icons have the same value and are held, you win and confetti animation will play.
4. Click "New Game" to start a new round after scoring Tenzies or when you want to start over.

## High Scores

The app keeps track of the top three highest scores. The scores are stored in a Firestore database. To view the top scores, check the "Top scores" section on the app's main page.

## Dependencies

The app uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- nanoid: A small utility library for generating unique IDs.
- react-confetti: A React component for creating confetti animations.
- firebase/firestore: Firebase Firestore SDK for storing high scores.
- @fortawesome/react-fontawesome: React component for using Font Awesome icons.

## Contributing

If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](link/to/license-file) file for details.
