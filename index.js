import { showTweetsController } from './show-tweets/showTweetsController.js'

// esperamos a que el DOM este listo antes de intentar acceder a los nodos
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('magicButton').addEventListener('click', showTweetsController);
  /* const showTweetsButton = document.querySelector('button')
  showTweetsButton.addEventListener('click', showTweetsController); */
})


