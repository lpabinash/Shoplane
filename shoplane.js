$(document).ready(function(){
    $('#slick').slick({
        // rtl: true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        autoplay:true,
        autoplaySpeed:1500
        
    });
  })




//   <div id="sampleitem">
//                 <img id="sampleimage" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg">
//                 <h3>Men Navy Blue Solid Sweatshirt</h3>
//                 <h5>United Colors of Benetton</h5>
//                 <h4>Rs.2599</h4>
//             </div>

function itemCardcreation(Obj){



var itemCard=document.createElement('div');
itemCard.id='sampleitem';

var itemImage=document.createElement('img');
itemImage.id='sampleimage';
itemImage.src=Obj.preview;
itemCard.appendChild(itemImage);

var itemName=document.createElement('h3');
itemName.innerText=Obj.name;
itemCard.appendChild(itemName);

var itemBrand=document.createElement('h5');
itemBrand.innerText=Obj.brand;
itemCard.appendChild(itemBrand);

var itemPrice=document.createElement('h4');
itemPrice.innerText="Rs."+Obj.price;
itemCard.appendChild(itemPrice);

itemCard.onclick = function() {
    localStorage.setItem('id', Obj.id);
    console.log(Obj.id);
    location.assign("productdetail.html");
}

var insidecart=document.getElementById("cart");
            insidecart.style.cursor="pointer";
            insidecart.onclick=function(){
                location.assign("checkout.html");
            insidecart.style.color="red";
            }

return itemCard;



}


var cart = localStorage.getItem("cart");
// var notAdded = localStorage.getItem("notAdded");

if(cart === undefined || cart === null) {
    cart = 0;
}
// if(notAdded === undefined || notAdded === null) {
//     notAdded = "true";
// }

var itemQuantity = document.getElementById("quantity");
itemQuantity.innerText = cart;

localStorage.setItem("cart", itemQuantity.innerText);
// localStorage.setItem("notAdded", notAdded);



var menuData = document.getElementById("menuitem");
var accessoriesData = document.getElementById("Accessories");
var apiEndpoint = "https://5d76bf96515d1a0014085cf9.mockapi.io/product"

var xhttp = new XMLHttpRequest();
xhttp.open('GET',apiEndpoint,true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        for(var i = 0; i<=data.length; i++)
        {   
            if(data[i].isAccessory === false){
            menuData.appendChild(itemCardcreation(data[i]));
            }else{
                accessoriesData.appendChild(itemCardcreation(data[i]));
            }

        }
    }
}

xhttp.send();



var backToHomepage=document.getElementById("logo");
backToHomepage.onclick = function() {
    location.assign("shoplane.html");
}

// var xhttp = new XMLHttpRequest();
// xhttp.open('GET',apiEndpoint,true);
// xhttp.onreadystatechange = function() {
//     if(this.readyState === 4) {
//         var data = JSON.parse(this.responseText);
//         for(var i = 5; i < data.length; i++)
//         {
//             accessoriesData.appendChild(itemCardcreation(data[i]));
//             console.log(itemCardcreation(data[i]));
//         }
//     }
// }

// xhttp.send();
