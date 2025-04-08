import { newTweetController } from "./newTweet/newTweetController.js"

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem("token")) {
        window.location = '/login.html'
    }

    const newTweetForm = document.querySelector('form')
    newTweetController(newTweetForm)
})