const express = require('express');
const pool = require('./modules/pool.cjs');
const bodyParser = require('body-parser');

const app = express();

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  pool.query('SELECT * FROM "tasks";').then((response) => {
    console.log(response.rows);
    res.send(response.rows);
  });
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
