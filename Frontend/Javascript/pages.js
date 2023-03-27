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

// xChanges color background when inputting a value -> String
const area = document.querySelectorAll('.buttonWrite');
area.forEach((text) => {
    text.addEventListener('input', () => {

        let activeCount = 0;
        // Add
        if (text.value.length > 0 && text.value.trim() !== '' && activeCount <= 3) {
            text.classList.add('activeButton');
            filledTextareas.push(text);
            activeCount++;

        }

        // Remove
        else {
            text.classList.remove('activeButton');
            console.log(activeCount);
            activeCount--;
        }
    });
});

