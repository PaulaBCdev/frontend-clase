import { newTweet } from './newTweetModel.js'

export function newTweetController(form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const tweetElement = form.querySelector('#new-tweet')
        const tweet = tweetElement.value

        try {
            await newTweet(tweet)
            setTimeout(() => {
                window.location = '/'
            }, 2000)
        } catch (error) {
            alert(error.message)
        }
    })

}