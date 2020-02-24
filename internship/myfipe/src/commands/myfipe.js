const command = {
  name: 'myfipe',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your myfipe CLI')
  }
}

module.exports = command
