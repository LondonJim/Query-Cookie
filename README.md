# Save and Return Query Cookie

Setting a query saves the keys and values as a cookie (eg. localhost:4000?exampleKey=exampleValue). The information in the cookie is returned in JSON format in the body of the root (eg. visiting localhost:4000/ will display the information: {"exampleKey"="exampleValue"})

Converted and changed from my existing repo ([Database-Server-Tech-Test](https://github.com/LondonJim/Database-Server-Tech-Test)) that set queries as sessions and returns queries based on a a key.

## Install

Written with Express

`git clone git@github.com:LondonJim/Query-Cookie.git`

`cd query-cookie`

`npm install`

## Run

`npm start`

In the url enter:

`localhost:4000/set?exampleKey=exampleValue`

Where exampleKey is any key you wish and exampleValue is any value you wish

It then sets this information as a cookie (cookieName)

Then enter:

`localhost:4000/`

It will then return the information back as a JSON

eg. {"exampleKey":"exampleValue"}

## Testing

#### Mocha

Basic server

`npm test`

#### Cypress.io

Make sure server is running

`npm start`

Then in terminal enter

`npm run cypress:open`

A new window will open to run tests
