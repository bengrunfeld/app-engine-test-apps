# Vanilla JS App

Simple JS app that serves an HTML file with an image, some styling and a bit of Javascript, just to show everything working at the most basic level.

App demonstrates Express setup with Webpack, Webpack Dev Middleware, Webpack Hot Module Reloading (currently broken due to changes between Webpack 3 and 4), and Babel to perform the transpilation from ES6+.

App can be run locally on your machine, or pushed to Google App Engine Flexible Environment.

## Installation

    npm install
    npm run dev
    npm start

## Deployment to Google App Engine Flex

    npm run deploy

## Issues with App Engine Flex

Google App Engine Flex was issuing an error if Webpack was imported into the server file, so I separated the files into `server.js` and `server-dev.js` and updated `npm scripts` and `webpack.config.js`. 

Now the prod server file, `server.js` contains no code that is connected to running a local development server. 

This reduced code-bloat in production and clearly defines the two separate processes - dev and prod - which are quite different. 

Monkey wrenching all the code into a single file might be confusing to a reader, and may lead to unintended bugs.

