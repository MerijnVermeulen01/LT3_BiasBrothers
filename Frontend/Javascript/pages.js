const buttons = document.querySelectorAll('.biasButton');
const pressedButtons = [];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        if (button.classList.contains('activeButton')) {
            button.classList.remove('activeButton');
            button.removeChild(button.querySelector('.circle'));
            const index = pressedButtons.indexOf(button);

            if (index > -1) {
                pressedButtons.splice(index, 1);
                renumberCircles()
            }
        }

        else {
            button.classList.add('activeButton');
            const circle = document.createElement('div');

            circle.classList.add('circle');
            circle.textContent = pressedButtons.length + 1;
            button.appendChild(circle);
            circle.style.top = button.offsetTop + 'px';
            circle.style.left = button.offsetLeft + 'px';
            pressedButtons.push(button);

            console.log(pressedButtons.length);

        }
    });
});



function renumberCircles() {
    nextNumber = 1;
    buttons.forEach((circle, index) => {
        circle.dataset.number = nextNumber;
        nextNumber++;
    });
}
