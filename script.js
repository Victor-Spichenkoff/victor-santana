const inputs = document.querySelectorAll("nav a")

// To show the correct menu active page
const getInput = (documentName) => {
    inputs.forEach(input => {

        console.log(input.innerText.toLowerCase() == documentName)
        if (input.innerText.toLowerCase() == documentName) {
            input.classList.add("active")
            input.addEventListener("click", (e) => e.preventDefault())
        }
    })
}


// EMAIL SEND
const form = document.getElementById('contact-form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if(!name || !email || !message)
        return window.alert("Preencha todos os campos")

    window.alert("Enviado")
})