module.exports = async toolbox => {
  const api = require('../utils/api')

  toolbox.getBrands = async () => {
    const { print, table } = toolbox

    const { ok, data } = await api.get('carros/marcas')

    return {
      ok,
      data
    }
  }
}
