const button = document.getElementById("click-me")
button.addEventListener("click", ()=>{
    if(document.getElementById('output').innerHTML === "And I'm a Frontend Developer"){
        document.getElementById('output').innerHTML = "And I love It"
    }else {
        document.getElementById('output').innerHTML = "And I'm a Frontend Developer"
    }
})