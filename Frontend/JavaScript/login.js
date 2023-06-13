// let buttonLogin = document.getElementById("loginButton");
// let buttonAdmin = document.getElementById("adminButton");
// onclick="window.open('index.html')"
// onclick="window.open('./Pages/adminportal.html')"
function checkButtonLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username.includes("@")) {
    sendAdminData(username, password, "admin");
  } else {
    sendParcipantData(username, password, "participant");
  }
}

function sendAdminData(username, password, typeOfLogin) {
  // Creating a XHR object
  let xhr = new XMLHttpRequest();
  let url;
  let urlFetch;
  if (typeOfLogin == "admin") {
    url = "http://localhost:7070/AdminLogin";
    urlFetch = "http://localhost:7070/CheckAdmin";
  } else {
    url = "http://localhost:7070/ParticipantLogin";
    urlFetch = "http://localhost:7070/CheckParticipant";
  }

  // open a connection
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  // Create a state change callback
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(this.responseText);
    }
  };

  // Converting JSON data to string
  var data = JSON.stringify({
    username: username,
    password: password,
  });

  console.log(data);
  // Sending data with the request
  xhr.send(data);

  fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      try {
        alert(data);
      } catch (error) {}
    });
}
