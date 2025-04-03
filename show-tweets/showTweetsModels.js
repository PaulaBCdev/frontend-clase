
// modelo -> obtencion de datos que necesita nuestra aplicacion.


export async function getTweets() {
  /* fetch('http://localhost:8000/api/tweets')
  .then(response => response.json())
  .then(tweets => {console.log(tweets)}) */

  let tweets = [];

  try {
    const response = await fetch('http://localhost:8000/api/tweets')
    tweets = await response.json();
  } catch (error) {
    throw new Error("No ha sido posible obtener los tweets. Intentalo de nuevo mas tarde.")
  }

  return tweets;
}