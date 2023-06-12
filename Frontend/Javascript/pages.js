const buttons = document.querySelectorAll('.biasButton');
const textArea = document.querySelectorAll('.buttonWrite')
const pressedButtons = [];
const headers = [document.getElementById('textHeader1'), document.getElementById('textHeader2'), document.getElementById('textHeader3')];

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (pressedButtons.length <= 3) {
            if (button.classList.contains('activeButton')) {
                button.classList.remove('activeButton');

                // button.removeChild(button.querySelector('.circle'));
                const index = pressedButtons.indexOf(button);
                if (index > -1) {
                    pressedButtons.splice(index, 1);
                    console.log(pressedButtons);
                }
            } else if (pressedButtons.length >= 0 && pressedButtons.length < 3) {
                button.classList.add('activeButton');
                // const circle = document.createElement('div');
                // circle.classList.add('circle');
                // console.log(pressedButtons);
                // circle.textContent = pressedButtons.length + 1;
                // console.log(circle);
                // button.appendChild(circle);
                // circle.style.top = button.offsetTop + 'px';
                // circle.style.left = button.offsetLeft + 'px';
                pressedButtons.push(button);

            }

            headers.forEach((header, index) => {
                header.innerHTML = pressedButtons[index] ? pressedButtons[index].innerHTML.replace(/<span.*<\/span>/, '') : "Selecteer een bias";
            });

        }
    });
});

const area = document.querySelectorAll('.buttonWrite');
let activeCount = 0;
const activeTextareas = [];

area.forEach((text) => {
    text.addEventListener('click', () => {

        // Add
        if (text.classList.contains('activeButton')) {
            text.classList.remove('activeButton');

            const index = activeTextareas.indexOf(text);
            if (index > -1) {
                activeTextareas.splice(index, 1);
            }
        } else if (text.value.length > 0 && text.value.trim() !== '') {
            if (activeTextareas.length <= 2) {
                text.classList.add('activeButton');

                activeTextareas.push(text);
            }
        }

    });
});

