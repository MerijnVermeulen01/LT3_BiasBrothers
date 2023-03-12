// const "name" = document.querySelector('"html where u want it"');
fetch('http://localhost:7070/MyBias')
    .then(repsone => repsone.json())
    .then(data => {
        data.forEach(post => {
            // "name".insertAdjacentHTML('beforeend', `"In which HTML tag u want it" ${post."point u want in the JSON"} "In which HTML tag u want it"`);
        })
    }) 
