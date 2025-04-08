import { createUser } from "./registerModel.js"

export const registerController = (form) => {

    form.addEventListener("submit", (event) => {
        event.preventDefault()  // el form de html, por defecto, manda los datos al servidor cuando clicamos submit. Con este preventDefault evitamos que eso pase porque queremos procesar los datos nosotros y guardarlos en otro sitio.

        const nameElement = form.querySelector('#name')
        const name = nameElement.value

        const emailElement = form.querySelector('#email')
        const email = emailElement.value  // me coge el valor que esta escrito en el input del elemento con id: email

        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const passwordConfirmElement = form.querySelector('#password-confirm')
        const passwordConfirm = passwordConfirmElement.value

        const errors = []

        // validar email
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (!emailRegExp.test(email)) {
            // mostrar error
            errors.push('El formato del email no es válido')
        }

        // comprobar las contraseñas
        if (password !== passwordConfirm) {
            // mostrar error
            errors.push('Las contraseñas no son iguales')
        }

        if (errors.length === 0) {
            // crear usuario
            handleCreateUser(name, email, password, form)
        } else {
            errors.forEach(error => {
                const event = new CustomEvent('register-error', {
                    detail: error
                })
                form.dispatchEvent(event)
            })
        }
    })

    const handleCreateUser = async (name, email, password, form) => {
        try {
            await createUser(name, email, password)

            const event = new CustomEvent('register-ok', {
                detail: {
                    message: 'Te has registrado correctamente',
                    type: 'success'
                }
            })
            form.dispatchEvent(event)

            // notificar al usuario del registro ok
            setTimeout(() => {
                window.location = '/'
            }, 5000)

        } catch (error) {
            const event = new CustomEvent('register-error', {
                detail: error
            })
            form.dispatchEvent(event)
        }
    }
}