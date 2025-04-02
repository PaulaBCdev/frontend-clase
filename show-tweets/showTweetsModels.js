



export async function getTweets() {
  /* fetch('http://localhost:8000/api/tweets')
  .then(response => response.json())
  .then(tweets => {console.log(tweets)}) */

  const response = await fetch('http://localhost:8000/api/tweets')
  const tweets = await response.json();

  return tweets;
}