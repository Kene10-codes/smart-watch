let parentImgDive = document.querySelector(".div-img");
let img = document.querySelector(".img");
let colorBlack = document.querySelector(".color-black");
let colorPurple = document.querySelector(".color-purple");
let colorPink = document.querySelector(".color-pink");
let colorBrown = document.querySelector(".color-brown");
let colorViolet = document.querySelector(".color-violet");

let btnFeat1 = document.querySelector(".feat-1");

let date = document.querySelector(".img-content")
console.log(date);

colorBlack.addEventListener("mouseover", function(){
    console.log(img.src = "/assets/black.png");
})

colorPurple.addEventListener("mouseover", function(){
    console.log(img.src = "/assets/purple.png");
})

colorBrown.addEventListener("mouseover", function(){
    console.log(img.src = "/assets/brown.png");
})

colorPink.addEventListener("mouseover", function(){
    console.log(img.src = "/assets/pink.png");
})

colorViolet.addEventListener("mouseover", function(){
    console.log(img.src = "/assets/violet.png");
})

const showTime = () => {
    let refreshTime = 1000;
    let currentTime =  setTimeout(displayCurrentTime, refreshTime);
    return currentTime;
}

const displayCurrentTime = () => {
    let fullDate = new Date();
    console.log(fullDate);
    let date = document.querySelector(".img-content");
    if(date.style.background !== "white") {
        date.style.color = "white";
        let pixel = "12px";
        pixel = parseInt(pixel.substr(0, 2));
        date.style.fontSize = pixel  + "px";
    }
    date.style.padding = 4 + "px";
    date.innerHTML = fullDate;
    showTime();

}

btnFeat1.addEventListener("click", displayCurrentTime);

