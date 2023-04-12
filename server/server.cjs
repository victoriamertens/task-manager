const express = require('express');
const ViteExpress = require('vite-express');
const pool = require('./modules/pool.cjs');
const bodyParser = require('body-parser');

const app = express();

// Serve static files
app.use(express.static('build'));
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/task', (req, res) => {
  console.log(req);
  pool
    .query('SELECT * FROM "tasks";')
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
ViteExpress.listen(app, PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
