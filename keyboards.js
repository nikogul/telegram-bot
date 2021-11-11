export const keyboardStart = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{
                text: 'Доступні команди',
                callback_data: 'help'
            }],
        ]
    })
};
export const keyboardHelp = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{
                text: 'Актуальний курс долара',
                callback_data: 'usd'
            }],
            [{
                text: 'Актуальний курс євро',
                callback_data: '1'
            }],
        ]
    })
};