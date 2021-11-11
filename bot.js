// const currencyURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
import TelegramApi from 'node-telegram-bot-api';

import {
    keyboardStart,
    keyboardHelp
} from './keyboards.js'; // Добавляємо клавіатури із keyboards.js у наш проект

import {
    currency
} from './currencies.js';

import {
    token
} from './token.js';

const bot = new TelegramApi(token, { // Створюємо бота
    polling: true
});

function start() {

    bot.setMyCommands([{
            command: '/start',
            description: 'Початок роботи з ботом'
        },
        {
            command: '/help',
            description: 'Доступні команди'
        },
        {
            command: '/usd',
            description: 'Актуальний курс долара'
        },
    ]);

    function help(chatId) {
        return bot.sendMessage(chatId, '❗ Список доступних команд:', keyboardHelp);
    }

    function currencyUSD(chatId) {
        currency(26).then((result) => {
            return bot.sendMessage(chatId, `Офіційний курс Гривня до ${result[0]}\n\n` +
                `1 ${result[2]} = ${result[1]} UAH\n` +
                `Дата оновлення: ${result[3]}\n\n` +
                'Курс був взятий з ресурсу:\n https://bank.gov.ua/');
        });
    }

    bot.on('message', msg => {
        const text = msg.text;
        const chatId = msg.chat.id; 

        if (text === '/start' || text === '/start@c_e_r_bot') {
            return bot.sendMessage(chatId, 'Вітаю вас у телеграм боті "Актуальний курс валют"!' +
                '\n\nДля виводу доступних команд бота натисніть "Доступні команди"', keyboardStart);
        }

        if (text === '/help' || text === '/help@c_e_r_bot') {
            return help(chatId);
        }

        if (text === '/usd' || text === '/usd@c_e_r_bot') {
            return currencyUSD(chatId);
        }

        // if (text === '/dice' || text === '/dice@c_e_r_bot') {
        //     return dice(chatId);
        // }

        return bot.sendMessage(chatId, '🚫 Це не зрозумілий для мене синтаксис. Спробуйте щось інше.' +
            '\n\n❗ Список доступних команд:', keyboardHelp);
    });

    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        const msgId = msg.message.message_id;

        if (data === 'help') {
            bot.deleteMessage(chatId, msgId);
            return help(chatId);
        }

        if (data === 'usd') {
            bot.deleteMessage(chatId, msgId);
            return currencyUSD(chatId);
        }
    });
}

start();