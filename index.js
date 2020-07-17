const express = require('express');
const config = require('./config');
const videosApi = require('./routes/videos')

const app = express();

app.use(express.json());

videosApi(app);

app.listen(3000, () => {
    console.log(`API Server Listening on http://localhost:${config.port}`);
});