
import datetime
from datetime import date

def is_leap_year(year):
    """Определяет, является ли год високосным"""
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def get_weekday(day, month, year):
    """Определяет день недели для заданной даты"""
    days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
    return days[datetime.date(year, month, day).weekday()]

def calculate_age(day, month, year):
    """Вычисляет текущий возраст пользователя"""
    today = date.today()
    age = today.year - year
    
    # Проверяем, был ли уже день рождения в этом году
    if (month, day) > (today.month, today.day):
        age -= 1
    
    return age

def print_digital_date(day, month, year):
    """Выводит дату в формате электронного табло с использованием звёздочек"""
    # Шаблоны цифр для электронного табло (5x3)
    digits = {
        '0': ["***", "* *", "* *", "* *", "***"],
        '1': ["  *", "  *", "  *", "  *", "  *"],
        '2': ["***", "  *", "***", "*  ", "***"],
        '3': ["***", "  *", "***", "  *", "***"],
        '4': ["* *", "* *", "***", "  *", "  *"],
        '5': ["***", "*  ", "***", "  *", "***"],
        '6': ["***", "*  ", "***", "* *", "***"],
        '7': ["***", "  *", "  *", "  *", "  *"],
        '8': ["***", "* *", "***", "* *", "***"],
        '9': ["***", "* *", "***", "  *", "***"],
        ' ': ["   ", "   ", "   ", "   ", "   "]
    }
    
    # Форматируем дату как "дд мм гггг"
    date_str = f"{day:02d} {month:02d} {year}"
    
    # Создаем список для каждой строки вывода
    lines = [""] * 5
    
    # Формируем каждую строку вывода
    for char in date_str:
        digit_pattern = digits[char]
        for i in range(5):
            lines[i] += digit_pattern[i] + " "
    
    # Выводим результат
    print("\nДата вашего рождения в электронном формате:")
    for line in lines:
        print(line)

def get_valid_date():
    """Запрашивает и проверяет корректность даты рождения"""
    today = date.today()
    
    while True:
        try:
            year = int(input("Введите год рождения: "))
            if year < 1900 or year > today.year:
                print(f"Ошибка: год должен быть от 1900 до {today.year}")
                continue
                
            month = int(input("Введите месяц рождения (1-12): "))
            if month < 1 or month > 12:
                print("Ошибка: месяц должен быть от 1 до 12")
                continue
                
            day = int(input("Введите день рождения: "))
            
            # Проверяем существование даты
            try:
                birth_date = datetime.date(year, month, day)
                
                # Проверяем, что дата не в будущем
                if birth_date > today:
                    print("Ошибка: дата рождения не может быть в будущем")
                    continue
                    
                return day, month, year
                
            except ValueError as e:
                print(f"Ошибка: такой даты не существует - {e}")
                continue
                
        except ValueError:
            print("Ошибка: введите целое число")

def main():
    print("=== ВВОД ДАТЫ РОЖДЕНИЯ ===")
    
    # Получаем валидную дату рождения
    day, month, year = get_valid_date()
    
    # Вычисляем дополнительную информацию
    weekday = get_weekday(day, month, year)
    leap_year = is_leap_year(year)
    age = calculate_age(day, month, year)
    
    # Выводим результаты
    print(f"\n📅 Дата вашего рождения: {day:02d}.{month:02d}.{year}")
    print(f"📅 Вы родились в {weekday.lower()}")
    print(f"📅 {year} год был {'високосным' if leap_year else 'невисокосным'}")
    print(f"🎂 Вам сейчас {age} лет")
    
    # Выводим дату в формате электронного табло
    print_digital_date(day, month, year)

if __name__ == "__main__":
    main()
