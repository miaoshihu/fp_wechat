const utilMd5 = require('./util_md5.js')
const url_secret = require('../config').url_secret

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getSig(time_stamp) {
  var sig = utilMd5.hexMD5(time_stamp + "&" + url_secret);
  return sig;
}

module.exports = {
  formatTime: formatTime,
  getSig: getSig
}
