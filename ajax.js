function ajax (){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
            var response =JSON.parse(this.responseText);
            console.log(jtitle);
           
            var output="";
            for ( var i=0;i<response.length;i++){
                output +="<li>" +response[i].title+ "</li>";
            }
document.getElementById("demo")=output;
        }
    }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
}
