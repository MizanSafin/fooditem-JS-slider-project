
// rest operation=======================================
// let sum =  (...a)=>{
//    let total = 0;
//    for (let i of a){
//        total += i;
//        console.log(total)
//    }
    
// }
// sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);


// let arr= (a,b,c,d, ...e)=>{
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e);
//     e.push("water","love");
//     console.log(e.length)
// }

// arr(1,2,3,45,"ff","Apple",22,33,4,55)

//spread Array================================================

// es5 and es6

let arr1 =[1,2,3,4];
let arr2 = [5,6,7,8];
// arr1 = arr1.concat(arr2);

// console.log(arr1);

let arr3 = [0,...arr1,...arr2,9,10,11,12]
console.log(arr3)

//

// let multiColors1 =  ["red","green","blue","yellow"];
// let multiColors2 = multiColors1;
// multiColors2.push("white","black")
// console.log(multiColors1);

//ES6

let multiColors1 = ["red","green","blue"];
let multiColors2 = multiColors1;

multiColors2 = [...multiColors2 , "green","yellow"]
console.log(multiColors2)
let name =" mizan";
console.log("hello my name is " + name);
console.log(`Hello my name is ${name}`)



//Array & object destructuring=================================

let multiColors = ["red","green","blue","white"];

let [r,g,b,a] = multiColors;

console.log([r, , ,a]);

//
{
let human = {
    name:"mizan",
    Age:28,
    hairColor:"Black",
    height:5.10 ,
    canSpeak:true,
    favFoods:["Small fishes","Hotchpotch","Tehri","Vegetables"],
    run : ()=>{
      console.log(`average human can run at the speed of 5 miles/hour`)
    },
    gender:{
        type1 : "Male",
        type2 : "Female",
        type3 : "others"
     }

}


let {name:Man,Age:Live,hairColor,height,run,gender} = human;
let {type1,type2,type3} = gender;
console.log(type2);

}

let mother={
    name:"Anything",
    age:22,
    hairColor:'black',
    favFood:["Egg","Fish","vegetables"],
    voice:"soft and Kind",
    habit:'exercise',
    eat : ()=>{
        console.log(`He eats for the benefits of her child`);

    }
}

let country = {
    name:"Anything",
    Area:147570,
    language:"Bangla",
    favFood:["Egg","Fish","vegetables"],
    nationalBird:"Doyel",
    population:16,
    giveAir: ()=>{
        console.log(`Country  give us  Air to live`);

    }
}


let pen ={
    name:"econo",
    multiColor:"red",
    height:5,
    hasHead:true,
    hasNib:true,
    use: ()=>{
        console.log(`pen is used to write`)
    }

}

let table ={
    name:"table",
    height:3,
    width:6,
    multiColor:'black',
    containBooks:true,
    isFurniture:true,
    use:()=>{
        console.log(`table is used to read and eat`)
    }

}

let laptop = {
      Brand:"Hp",
      Model:"Hp probook 645 G2",
      color:"Black",
      Size:"standard",
      Weight:"1800gm",
      isUsefull:true,
      validity:"until useable",
      use:()=>{
          console.log("use to do proggramming and digital Marketing")
      }
}














//================================================================

const item = document.getElementById("item");
const oneLiner = document.getElementById("oneLiner");
const img = document.getElementById("img");
const hotel = document.getElementById("hotel");
const desc = document.getElementById("desc");
const next = document.getElementById("next");
const random = document.getElementById("random");
const prev = document.getElementById("prev");

let currentItem = 1;
const menuItems = [
    {
        id:1,
        item: "food item 01",
        oneLiner: "I am talking About eveniet voluptatibus quibusdam ratione, amet quasi praesentium placeat suscipit, ducimus ab totam! Architecto.",
        img:"/img/fooditem-1.jpg",
        hotel:"hotel N0-1",
        desc:"I am talking About eveniet voluptatibus quibusdam ratione, amet quasi praesentium placeat suscipit, ducimus ab totam! Architecto."
    },
    {
        id:2,
        item: "food item 02",
        oneLiner: "Bangladesh peoples loves eveniet voluptatibus quibusdam ratione, amet quasi praesentium placeat suscipit, ducimus ab totam! Architecto.",
        img:"/img/fooditem-2.jpg",
        hotel:"hotel N0 2",
        desc:"Bangladesh peoples loves eveniet voluptatibus quibusdam ratione, amet quasi praesentium placeat suscipit, ducimus ab totam! Architecto."
    },
    {
        id:3,
        item: "food item 03",
        oneLiner: "We are very much like this productsiet voluptatibus quibusdam ratione, amet quasi  ducimus ab totam! Architecto.",
        img:"/img/fooditem-3.jpg",
        hotel:"hotel N0 03",
        desc:"We are very much like this productsiet voluptatibus quibusdam ratione, amet quasi  ducimus ab totam! Architecto."
    }, 
    {
        id:4,
        item: "food item 04",
        oneLiner: "My bangle of Gold I loove you very much one, amet quasi praesentium placeat suscipit, ducimus ab totam! Architecto.",
        img:"/img/fooditem-4.jpg",
        hotel:"hotel No 04",
        desc:"My bangle of Gold I loove you very much one, amet quasi praesentium placeat suscipit, ducimus ab totam! Architecto."
    },
    {
        id:5,
        item: "food item 05",
        oneLiner: "lorem ipsum is giving us dummy text to use so we can get great help  amet uscipit, ducimus ab totam! Architecto.",
        img:"/img/fooditem-5.jpg",
        hotel:"hotel No 05",
        desc:"lorem ipsum is giving us dummy text to use so we can get great help  amet uscipit, ducimus ab totam! Architecto."
    }
]

window.addEventListener("DOMContentLoaded",()=>{
    allItems();

})

function allItems(){
    let menu = menuItems[currentItem];
    item.textContent = menu.item;
    oneLiner.textContent = menu.oneLiner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
}


random.addEventListener("click",()=>{
   
   currentItem = Math.floor(Math.random()* menuItems.length)
   allItems();
})

setInterval(()=>{
    currentItem = Math.floor(Math.random()* menuItems.length)
    allItems();
},8000)

prev.addEventListener("click",()=>{
    currentItem -- ;
    if(currentItem < 0){
        currentItem = 4;
    }
    allItems();
})
next.addEventListener("click",()=>{
    currentItem ++ ;
    if(currentItem > 4){
        currentItem = 0;
    }
    allItems();
})




















//New string methods .includes .startWith .endsWith .repeat======================

let language = "Javascript";

console.log(language.endsWith("pt"));
// console.log(language.repeat(100));


//New Array Method .arrayFrom .key=================================================



let multiColor = Array.from ("red");


console.log(multiColor);

let myArr = ["red","green","blue"];

let arr = myArr.keys();

console.log(arr)

for(let i of arr){
    console.log(i)
}


//new Math method======================================== 