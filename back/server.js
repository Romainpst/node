// Database imports
const pgPool = require("./db/pgWrapper");
const tokenDB = require("./db/tokenDB")(pgPool);
const userDB = require("./db/userDB")(pgPool);
const transactionDB = require("./transactions/transactionDB")(pgPool);


// OAuth imports
const oAuthService = require("./auth/tokenService")(userDB, tokenDB);
const oAuth2Server = require("node-oauth2-server");

// Express
const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors({
    origin: 'localhost:3000/transactions/'
  }));



app.oauth = oAuth2Server({
    model: oAuthService,
    grants: ["password"],
    debug: true,
});

const testAPIService = require("./test/testAPIService.js");
const testAPIRoutes = require("./test/testAPIRoutes.js")(
    express.Router(),
    app,
    testAPIService
);

// Auth and routes
const authenticator = require("./auth/authenticator")(userDB);
const routes = require("./auth/routes")(
    express.Router(),
    app,
    authenticator
);

const transactions = require("./transactions/transactions")(transactionDB);
const transactionsRoutes = require("./transactions/routes")(
    express.Router(),
    app,
    transactions
);


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(app.oauth.errorHandler());
app.use("/auth", routes);
app.use("/test", testAPIRoutes);
app.use("/transactions", transactionsRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


