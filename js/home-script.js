let shopButton = document.body.querySelector(".content-button");
shopButton.addEventListener("click",()=>{
    window.scrollTo({
        top:document.getElementById("grid-focus").offsetTop,
        behavior: "smooth"
    })
})
let shopTab = document.body.querySelector(".shop-scroll");
shopTab.addEventListener("click",()=>{
    window.scrollTo({
        top:document.getElementById("grid-focus").offsetTop,
        behavior: "smooth"
    })
})
let arrivalscroll = document.body.querySelector(".arrivalscroll");
arrivalscroll.addEventListener("click",()=>{
    window.scrollTo({
        top:document.getElementById("new-arrival-scroll").offsetTop,
        behavior: "smooth"
    })
})

let redirect=document.body.querySelector(".redirect").addEventListener("click",()=>{
    window.open("http://127.0.0.1:3000/html/product_details.html")
})