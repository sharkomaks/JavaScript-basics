const language = prompt('Выберите и введите ваш язык (en, ru, de)').toLowerCase();

switch (true) {
    case language === 'en':
    case language === 'english':
        console.log('Greetings');
        break;
    case language === 'ru':
    case language === 'русский':
        console.log('Здравствуйте');
        break;
    case language === 'de':
    case language === 'deutsch':
        console.log('Guten Tag');
        break;
    default:
        console.log('Вы не ввели ');
}