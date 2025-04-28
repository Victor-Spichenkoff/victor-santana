const inputs = document.querySelectorAll("nav a")


const getInput = (documentName) => {
    inputs.forEach(input => {
        
        console.log(input.innerText.toLowerCase() == documentName)
        if (input.innerText.toLowerCase() == documentName) {
            input.classList.add("active")         
            input.addEventListener("click", (e) => e.preventDefault())
        }
    })
}