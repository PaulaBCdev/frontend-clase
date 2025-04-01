const tweets = [{
    handler: '@usuario1',
    date: new Date().toISOString(),
    message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
    likes: 40,
  },
  {
    handler: '@usuario2',
    date: new Date().toISOString(),
    message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
    likes: 3,
  },
  {
    handler: '@usuario3',
    date: new Date().toISOString(),
    message: 'Ayer estuve en le parque y me lo pasé genial',
    likes: 34,
  },
  {
    handler: '@usuario4',
    date: new Date().toISOString(),
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 400,
  }];

  const printTweets = () => {
    const container = document.querySelector('.printed-tweets')
    // recorrer el array
    tweets.forEach(tweet => {
      const printedTweets = document.createElement('div')
      printedTweets.innerHTML = `
        <p>${tweet.handler} - ${tweet.date}</p>
        <p>${tweet.message}</p>
        <p>${tweet.likes}</p>`

        // que cada tweet se imprima por pantalla uno a uno
        container.appendChild(printedTweets)
    })
  }

  printTweets();
