import { buildAuthorizedSession, buildUnauthorizedSession } from "./sessionView.js";

export async function sessionController(container) {
    const isUserLoggedIn = !!localStorage.getItem("token")
    // !! hace que si lo que nos traemos de localStorage es un truthy value, isUserLoggedIn va a ser true; si es falsy, va a ser false

    if (isUserLoggedIn) {
        container.innerHTML = buildAuthorizedSession()

        const logoutButton = container.querySelector('logout')
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("token")
            sessionController(container)
        })
    } else {
        container.innerHTML = buildUnauthorizedSession()
    }
}