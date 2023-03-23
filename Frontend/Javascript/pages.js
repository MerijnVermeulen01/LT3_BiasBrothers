const buttons = document.querySelectorAll('.biasButton');
const textArea = document.querySelectorAll('.buttonWrite')
const pressedButtons = [];
const pressedTextArea = [];
const filledTextareas = [];

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
        }
    });
});



// TODO: Werkend maken begin staat
// Function for the textarea from the page selfdevelopment and the buttonWrite css class to highlight in purple

// textArea.forEach((text) => {
//     text.addEventListener('click', () =>{
//         if(pressedTextArea.length <= 3){
//             if (button.classList.contains('activeButton')) {
//                 button.classList.remove('activeButton');
//
//                 const index = pressedTextArea.indexOf(text);
//                 if (index > -1) {
//                     pressedTextArea.splice(index, 1);
//                     console.log(pressedTextArea);
//                 }
//             }
//
//             else if (pressedTextArea.length >= 0 && pressedTextArea.length < 3) {
//                 button.classList.add('activeButton');
//                 pressedTextArea.push(text);
//             }
//         }
//     });
// });


// Changes color background when inputting a value -> String
const area = document.querySelectorAll('.buttonWrite');
area.forEach((text) => {
    text.addEventListener('input', () => {
        
        // Add
        if (text.value.length > 0 && text.value.trim() !== '') {
            text.classList.add('activeButton');
            filledTextareas.push(text);
            filledTextareas.slice(0,3)
        }
        
        // Remove
        else {
            const index = filledTextareas.indexOf(text);
            text.classList.remove('activeButton');
            filledTextareas.splice(index, 1);
            console.log(filledTextareas);
        }
    });
});

