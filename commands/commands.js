import {
    bot
} from '../token.js';

import {
    currencyChoise,
    link
} from '../functions/functions.js';

import {
    keyboardMain
} from '../keyboards/keyboardsMain.js';

export function commands() {
    bot.on('message', msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start' || text === '/start@c_e_r_bot') {
            return bot.sendMessage(chatId, 'Вітаю вас у телеграм боті "Актуальний курс валют"!\n\n' +
            'Користуйтеся екранною клавіатурою', keyboardMain);
        }

        if (text === 'Джерело 💦') {
            return link(chatId);
        }

        if (text === 'Список валют 💸') {
            return currencyChoise(chatId);
        }

        return bot.sendMessage(chatId, '🚫 Це не зрозумілий для мене синтаксис.');
    });
} 