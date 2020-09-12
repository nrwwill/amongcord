const Command = require('../Command')

const GameStages = require('../GameStages')
const GameExistenceRequirement = require('../GameExistenceRequirement')

module.exports = class Tasks extends Command {
  constructor () {
    super({
      name: 'tasks',
      aliases: [ 'ts' ],
      description: 'Sets the stage to tasks and mutes everyone',

      gameExistenceRequirement: GameExistenceRequirement.GAME,
      voiceChannelOnly: true
    })
  }

  run ({ message, game }) {
    game.setStage(GameStages.TASKS)
    message.channel.send('Stage set to **tasks**')
  }
}
