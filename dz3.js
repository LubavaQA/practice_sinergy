let dz = 3;
console.log("Домашнее задание " + dz);


/*
function determineQuarter(minutes) {
    // Проверяем корректность входных данных
    if (minutes < 0 || minutes > 59 || !Number.isInteger(minutes)) {
        console.log("Ошибка: введите целое число от 0 до 59");
        return;
    }

    // Определяем четверть часа
    if (minutes >= 0 && minutes <= 14) {
        console.log("Первая четверть");
    } else if (minutes >= 15 && minutes <= 29) {
        console.log("Вторая четверть");
    } else if (minutes >= 30 && minutes <= 44) {
        console.log("Третья четверть");
    } else {
        console.log("Четвертая четверть");
    }
}

// Примеры использования с разными значениями минут
const minutes1 = 7;
const minutes2 = 22;
const minutes3 = 37;
const minutes4 = 52;

console.log(`Минуты: ${minutes1}`);
determineQuarter(minutes1);

console.log(`\nМинуты: ${minutes2}`);
determineQuarter(minutes2);

console.log(`\nМинуты: ${minutes3}`);
determineQuarter(minutes3);

console.log(`\nМинуты: ${minutes4}`);
determineQuarter(minutes4);

// Пример с некорректными данными
console.log(`\nМинуты: 65`);
determineQuarter(65);
*/

/*
function determineQuarter(minutes) {
    // Проверка корректности данных
    if (minutes < 0 || minutes > 59) {
        return "Ошибка: введите число от 0 до 59";
    }

    // Определение четверти с использованием деления
    const quarter = Math.floor(minutes / 15) + 1;
    const quarters = ["Первая", "Вторая", "Третья", "Четвертая"];
    
    return `${quarters[quarter - 1]} четверть`;
}

// Тестирование
const testMinutes = [5, 18, 33, 47, 60];

testMinutes.forEach(minutes => {
    console.log(`Минуты: ${minutes} -> ${determineQuarter(minutes)}`);
});
*/



function getSeason(monthNumber) {
    // Проверяем, что номер месяца корректен
    if (monthNumber < 1 || monthNumber > 12 || !Number.isInteger(monthNumber)) {
        console.log("Ошибка: введите целое число от 1 до 12");
        return;
    }

    // Определяем время года
    let season;
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        season = "Зима";
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        season = "Весна";
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        season = "Лето";
    } else {
        season = "Осень";
    }

    console.log(`Месяц №${monthNumber} - это ${season.toLowerCase()}`);
    return season;
}

// Альтернативный вариант с switch (более читаемый)
function getSeasonSwitch(monthNumber) {
    // Проверка корректности данных
    if (monthNumber < 1 || monthNumber > 12 || !Number.isInteger(monthNumber)) {
        console.log("Ошибка: введите целое число от 1 до 12");
        return;
    }

    // Определение времени года через switch
    let season;
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "Лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "Осень";
            break;
    }

    console.log(`Месяц №${monthNumber} - это ${season.toLowerCase()}`);
    return season;
}

// Тестирование функции
console.log("=== Тестирование определения времени года ===\n");

// Корректные данные
getSeason(1);   // Январь - Зима
getSeason(4);   // Апрель - Весна
getSeason(7);   // Июль - Лето
getSeason(10);  // Октябрь - Осень

console.log("\n=== Тестирование с некорректными данными ===");
// Некорректные данные
getSeason(0);   // Ошибка
getSeason(13);  // Ошибка
getSeason(5.5); // Ошибка (не целое число)

// Массив для тестирования всех месяцев
console.log("\n=== Все месяцы ===");
const allMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
allMonths.forEach(month => {
    getSeason(month);
});

function getSeasonCompact(monthNumber) {
    // Проверка корректности данных
    if (monthNumber < 1 || monthNumber > 12 || !Number.isInteger(monthNumber)) {
        return "Ошибка: введите целое число от 1 до 12";
    }

    // Определение времени года через индекс в массиве
    const seasons = ["Зима", "Зима", "Весна", "Весна", "Весна", "Лето", 
                    "Лето", "Лето", "Осень", "Осень", "Осень", "Зима"];
    
    const season = seasons[monthNumber - 1];
    return `Месяц №${monthNumber} - это ${season.toLowerCase()}`;
}

// Тестирование компактной версии
console.log("=== Компактная версия ===");
for (let i = 0; i <= 13; i++) {
    console.log(getSeasonCompact(i));
}


//Напишите скрипт, который будет выводить в консоль квадрат числа, если оно четное, и его кубическую степень в противном случае

function processNumber(num) {
    // Проверяем, что передано число
    if (typeof num !== 'number' || isNaN(num)) {
        console.log("Ошибка: передано не число");
        return;
    }

    // Проверяем четность и вычисляем результат
    if (num % 2 === 0) {
        const square = num * num;
        console.log(`Число ${num} четное. Квадрат: ${square}`);
        return square;
    } else {
        const cube = num * num * num;
        console.log(`Число ${num} нечетное. Куб: ${cube}`);
        return cube;
    }
}

// Функция для обработки нескольких чисел
function processNumbers(numbers) {
    console.log("=== Обработка чисел ===");
    numbers.forEach(num => {
        processNumber(num);
        console.log("---");
    });
}

// Тестирование с разными числами
console.log("=== Тестирование скрипта ===\n");

// Одиночные примеры
processNumber(4);   // Четное
processNumber(7);   // Нечетное
processNumber(-2);  // Четное отрицательное
processNumber(0);   // Ноль (четное)

console.log("\n=== Групповое тестирование ===");
// Групповое тестирование
const testNumbers = [2, 5, 10, 3, 8, 1];
processNumbers(testNumbers);

// Альтернативный компактный вариант
console.log("\n=== Компактный вариант ===");
function processNumberCompact(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return "Ошибка: не число";
    }
    
    const isEven = num % 2 === 0;
    const result = isEven ? num ** 2 : num ** 3;
    const operation = isEven ? "квадрат" : "куб";
    
    return `Число ${num} - ${isEven ? "четное" : "нечетное"}. ${operation}: ${result}`;
}

// Тестирование компактной версии
[4, 7, -2, 0, 2.5].forEach(num => {
    console.log(processNumberCompact(num));
});