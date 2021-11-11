import {
    bot
} from '../token.js';

export function mycommands() {
    bot.setMyCommands([{
        command: '/start',
        description: 'Познайомитися з ботом'
    }, ]);
}