

let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    
    document.getElementById("btn").style.border = "2px solid red";

    
    setTimeout(function() {
        document.getElementById("btn").style.border = "2px solid white";
        
        document.querySelector(".container").style.display = "block"
        document.querySelector(".btn").style.display = "none"
        
        document.querySelector(".text").innerHTML = "It's a prank😎"
    },2000)
})
