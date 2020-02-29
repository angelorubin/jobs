const { strings } = require('gluegun')

module.exports = {
  name: 'type',
  alias: 'search',
  description: 'Pesquisar o preço médio de venda de veículos no Brasil',
  run: async toolbox => {
    const { getBrands, getModels, print, prompt } = toolbox
    const { trim, lowerCase, startCase, startsWith } = strings

    /**
     * Vehicules Types
     */
    const askType = {
      type: 'select',
      name: 'type',
      message: 'Escolha o tipo de veículo:',
      choices: ['carros', 'motos', 'caminhões']
    }

    const resultType = await prompt.ask([askType])

    // print.debug(resultType.type)

    const { type } = resultType

    // print.debug(type)

    /**
     * Vehicules Brands (Marcas)
     */
    const { ok, data: brands } = await getBrands(type)

    // const brandName = brands.map(brand => brand.nome)
    // const codes = data.map(data => data.codigo)

    // print.debug(data)

    const askBrand = {
      type: 'input',
      name: 'brand',
      message: 'Digite a marca do seu veículo:'
      /*
      choices: [brands, codes],
      // You can leave this off unless you want to customize behavior
      suggest(s, choices) {
        return choices.filter(choice => {
          return choice.message.toLowerCase().startsWith(s.toLowerCase())
        })
      }
      */
    }

    const resultBrand = await prompt.ask([askBrand])

    console.log(resultBrand.brand)

    // console.log(startCase(resultBrand.brands))

    const brandFound = brands.filter(brand => {
      const regexp = new RegExp(`${resultBrand.brand}`, 'g')
      return regexp.test(brand.nome)
    })

    print.debug(brandFound)

    // const toLowerCase = removeWhiteSpace.map(data => lowerCase(data))
    // data.nome === startCase(resultBrand.brand)

    // print.debug(toLowerCase)

    /**
     * Models (Modelos)
     */
    // const models = await getModels(resultType, resultBrand)

    // print.debug(models)
  }
}
