import {
    bot
} from '../token.js';

import {
    keyboardCurrency
} from '../keyboards/keyboardsCurrency.js';

export function currencyChoise(chatId) {
    return bot.sendMessage(chatId, 'Оберіть валюту:', keyboardCurrency);
}

export function link(chatId) {
    return bot.sendMessage(chatId, 'Курс був взятий з ресурсу:\n https://bank.gov.ua/');
}