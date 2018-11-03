# Database Server Tech Test

## The brief

Write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at `somekey`. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

## Install

`git clone git@github.com:LondonJim/Database-Server-Tech-Test.git`
`cd Database-Server-Tech-Test`
`npm install`

## Run

`npm start`

In the url enter:

`localhost:4000/set?exampleKey=exampleValue`

Where exampleKey is any key you wish and exampleValue is any value you wish

Currently this hold the query in a session

Then enter:

`localhost:4000/get/?key=exampleKey`

It will then return the value of the key you set above

## Testing

#### Mocha/Supertest

`npm test`

#### Cypress.io

Make sure server is running

`npm start`

Then in terminal enter

`npm run cypress:open`

A new window will open to run tests
