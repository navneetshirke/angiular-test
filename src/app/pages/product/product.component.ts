import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  arrayOfProducts = [

    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "CHECK PRINT SHIRT",
      "price": 110
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "GLORIA HIGH LOGO SNEAKER",
      "price": 91
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "CATE RIGID BAG",
      "price": 94.5
    },
    {
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 438.9
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 20
    }


  ]
 
  constructor() { }



   //Model variables 
   id_product;
   name_product;
   categorie_product;
   quantity_product;
   price_product;
   taxes_product;
 
   //Array data
   data = [];
   data_product = []
   //Functions
   addProduct(id_product, 
              name_product,
            )
   {
     //Showing data on console
     
     //Evaluate if localstorage != null
     if(JSON.parse(localStorage.getItem("data_product")) != null)
     {
       //Push the object array
       this.data = JSON.parse(localStorage.getItem("data_product"));
     }
     //Push elements
     this.data.push(
     {
         id_product:id_product,
         name_product:name_product,
     });
 
     //LocalStorage operations
     //Set item
     localStorage.setItem("data_product", JSON.stringify(this.data));
     //Get Item
     this.data_product = JSON.parse(localStorage.getItem("data_product"));
     //Console
     //console.log("Product: ", this.data_product, "Longitud: ", this.data_product.length);
   }
 
   getProducts()
   {
     console.log("Person: ", JSON.parse(localStorage.getItem("data_product")));
     this.data_product = JSON.parse(localStorage.getItem("data_product"));
   }
 
   editProduct()
   {
     var products = JSON.parse(localStorage.getItem("data_product"));
     for (var i = 0; i < products.length; i++) {
       if(products[i].id_product == 1)
       {  
           console.log("name: ", products[i].name_product)
           products[i].quantity_product = "150";  //add two
           break;  //exit loop since you found the person
       }
     }
     localStorage.setItem("data_product", JSON.stringify(products));
     
     //Get Item
     this.data_product = JSON.parse(localStorage.getItem("data_product"));
     console.log(this.data_product)
   }
 
   deleteProduct()
   {    
     var products = JSON.parse(localStorage.getItem("data_product"));
     for (var i = 0; i < products.length; i++) {
       if(products[i].id_product == 1)
       {  
           products.splice(i, 1);
           break;  //exit loop since you found the person
       }
     }
     localStorage.setItem("data_product", JSON.stringify(products));
     
     //Get Item
     this.data_product = JSON.parse(localStorage.getItem("data_product"));
     console.log(this.data_product)
   }
 

  ngOnInit() {
    var i;
    for (i = 0; i < this.arrayOfProducts.length; i++) {
      console.log(this.arrayOfProducts)  
    }
    
  }

}
