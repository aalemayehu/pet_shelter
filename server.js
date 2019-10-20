const express = require("express"),
          app = express(),
      DB_NAME = "petdb",
        port = 8000,
        cors = require('cors');

app.use(express.json());
app.use (cors()); // used so no issues when app in port 3k makes a request from port 8k. 
app.use(express.static(__dirname + "/client/build"));


require('./utils/mongoose')(DB_NAME);
require('./utils/routes')(app);// recieves routes that are exported by routes.js, invokes the function with (app)

app.listen(port, () => {
    console.log (`Listening on port ${port}`);
});