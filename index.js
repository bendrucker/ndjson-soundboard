'use strict'

const pumpify = require('pumpify')
const split = require('split2')
const Soundboard = require('./soundboard')

module.exports = JSONBoard

function JSONBoard (data) {
  return pumpify([
    split(JSON.parse),
    Soundboard(data)
  ])
}
