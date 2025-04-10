export async function getTweetDetail(tweetId) {
    const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}?_expand=user`)

    if (!response.ok) {
        throw new Error('Tweet no disponible')
    }

    const tweetDetail = await response.json()

    return tweetDetail
}

export async function getLoggedUser() {
    const token = localStorage.getItem("token")

    const response = await fetch(`http://localhost:8000/auth/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {

    }

    const user = await response.json()

    return user
}

export async function removeTweet(tweetId) {
    const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error('Tweet no disponible')
    }

}