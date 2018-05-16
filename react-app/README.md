# GAE React App

Simple Express, Webpack, & React app that serves an image, some styling and some basic functionality, just to show everything working at the most basic level. This project can then be used as a template for other more complex apps.

Boilerplate for Node (ES6+), Express, Webpack, React, Jest, and Enzyme that has Hot Module Reloading and can be deployed to Google App Engine with a single command. It has dev and prod builds, where the prod build outputs a minified, uglified bundle where images are encoded in Base64 directly into the css file.

App can be run locally on your machine, or pushed to Google App Engine Flexible Environment.

## Installation

    npm install

## Run a Development Version Locally

    npm run dev
    npm run devServer

## Run a Production Version Locally

    npm run build
    npm start

## Deployment to Google App Engine Flex

    npm run deploy

## Issues with App Engine Flex

Google App Engine Flex was issuing an error if Webpack was imported into the server file, so I separated the files into `server.js` and `server-dev.js` and updated `npm scripts` and `webpack.config.js`. 

Now the prod server file, `server.js` contains no code that is connected to running a local development server. 

This reduced code-bloat in production and clearly defines the two separate processes - dev and prod - which are quite different. 

Monkey wrenching all the code into a single file might be confusing to a reader, and may lead to unintended bugs.

