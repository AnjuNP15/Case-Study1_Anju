// Function Ajax gets the data from the API and presents it in tabular format in the ToDo Page
//It also maipulates the data, transforming the true/false value to checkbox.

function ajax() {
  sessionStorage.setItem("completedtasks", "false");
  sessionStorage.setItem("counter", 0);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var output =
        "<table id='todotable'><thead><tr><th>User ID</th><th>ID</th><th>Title</th><th>Status</th></tr></thead><tbody>";
      for (var i = 0; i < response.length; i++) {
        output +=
          "<tr><td>" +
          response[i].userId +
          "</td><td>" +
          response[i].id +
          "</td><td>" +
          response[i].title +
          "</td><td>" +
          "<input type='checkbox' 'id='checkbox" + i + "'" + (response[i].completed ? "checked disabled='true'" : "") + " onchange='checkboxchange(this)'>" +
          "</td></tr>"
      }
      output += "</tbody></table>";
      document.getElementById("demo").innerHTML = output;
    }
  }
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}


//Function Checkboxchnage is called whenever a checkbox is checked/unchecked.
// It also shows the alert box when 5 tasks are completed.
function checkboxchange(sender) {
  var count = parseInt(sessionStorage.getItem("counter"));
  var completedtasks = sessionStorage.getItem("completedtasks");
  

  var sendervalue = sender.checked;

  if (sendervalue == true) {
    count = count + 1;
  }
  else {
    count = count - 1;
  }
  console.log(count, sendervalue);
  let mypromise = new Promise(function (resolve, reject) {
    if (count == 5 && completedtasks=="false") {
     
      sessionStorage.setItem("completedtasks", "true");
      resolve();
    }
    else {
      reject();
      console.log("rejected");
    }
  });
  mypromise
    .then(
      (value) => {
        alert("Congratulations 5 tasks have been completed!");
        sessionStorage.setItem("counter", count);
      },
      (error) => {
        sessionStorage.setItem("counter", count);
      }
    );
}
