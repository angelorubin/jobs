module.exports = {
  run: async toolbox => {
    const { getBrands, print, prompt, parameters } = toolbox

    const { ok, data } = await getBrands()

    console.log(typeof data)

    const names = data.map(data => data.nome)

    // console.log(names)

    const askBrand = {
      type: 'select',
      name: 'brands',
      message: 'Escolha a marca:',
      choices: names
    }

    const questions = [askBrand]
    const { brand } = await prompt.ask(questions)

    print.debug(parameters)
  }
}
