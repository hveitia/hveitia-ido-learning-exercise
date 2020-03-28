
const express        = require("express"),
    cors           = require('cors'),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

const config = require('./src/utils/config');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// API routes
const routesAuth = require('./src/http/routes/auth');

app.use('/', routesAuth);


// Start server
app.listen(config.PORT, () => {
    console.log(`Node server running on http://localhost:${config.PORT}`);
});
