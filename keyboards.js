module.exports = {
    keyboardStart: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Доступні команди',
                    callback_data: 'help'
                }],
            ]
        })
    },

    keyboardHelp: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Актуальний курс валют',
                    callback_data: '1'
                }],
            ]
        })
    }
};