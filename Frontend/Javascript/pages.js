const buttons = document.querySelectorAll('.biasButton');
const pressedButtons = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if(pressedButtons.length <= 3){
            if (button.classList.contains('activeButton')) {
                button.classList.remove('activeButton');

                // button.removeChild(button.querySelector('.circle'));
                const index = pressedButtons.indexOf(button);
                if (index > -1) {
                    pressedButtons.splice(index, 1);
                    console.log(pressedButtons);
                }
            }

            else if (pressedButtons.length >= 0 && pressedButtons.length < 3) {
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
        }
    });
});
