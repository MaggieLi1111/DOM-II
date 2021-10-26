// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

const h1 = document.querySelector(".logo-heading");
function launch(event) {
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "blue";
}
h1.addEventListener("mouseover", launch);

h1.addEventListener("mouseout",function(event){
    event.target.style = "" ;
})

const footer = document.querySelector("footer");
footer.addEventListener("wheel", function(event){
    console.log(`Scrolling over!) ${event} `);
    event.stopPropagation();
})


const intro = document.querySelector(".intro");
window.addEventListener("resize", function(event){
    if(window.innerWidth <= 800){
        intro.style.display = "none";
    }else{
        intro.style.display = "block";
    }
})

document.body.addEventListener("keyup", function(event){
    if(event.key === "Escape"){
        alert("Are you sure you want to leave?");
    }
})

document.body.addEventListener("keydown", function(event){
    if(event.key === "Delete"){
    prompt("Leave your comments here");
    }
})


const destination = document.querySelectorAll(".destination");
destination.forEach(item =>{
    item.addEventListener("mouseenter", function(event){
       event.target.style.backgroundColor = "pink";
    })
    item.addEventListener("mouseleave",function(event){
        event.target.style = "" ;
    })
})

const a = document.querySelectorAll(".nav a");
a[a.length-1].addEventListener("click", function (event){
    alert("You clicked Contact! Not the others!");
    event.stopPropagation();
})

const navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("click", function(event){
    alert("You clicked the wrong palce! Go and Find the buttons!");
})


const dragImg = document.querySelector(".img-content");
dragImg.addEventListener("drag", function(){
    alert("Hello!");
})


const btns = document.querySelectorAll(".btn");
btns.forEach(item =>{
    item.addEventListener("contextmenu", function(event){
        event.style.backgroundColor = "pink";
    })
})
