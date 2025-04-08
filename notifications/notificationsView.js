export const buildNotification = (message) => {
    const notificationView = `
            <p>${message}</p>
            <button>X</button>
        `
    return notificationView
}