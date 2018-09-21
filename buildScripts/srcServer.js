/* eslint-disable no-console */

import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config.dev'

const PORT = 3000;
const app = express();
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))

app.listen(PORT, (err) => err ? console.log(err) : open(`http://localhost:${PORT}`))
