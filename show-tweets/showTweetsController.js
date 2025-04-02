import { getTweets } from './showTweetsModels.js'
import { buildTweet, buildNoTweetsAdvice } from './showTweetsViews.js'


export async function showTweetsController() {

    const container = document.querySelector('.printed-tweets')
    const tweets = await getTweets()

    if (tweets.length > 0) {
        // pintar tweets
        drawTweets(tweets, container)
    } else {
        container.innerHTML = buildNoTweetsAdvice()
    }
  }

function drawTweets(tweets, container) {

    container.innerHTML = '';

    // recorrer el array
    tweets.forEach((tweet) => {
        const printedTweets = document.createElement('div')
        printedTweets.innerHTML = buildTweet(tweet)

        // que cada tweet se imprima por pantalla uno a uno
        container.appendChild(printedTweets)
    })
}