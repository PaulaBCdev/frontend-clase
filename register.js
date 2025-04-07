import { registerController } from "./register/registerController.js"

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector("form")

    registerController(registerForm)
})