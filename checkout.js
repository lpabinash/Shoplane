var cart = localStorage.getItem("cart");
var cartItems = document.getElementById("quantity");
cartItems.innerHTML = cart;



var orderlist = localStorage.getItem("product-tobuy");
console.log(JSON.parse(this.orderlist))

    var totalAmount=0;
    var items=JSON.parse(orderlist);
    // console.log(items[0].product);


function checkoutDetail(){



var itemswrapper=document.createElement('div');
itemswrapper.id="itemswrapper";

var item=document.createElement('div');
item.id='item';
itemswrapper.appendChild(item);

var itemimage=document.createElement('div');
itemimage.id='itemimage';
item.appendChild(itemimage);

var thumbs=document.createElement('img');
thumbs.src=items[i].image;
itemimage.appendChild(thumbs);

var details=document.createElement('div');
details.id='details';
item.appendChild(details);

var itemName=document.createElement('h2');
itemName.innerHTML=items[i].product;
details.appendChild(itemName);
var quantity=document.createElement('h3');
quantity.id="quant";
quantity.innerText=items[i].quantity;
details.appendChild(quantity);

// quantity.selectedIndex="5";
console.log(items[i].quantity);

// details.appendChild(quantity);
// var option1=document.createElement('option');
// option1.value="1";
// option1.innerText="1";
// var option2=document.createElement('option');
// option2.value="2";
// option2.innerText="2";
// var option3=document.createElement('option');
// option3.value="3";
// option3.innerText="3";
// var option4=document.createElement('option');
// option4.value="4";
// option4.innerText="4";
// var option5=document.createElement('option');
// option5.value="5";
// option5.innerText="5";
// var option6=document.createElement('option');
// option6.value="6";
// option6.innerText="6";
// var option7=document.createElement('option');
// option7.value="7";
// option7.innerText="7";
// quantity.appendChild(option1);
// quantity.appendChild(option2);
// quantity.appendChild(option3);
// quantity.appendChild(option4);
// quantity.appendChild(option5);
// quantity.appendChild(option6);
// quantity.appendChild(option7);




// var priced=items[i].Amount;
// // console.log(typeof(price));
// quantity.onchange=function(){
//     // console.log(typeof(quantity.value));
//     var final=parseFloat(quantity.value) * priced ;
//     console.log(final)
//     price.innerHTML="Amount:" + final;
//     // var finalamount=0;
//     // var finalamount=finalamount+quantity.value*Obj.price;
//     // totalAmt.innerHTML="Rs."+ finalamount;
// }






var price=document.createElement('h3');
price.innerHTML="Amount:" + items[i].payable;

details.appendChild(price);

totalAmount=totalAmount+items[i].payable
var totalAmt=document.getElementById("totalAmt");
totalAmt.innerHTML="Rs."+ totalAmount;



return itemswrapper;

}




var checkoutpage=document.getElementById("checkoutpage");

        for(var i=0; i<items.length; i++) {
            
            // for(var j=1;j<items.length;j++){
            //     if(items[i].id != items[j].id){
                    checkoutpage.appendChild(checkoutDetail(items[i]));
                    // 
                    // checkoutDetail(items[j]).remove              
                // }else{
                //     console.log("hello");
                // }

            
            }
            // console.log(items[i]);


var finall=document.getElementById("final");
finall.onclick = function(){
    location.assign("orderconfirmation.html");
    localStorage.clear()
}

var backToHomepage=document.getElementById("logo");
backToHomepage.onclick = function() {
    location.assign("shoplane.html");
}






