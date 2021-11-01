// const currencyURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const TelegramApi = require('node-telegram-bot-api');

const {keyboardStart, keyboardHelp} = require('./keyboards.js'); // Добавляємо клавіатури із keyboards.js у наш проект

const token = '2043882355:AAEa0_J1P2P7xHcBD466hizR-VW3mgVcCpo'; // Вводимо токен який ми отримали у Bot Father

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
  ]);

  const help = (chatId) => {
    return bot.sendMessage(chatId, '❗ Список доступних команд:', keyboardHelp);
  };

  bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start' || text === '/start@c_e_r_bot') {
      return bot.sendMessage(chatId, 'Вітаю вас у телеграм боті "Актуальний курс валют"!\n\nДля виводу доступних команд бота натисніть "Доступні команди"', keyboardStart);
    }

    if (text === '/help' || text === '/help@c_e_r_bot') {
      return help(chatId);
    }

    return bot.sendMessage(chatId, '🚫 Це не зрозумілий для мене синтаксис. Спробуйте щось інше.\n\n❗ Список доступних команд:', keyboardHelp);
  });

  bot.on('callback_query', msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === 'help') {
      return help(chatId);
    }
  });
}

start();