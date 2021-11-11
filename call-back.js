import {
    bot
} from './token.js';

import {
    currencyUSD,
    currencyEUR,
    currencyRUB
} from './currency-ies/currencies.js';

export function callback() {
    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        const msgId = msg.message.message_id;

        if (data === 'usd') {
            bot.deleteMessage(chatId, msgId);
            return currencyUSD(chatId);
        }

        if (data === 'eur') {
            bot.deleteMessage(chatId, msgId);
            return currencyEUR(chatId);
        }

        if (data === 'rub') {
            bot.deleteMessage(chatId, msgId);
            return currencyRUB(chatId);
        }
    });
}