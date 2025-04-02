export const buildTweet = (tweet) => {
    let tweetView =  `
      <p>${tweet.handler} - ${tweet.date}</p>
      <p>${tweet.message}</p>
    `;

    if (tweet.likes > 0) {
      tweetView += `<p>${tweet.likes}</p>`;
    }
  
    return tweetView
}

export const buildNoTweetsAdvice = () => {
  return '<h3>Lo siento, no hay tweets disponibles!</h3>'
}