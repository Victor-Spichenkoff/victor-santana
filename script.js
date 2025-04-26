const inputs = document.querySelectorAll(".menu-link")


const getInput = (document) => {
    console.log(document)
    inputs.forEach(input => {
        
        if(input.innerText.toLowerCase() == document)
            input.classList.add("link-active")
    })
}