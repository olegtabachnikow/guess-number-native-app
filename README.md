# Number Guessing Game

Description:
The Number Guessing Game App is an interactive mobile application developed using React Native, designed to engage users in a fun and challenging guessing game. The app allows users to input a number within a specified range, and then challenges the device to guess the chosen number based on user feedback.

Features:

User Input:
Users start the game by selecting a number within a predefined range, such as 1 to 100. This number serves as the target number for the device to guess.

Guessing Mechanism:
After the user selects their number, the app uses an algorithm to make an initial guess within the range. The user provides feedback to the device's guess, indicating whether the guess is too high, too low, or correct.

Adaptive Guesses:
The device continues to refine its guesses based on the user's feedback. If the user indicates that the guess is too high, the device adjusts its next guess to be lower, and vice versa. This adaptive process continues until the device successfully guesses the user's chosen number.

Feedback Display:
The app displays each guess made by the device and the user's feedback, helping the user keep track of the game's progress. Additionally, the app might include visual cues, such as color changes or animations, to indicate the device's guesses and user feedback.

Winning Notification:
When the device successfully guesses the user's number, the app displays a winning notification, along with the total number of guesses it took to arrive at the correct number.

Play Again:
After a round is completed, the user has the option to play the game again. This allows users to enjoy multiple rounds of the game and see if the device's guessing algorithm improves over time.

Technology Stack:

React Native: For building the cross-platform mobile app using JavaScript/TypeScript.
State Management: Using React Native's built-in state management features to handle game progress and user input.
Random Number Generation: Utilizing random number generation methods to generate the device's guesses within the specified range.
User Interface Components: Employing React Native components to create the user interface elements, such as input fields, buttons, and feedback displays.
