const { http } = require('gluegun')

module.exports = http.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/'
})
