const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.status); // returns 200
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
    if (response == 404){
        window.location.replace("http://www.w3schools.com");
    }
  });
});

