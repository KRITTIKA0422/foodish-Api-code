

"use strict";
// Creating HTML Elements using DOM
const heading=document.createElement("header");
document.body.appendChild(heading);
heading.innerHTML=`<img src="https://thetechinfinite.com/wp-content/uploads/2020/04/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.jpg"height=100px width=200px>World of Emojis<img src="https://images.news18.com/ibnlive/uploads/2021/12/emojis_2021-163869711716x9.jpg"height=100px width=200px>`;
heading.id="title";
const description=document.createElement("p");
document.body.appendChild(description);
description.id="description";
description.innerHTML="Please choose the type of food then click on submit to get the food image";
const division1=document.createElement("div");
division1.class="container";
division1.id="div1";
document.body.appendChild(division1);
const row=document.createElement("div");
row.class="row";
row.id="row1";
document.getElementById("div1").appendChild(row);
const col1=document.createElement("div");
col1.class="col";
col1.id="column1";
document.getElementById("row1").appendChild(col1);
const col2=document.createElement("div");
col2.class="col";
col2.id="column2";
document.getElementById("row1").appendChild(col2);
const biryaniInput=document.createElement("input");
biryaniInput.type="radio";
biryaniInput.name="foodDish";
biryaniInput.value="biryani";
document.getElementById("column1").appendChild(biryaniInput);
const biryaniLevel=document.createElement("level");
biryaniLevel.innerHTML="Biryani";
document.getElementById("column1").appendChild(biryaniLevel);
const space1=document.createElement("br");
document.getElementById("column1").appendChild(space1);
const burgerInput=document.createElement("input");
burgerInput.type="radio";
burgerInput.name="foodDish";
burgerInput.value="burger";
document.getElementById("column1").appendChild(burgerInput);
const burgerLevel=document.createElement("level");
burgerLevel.innerHTML="Burger";
document.getElementById("column1").appendChild(burgerLevel);
const space2=document.createElement("br");
document.getElementById("column1").appendChild(space2);
const butterChickenInput=document.createElement("input");
butterChickenInput.type="radio";
butterChickenInput.name="foodDish";
butterChickenInput.value="butter-chicken";
document.getElementById("column1").appendChild(butterChickenInput);
const butterChickenLevel=document.createElement("level");
butterChickenLevel.innerHTML="Butter-Chicken";
document.getElementById("column1").appendChild(butterChickenLevel);
const space3=document.createElement("br");
document.getElementById("column1").appendChild(space3);
const dessertInput=document.createElement("input");
dessertInput.type="radio";
dessertInput.name="foodDish";
dessertInput.value="dessert";
document.getElementById("column1").appendChild(dessertInput);
const dessertLevel=document.createElement("level");
dessertLevel.innerHTML="Dessert";
document.getElementById("column1").appendChild(dessertLevel);
const space4=document.createElement("br");
document.getElementById("column1").appendChild(space4);
const dosaInput=document.createElement("input");
dosaInput.type="radio";
dosaInput.name="foodDish";
dosaInput.value="dosa";
document.getElementById("column1").appendChild(dosaInput);
const dosaLevel=document.createElement("level");
dosaLevel.innerHTML="Dosa";
document.getElementById("column1").appendChild(dosaLevel);
const space5=document.createElement("br");
document.getElementById("column1").appendChild(space5);
const idlyInput=document.createElement("input");
idlyInput.type="radio";
idlyInput.name="foodDish";
idlyInput.value="idly";

document.getElementById("column1").appendChild(idlyInput);
const idlyLevel=document.createElement("level");
idlyLevel.innerHTML="Idly";
document.getElementById("column1").appendChild(idlyLevel);
const space6=document.createElement("br");
document.getElementById("column1").appendChild(space6);
const pastaInput=document.createElement("input");
pastaInput.type="radio";
pastaInput.name="foodDish";
pastaInput.value="pasta";
document.getElementById("column1").appendChild(pastaInput);
const pastaLevel=document.createElement("level");
pastaLevel.innerHTML="Pasta";
document.getElementById("column1").appendChild(pastaLevel);
const space7=document.createElement("br");
document.getElementById("column1").appendChild(space7);
const pizzaInput=document.createElement("input");
pizzaInput.type="radio";
pizzaInput.name="foodDish";
pizzaInput.value="pizza";
document.getElementById("column1").appendChild(pizzaInput);
const pizzaLevel=document.createElement("level");
pizzaLevel.innerHTML="Pizza";
document.getElementById("column1").appendChild(pizzaLevel);
const space8=document.createElement("br");
document.getElementById("column1").appendChild(space8);
const riceInput=document.createElement("input");
riceInput.type="radio";
riceInput.name="foodDish";
riceInput.value="rice";
document.getElementById("column1").appendChild(riceInput);
const riceLevel=document.createElement("level");
riceLevel.innerHTML="Rice";
document.getElementById("column1").appendChild(riceLevel);
const space9=document.createElement("br");
document.getElementById("column1").appendChild(space9);
const samosaInput=document.createElement("input");
samosaInput.type="radio";
samosaInput.name="foodDish";
samosaInput.value="samosa";
document.getElementById("column1").appendChild(samosaInput);
const samosaLevel=document.createElement("level");
samosaLevel.innerHTML="Samosa";
document.getElementById("column1").appendChild(samosaLevel);
const space10=document.createElement("br");
document.getElementById("column1").appendChild(space10);
const numLevel=document.createElement("level");
numLevel.innerHTML="Image id";
document.getElementById("column1").appendChild(numLevel);
const imgNumber=document.createElement("input");
imgNumber.type="text";
document.getElementById("column1").appendChild(imgNumber);
const space11=document.createElement("br");
document.getElementById("column1").appendChild(space11);
const submitBtn=document.createElement("button");
submitBtn.class="btn1";
submitBtn.innerHTML="SUBMIT";
submitBtn.id="submit";
document.getElementById("column1").appendChild(submitBtn);
const images=document.createElement("img");
document.getElementById("column2").appendChild(images);
var foodName;
var no_of_img;
    
//const url = `https://foodish-api.herokuapp.com/images/${foodName}/${foodName}${no_of_img}.jpg`;

// Fetch API()
//  async function food(url) {
//    const response = await fetch(url);
//    var data=await response.json();
//    console.log(data);
//    view(data);                               //calling function view() to display the data
//   } 
//  let foodImg= food(url);
//  foodImg
//    .try(function (value) {                       //try and catch are used to check for errors
//      console.log(JSON.stringify(value));
//    })
//    .catch(function (error) {
//      console.log(error);
//    })
//    .finally(function () {
//      console.log("fetch api ran successfully !");   //promise ran successfully
//    });
 


function view(){

  document.getElementById("submit").onclick=function(){
    var selection=document.getElementsByName("foodDish"); 
   for(let i=0;i<selection.length;i++)
    {
     if(selection[i].checked){
     console.log(selection[i].value);
     console.log(imgNumber.value);
    foodName=selection[i].value;
    no_of_img=imgNumber.value;
    //images.src=`${}`;
    const url = `https://foodish-api.herokuapp.com/images/${foodName}/${foodName}${no_of_img}.jpg`;
    async function food(url) {
      const response = await fetch(url);
      var data=await response.json();
      console.log(data);
      console.log(data.images);
                                     //calling function view() to display the data
     } 
    let foodImg= food(url);
    foodImg
      .try(function (value) {                       //try and catch are used to check for errors
        console.log(JSON.stringify(value));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("fetch api ran successfully !");   //promise ran successfully
      });
 
   
     }
    }
  }
}
view();
