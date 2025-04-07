import { loaderController } from './loader/loaderController.js'
import { showTweetsController } from './show-tweets/showTweetsController.js'
import { notificationsController } from './notifications/notificationsController.js'


// esperamos a que el DOM este listo antes de intentar acceder a los nodos
document.addEventListener('DOMContentLoaded', () => {
  /* para hacer que un boton funciona se hace:
  document.getElementById('magicButton').addEventListener('click', showTweetsController); */

  const container = document.querySelector('.printed-tweets')
  const loader = document.querySelector('.loader')
  const notifications = document.querySelector('.notifications')
  const { show, hide } = loaderController(loader)
  const { showNotification } = notificationsController(notifications)

  container.addEventListener('load-tweets-started', () => {
    show()
  })

  container.addEventListener('load-tweets-finished', () => {
    hide()
  })

  container.addEventListener('load-tweets-error', (event) => {
    const errorMessage = event.detail
    showNotification(errorMessage)
  })

  showTweetsController(container)
})


