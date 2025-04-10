import { tweetDetailController } from "./tweetDetail/tweetDetailController.js"

document.addEventListener("DOMContentLoaded", () => {

    const searchParams = new URLSearchParams(window.location.search)
    const tweetId = searchParams.get("id")

    if (tweetId) {
        const tweetContainer = document.querySelector('.tweet-container')
        tweetDetailController(tweetContainer, tweetId)
    } else {
        window.location = '/'
    }

})