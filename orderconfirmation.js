// var http = new XMLHttpRequest();
// var url = 'https://5d76bf96515d1a0014085cf9.mockapi.io/order/';
// var id=1;
// var d = new Date();
// var params = {
//         "id":id,
//         "createdAt":d,
//         "name":"Abinash",
//         "avatar":"http://onepiece-treasurecruise.com/en/wp-content/uploads/c0007.png"
// }
// http.open('POST', url, true);

// //Send the proper header information along with the request
// http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// http.onreadystatechange = function() {//Call a function when the state changes.
//     if(http.readyState == 4 && http.status == 200) {
//         alert(http.responseText);
//     }
// }
// http.send(params);

var backToHomepage=document.getElementById("logo");
backToHomepage.onclick = function() {
    location.assign("shoplane.html");
}


function login() {
    // Form fields, see IDs above
    const params = {
        "id":id,
        "createdAt":d,
        "name":"Abinash",
        "avatar":"http://onepiece-treasurecruise.com/en/wp-content/uploads/c0007.png"
}
var id=1;
var d = new Date();
    const http = new XMLHttpRequest()
    http.open('POST', 'https://5d76bf96515d1a0014085cf9.mockapi.io/order/')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params)) // Make sure to stringify
    http.onload = function() {
        // Do whatever with response
        alert("hello")
    }
}