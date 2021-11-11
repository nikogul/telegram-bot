import {
    bot
} from '../token.js';

import {
    currency
} from './currency.js';

export function currencyUSD(chatId) {
    currency(26).then((result) => {
        return bot.sendMessage(chatId, `Офіційний курс Гривня до ${result[0]}\n\n` +
            `1 ${result[2]} = ${result[1]} UAH\n` +
            `Дата оновлення: ${result[3]}\n\n`);
    });
}

export function currencyEUR(chatId) {
    currency(32).then((result) => {
        return bot.sendMessage(chatId, `Офіційний курс Гривня до ${result[0]}\n\n` +
            `1 ${result[2]} = ${result[1]} UAH\n` +
            `Дата оновлення: ${result[3]}\n\n`);
    });
}

export function currencyRUB(chatId) {
    currency(18).then((result) => {
        return bot.sendMessage(chatId, `Офіційний курс Гривня до ${result[0]}\n\n` +
            `1 ${result[2]} = ${result[1]} UAH\n` +
            `Дата оновлення: ${result[3]}\n\n`);
    });
}