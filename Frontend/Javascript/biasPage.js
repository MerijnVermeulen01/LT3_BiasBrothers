const buttons = document.querySelectorAll('.biasButton');
const pressedButtons = [];
const headers = [document.getElementById('textHeader1'), document.getElementById('textHeader2'), document.getElementById('textHeader3')];

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if(pressedButtons.length <= 3){
            if (button.classList.contains('activeButton')) {
                button.classList.remove('activeButton');

                const index = pressedButtons.indexOf(button);
                if (index > -1) {
                    pressedButtons.splice(index, 1);
                    console.log(pressedButtons);
                }
            }

            else if (pressedButtons.length >= 0 && pressedButtons.length < 3) {
                button.classList.add('activeButton');
                pressedButtons.push(button);
            }

            headers.forEach((header, index) => {
                header.innerHTML = pressedButtons[index] ? pressedButtons[index].innerHTML : "Selecteer een bias";
            });
        }
    });
});