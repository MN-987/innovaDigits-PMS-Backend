const express = require('express');
const bootstrap = require('./routes/index.routes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
bootstrap(app, express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
