let age = prompt('Введіть рік народження:');
let city = prompt('Введіть місто, у якому ви проживаєте:');
let sport = prompt('Який ваш улюблений вид спорту?');
let result = '';

if (age === null && city === null && sport === null){
    result = 'Ви не ввели ніяких даних!'
}
if (age === null){
    alert('Шкода, що ви не захотіли ввести свій рік народження.');
} else {
    result += 'Ваш вік: ' + (2023 - age) + '\n';
}

if (city === null){
    alert('Шкода, що ви не захотіли ввести своє місто.');
} else {
    switch (city) {
        case 'Київ':
            result += 'Ти живеш у столиці України!' + '\n';
            break;
        case 'Лондон':
            result += 'Ти живеш у столиці Великобританії!' + '\n';
            break;
        case 'Вашингтон':
            result += 'Ти живеш у століці США!' + '\n';
            break;
        default:
            result += 'Ти живеш у місті ' + city + '\n';
    }
}

if (sport === null){
    alert('Шкода, що ви не захотіли ввести свій улюблений вид спорту.');
} else {
    switch (sport) {
        case 'Футбол':
            result += 'Круто! Хочеш стати як Лєо Мессі?';
            break;
        case 'Баскетбол':
            result += 'Круто! Хочеш стати як Майкл Джордан?';
            break;
        case 'Бокс':
            result += 'Круто! Хочеш стати як Віталій Кличко?';
            break;
        default:
            result += 'Ваш улюблений спорт: ' + sport;
    }
}
alert(result);








