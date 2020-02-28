module.exports = async toolbox => {
  const api = require('../utils/api')

  toolbox.getBrands = async type => {
    let newType = type === 'carros' || type === 'motos' ? type : 'caminhoes'
    const { ok, data } = await api.get(`${newType}s/marcas`)
    return {
      ok,
      data
    }
  }

  toolbox.getModels = async (type, codeBrand) => {
    // https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
    let newType = type === 'carros' || type === 'motos' ? type : 'caminhoes'
    const { ok, data } = await api.get(
      `${newType}s/marcas/${codeBrand}/modelos`
    )
    return {
      ok,
      data
    }
  }
}
