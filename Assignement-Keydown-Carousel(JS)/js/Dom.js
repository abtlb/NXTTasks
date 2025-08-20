var imgs = document.querySelectorAll('img');
var layer = document.querySelector(".layer");
var imgBox = document.querySelector(".img-box");
var next = document.querySelector(".fa-angle-right");
var prev = document.querySelector(".fa-angle-left");
var exit = document.querySelector(".fa-square-xmark");
console.log(imgs);
var curIndex = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click",function(){
        console.log(i);
        layer.classList.remove("d-none");
        var imgSrc = imgs[i].getAttribute("src");
        imgBox.style.backgroundImage = `url(${imgSrc})`;
        curIndex = i
    })
    
}


next.addEventListener("click",function(){
    curIndex++;
    if(curIndex == imgs.length){
        curIndex = 0;
    }
    var imgSrc = imgs[curIndex].getAttribute("src");
     imgBox.style.backgroundImage = `url(${imgSrc})`;
    console.log(curIndex);

});
prev.addEventListener("click",function(){
    curIndex--;
    if(curIndex == -1){
        curIndex = imgs.length - 1;
    }
    var imgSrc =  imgs[curIndex].getAttribute("src");
     imgBox.style.backgroundImage = `url(${imgSrc})`;
});
exit.addEventListener("click",function(){
    layer.classList.add("d-none");
});

document.addEventListener("keydown",function(e){
    console.log(e.key);
    
    if(e.key === "ArrowRight"){
        curIndex++;
        if(curIndex == imgs.length){
            curIndex = 0;
        }
        var imgSrc = imgs[curIndex].getAttribute("src");
        imgBox.style.backgroundImage = `url(${imgSrc})`;
    }
    else if(e.key === "ArrowLeft"){
        curIndex--;
        if(curIndex == -1){
            curIndex = imgs.length - 1;
        }
        var imgSrc = imgs[curIndex].getAttribute("src");
        imgBox.style.backgroundImage = `url(${imgSrc})`;
    }
    else if(e.key === "Escape"){
        layer.classList.add("d-none");
    }
});

document.addEventListener("keydown",function(e){
 console.log(e.key);
})