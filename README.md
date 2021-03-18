# ReactTicTacToe
TicTacToe Game

# react.js Transaction poc details
=================================================

Make sure you have installed the nodejs (>=10.15.3) in your machine.

1. Download the folder and unzip the folder into any folder. Please change txt files to JS(in src index.js, in root folder webpack.config.js and dist folder main.js)
2. open the terminal/command prompt, and execute below commands.

Install the required npm packages with following command

npm install

Run the application using below command.
 
npm start

open another terminal/command prompt and run below command

npm install -g json-server

Run the JSON server using below command.

json-server --watch data.json --port 8081



3. Application will start running on port 8080
http://localhost:8080


4. Json will run on port 8081

http://localhost:8081/transactions

Please note I have included CORS headers in axios


# Implementation details
========================================================

Developed the page as per instructions

1. Have used latest version of react js  "react": "^16.10.2","webpack": "^4.16.2", "@babel/core": "^7.4.0","babel-loader": "^8.0.5"

2. Included .gitignore file

3. Have used react-router, npm, webpack, babel and Node.js. 

4. Included https://fonts.googleapis.com/css?family=Roboto:300,500

5. Running json server on port 8081

5. Json has 10000 records have used pagination for the same and to cancel all subscriptions and asynchronous tasks used        componentWillUnmount method and set _isMounted value.

6. Used _isMounted for React's conditional rendering in componentDidMount


