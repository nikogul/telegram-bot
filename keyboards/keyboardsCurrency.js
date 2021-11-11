export const keyboardCurrency = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{
                text: 'Актуальний курс долара',
                callback_data: 'usd'
            }],
            [{
                text: 'Актуальний курс євро',
                callback_data: 'eur'
            }],
            [{
                text: 'Актуальний курс рубля',
                callback_data: 'rub'
            }],
        ]
    })
};