import { getTweets } from './showTweetsModels.js'
import { buildTweet, buildNoTweetsAdvice } from './showTweetsViews.js'


export async function showTweetsController(container) {

    try {
        // creo un evento para avisar a index.js de que se estan empezando a cargar los tweets para que vaya mostrando la ruleta
        const event = new CustomEvent('load-tweets-started')
        container.dispatchEvent(event)

        const tweets = await getTweets()
        drawTweets(tweets, container)

    } catch (error) {
        const event = new CustomEvent('load-tweets-error', {
            detail: error.message
        })  // puedo incluir info adicional cuando se activa el evento con 'detail'
        container.dispatchEvent(event)
    } finally {
        // creo un evento para avisar a index.js de que ya se han cargado los tweets para que quite la ruleta
        const event = new CustomEvent('load-tweets-finished')
        container.dispatchEvent(event)
    }  // el bloque finally siempre se ejecuta, da igual si antes se ejecuto try o catch

}

function drawTweets(tweets, container) {

    container.innerHTML = '';

    if (tweets.length === 0) {
        container.innerHTML = buildNoTweetsAdvice()
    }

    // recorrer el array
    tweets.forEach((tweet) => {
        const printedTweets = document.createElement('div')
        printedTweets.innerHTML = buildTweet(tweet)

        // que cada tweet se imprima por pantalla uno a uno
        container.appendChild(printedTweets)
    })
}