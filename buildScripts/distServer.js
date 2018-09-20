/* eslint-disable no-console */

/* -----> This is only for local debugging purposses <-----*/
import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

const PORT = 3000;
const app = express();

app.use(compression())
app.use(express.static('dist'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${PORT}`)
  }
})
