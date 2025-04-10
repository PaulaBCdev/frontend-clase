import { getTweetDetail, getLoggedUser, removeTweet } from './tweetDetailModel.js'
import { buildTweetDetail, buildRemoveTweetButton } from './tweetDetailView.js'

export async function tweetDetailController(tweetContainer, tweetId) {

    const showRemoveTweetButton = (tweetId) => {
        const removeButton = buildRemoveTweetButton()
        tweetContainer.appendChild(removeButton)

        removeButton.addEventListener("click", () => {
            if (confirm("Seguro que quieres borrar el tweet?")) {
                removeTweet(tweetId)
            }
        })
    }

    try {
        const tweetDetail = await getTweetDetail(tweetId)
        tweetContainer.innerHTML = buildTweetDetail(tweetDetail)

        // consigo nombre del creador del tweet
        const tweetOwner = tweetDetail.userId
        // consigo nombre del que esta logeado
        const loggedUser = await getLoggedUser()
        // si coinciden:
        if (tweetOwner === loggedUser.id) {
            showRemoveTweetButton()
        }

    } catch (error) {
        // cuando el tweet no existe (el id no esta en la base de datos)
        alert(error.message)
    }

}