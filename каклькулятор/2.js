let DisBnt = document.calc.ComBoBox;
let DisBnt1 = document.getElementById("CBB");
let last_value;

tval = Array.from(document.getElementsByName('btnNumber'));
DisBnt1.addEventListener('click', (t) => {
    last_value = document.calc.ComBoBox.value;

})
DisBnt.addEventListener('change', (e) => {




    let text = document.getElementById('input').value;
    switch (document.calc.ComBoBox.value) {
        case '2':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {
                    if (i >= 1) item.disabled = true;
                });


            }
            break;
        case '3':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 2) item.disabled = true;
                });
            }
            break;
        case '4':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 3) item.disabled = true;
                });
            }
            break;
        case '5':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 4) item.disabled = true;
                });
            }
            break;
        case '6':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 5) item.disabled = true;
                });
            }
            break;
        case '7':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 6) item.disabled = true;
                });
            }
            break;
        case '8':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 7) item.disabled = true;
                });
            }
            break;
        case '9':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 8) item.disabled = true;
                });
            }
            break;
        case '10':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 9) item.disabled = true;
                });
            }
            break;
        case '11':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 10) item.disabled = true;
                });
            }
            break;
        case '12':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 11) item.disabled = true;
                });

            }
            break;
        case '13':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 12) item.disabled = true;
                });
            }
            break;
        case '14':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 13) item.disabled = true;
                });
            }
            break;
        case '15':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 14) item.disabled = true;
                });
            }
            break;
        case '16':
            {
                tval.map((item, i) => {
                    item.disabled = false;
                });
                tval.map((item, i) => {

                    if (i >= 15) item.disabled = true;
                });
            }
            break;
    }

    switch (document.calc.ComBoBox.value) {
        case '2':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(2);
            }
            break;
        case '3':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(3);
            }
            break;
        case '4':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(4);
            }
            break;
        case '5':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(5);
            }
            break;
        case '6':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(6);
            }
            break;
        case '7':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(7);
            }
            break;
        case '8':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(8);
            }
            break;
        case '9':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(9);
            }
            break;
        case '10':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(10);
            }
            break;
        case '11':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(11).toUpperCase();
            }
            break;
        case '12':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(12).toUpperCase();
            }
            break;
        case '13':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(13).toUpperCase();
            }
            break;
        case '14':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(14).toUpperCase();
            }
            break;
        case '15':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = number.toString(15).toUpperCase();
            }
            break;
        case '16':
            {
                console.log(last_value);
                let number = BaseToDec(text, parseInt(last_value));
                document.getElementById('input').value = (number.toString(16)).toUpperCase();
            }
            break;

    }
});
last_value = document.calc.ComBoBox.value;



function BaseToDec(number, base) {
    var bar = "0123456789abcdef";
    number = number.toLowerCase();

    var out = 0;
    for (i = 0; i < number.length; i++) out += bar.indexOf(number[i]) * Math.pow(base, number.length - i - 1);
    return out;
}
let equal = document.getElementById('equal');
equal.addEventListener('click', (e) => {

    let sing;
    let first = '';
    let second = '';

    let text = document.getElementById('input').value;
    for (i = 0; i < text.length; i++) {
        if (text[i] != '+' && text[i] != '-' && text[i] != '*' && text[i] != '%') second += text[i];
        else {
            sing = text[i];
            first = second;
            second = '';

        }

    }
    try {
        let number_1 = BaseToDec(first, DisBnt.value);
        let number_2 = BaseToDec(second, DisBnt.value);
        let result;
        switch (sing) {
            case '+':
                {
                    result = number_1 + number_2;
                }
                break;
            case '-':
                { result = number_1 - number_2; }
                break;
            case '*':
                { result = number_1 * number_2; }
                break;
            case '%':
                { result = number_1 % number_2; }
                break;
        }

        document.getElementById('input').value = result.toString(parseInt(DisBnt.value))

    } catch {
        document.getElementById('input').value = 'Error'
    }


});