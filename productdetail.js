var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id:'+localStorage.getItem("id") ;
window.history.pushState({ path: newurl }, '', newurl);


var ID=localStorage.getItem("id");
console.log(ID);
                       
                       var cart = localStorage.getItem("cart");
                        // console.log(cart);
                        var productToBuy = JSON.parse(localStorage.getItem("product-tobuy"));
                        // console.log(productToBuy.id);
                        if(productToBuy===null){
                            var productToBuy=[]
                        }
                        var count=0;
                        var cartItems = document.getElementById("quantity");
                        cartItems.innerHTML = cart;


function productdetail(Obj){
            var main=document.createElement('div');
            main.id='main';

            var selectedimage=document.createElement("div");
            selectedimage.id='largerImage';
            main.appendChild(selectedimage);

            var image=document.createElement('img');
            image.src=Obj.preview;
            selectedimage.appendChild(image);

            var detailSection=document.createElement("div");
            detailSection.id='details';
            main.appendChild(detailSection);

            var item=document.createElement("h1");
            item.innerText=Obj.name;
            detailSection.appendChild(item);
            var brand=document.createElement("h3");
            brand.innerText=Obj.brand;
            detailSection.appendChild(brand);
            var price=document.createElement("h2");
            price.innerText="Rs."+Obj.price;
            price.id="MRP";
            detailSection.appendChild(price);
            var Description=document.createElement("h2");
            Description.innerText="Description";
            Description.className="About";
            detailSection.appendChild(Description);
            var info=document.createElement("h4");
            info.innerText=Obj.description;
            detailSection.appendChild(info);
            var productPreview=document.createElement("h2");
            productPreview.innerText="Product Preview";
            productPreview.className="About";
            detailSection.appendChild(productPreview);
            var previews=document.createElement("div");
            previews.id="previews";
            detailSection.appendChild(previews);
            // var thumbs=document.createElement("img");
            // thumbs.src=Obj.photos;

            var photoArr = Obj.photos;

            for(var j=0;j<photoArr.length;j++) {
                // console.log(photoArr[j]);
                var thumbs = document.createElement('img');
                thumbs.src = Obj.photos[j];
                thumbs.className = "preview-image"
                
                previews.appendChild(thumbs);

                if(j===0){
                    thumbs.className==="active";
                }

                // thumbs.onclick=function(){
                //     thumbs.style.border="2px solid #0000FF";
                //     }
            }
            

            var buy=document.createElement("button");
            buy.innerHTML="Add To Cart";
            buy.id='buy';
            detailSection.appendChild(buy);


           

            buy.onclick = function() {
                
                 for(var j=0;j<productToBuy.length;j++) {
                if(productToBuy[j].id === Obj.id) {
                    break;
                }
            }


                    var dataObj={
                        "id":Obj.id,
                        "product":Obj.name,
                        "Amount":Obj.price,
                        "image":Obj.preview,
                        "quantity":count
                    }
                        
                            if(dataObj.id === Obj.id) {
                        count= ++count;
                        var payable = count*Obj.price;
                        dataObj.quantity = count;
                        dataObj.payable = payable;
                        
                    }

                        // productToBuy.push(dataObj);
                        productToBuy[j] = dataObj

                    // productToBuy.push(dataObj);
                    console.log(productToBuy.length)
                    localStorage.setItem('product-tobuy', JSON.stringify(productToBuy));
                     cart = ++cart;
                     cartItems.innerHTML = cart;
                     localStorage.setItem("cart", cart);
                     console.log(Obj.id);

                    
               
        }

            previews.onclick = function(e) {
                image.src = e.target.src;
                // .style.border="2px solid #0000FF"
                
            }

            var insidecart=document.getElementById("cart");
            insidecart.style.cursor="pointer";
            insidecart.onclick=function(){
                location.assign("checkout.html");
            insidecart.style.color="red";
}


    return main;
}



var detPage=document.getElementById("detailPage")
var xhttp = new XMLHttpRequest();
xhttp.open('Get', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
            if(data[i].id === localStorage.getItem("id"))
                detPage.appendChild(productdetail(data[i]));
        }
    }
}
xhttp.send();


var backToHomepage=document.getElementById("logo");
backToHomepage.onclick = function() {
    location.assign("shoplane.html");
}



// previews.onclick = function(e) {
//     previews.style.border="2px solid #0000FF"
// }


var Thu=document.getElementsByClassName("preview-image");
console.log(Thu);
Thu.onclick=function(){
    alert("clicked?")
        }

