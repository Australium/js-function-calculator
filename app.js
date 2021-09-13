// Нужно создать функцию калькулятор;
// Нужно запросить у пользователя символ для вычисления(оператор: + , - , / , *);
// Нужно запросить у пользователя числа(операнды);
// Сделать необходимые проверки, ну или минимум: проверить ввел ли пользователь число, а не буквы, если нет, то что-то сделать.
// Высчитать результат математического выражения после запроса чисел и оператора;
// Вернуть нам результат для его вывода/показа через alert;

(function calculator () {
    let operator = askForOperator('Введите оператор из доступных( + , - , / , * )');
    if (operator === undefined) {
        return;
    }
    let number1 = askForNumber('Введите число');
    if (number1 === undefined) {
        return;
    }
    let number2 = askForNumber('Введите число');
    if (number2 === undefined) {
        return;
    }
    let result = calculateOperatorAndNumbers(operator, number1, number2);
    alert(result);

    function askForOperator(message) {
        let getOperator = prompt(message);
        
        if (getOperator === '+' || getOperator === '-' || getOperator === '/' || getOperator === '*') {
            return getOperator;
        } else {
            alert('Принимаются лишь такие операторы: + , - , / , *');
        }
    }

    function askForNumber(message) {
        let getNumber = prompt(message);
        
        if (getNumber === '0') {
            getNumber = +getNumber;
            return getNumber;
        } else if (+getNumber == '') {
            alert('Принимаются лишь числа!!!');
            return undefined;
        } else if (getNumber == Number(getNumber)) {
            getNumber = +getNumber;
            return getNumber;
        } else {
            alert('Принимаются лишь числа!!!');
        }
    }

    function calculateOperatorAndNumbers(operator, number1, number2) {
        if (operator === '+') {
            return number1 + number2;
        } else if (operator === '-') {
            return number1 - number2;
        } else if (operator === '/') {
            return number1 / number2;
        } else if (operator === '*') {
            return number1 * number2;
        }
    }
}());