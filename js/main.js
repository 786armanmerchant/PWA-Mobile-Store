var unreadCount = 0;

window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }

    //set the badge 
    setAppBadgeFunc();


}





function displayNotification() {

    Notification.requestPermission().then(function(permission) {

        console.log('notification permission status: ', permission)

    });


    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration()
            .then(reg => {
                reg.showNotification('Arman Mobile Store', options);
                unreadCount++;
            });

    }

    //set the badge 
    setAppBadgeFunc();

}


function setAppBadgeFunc() {
    //set the badge 
    navigator.setAppBadge(unreadCount).catch((error) => {
        //Do something with the error.
        unreadCount = 0;
        console.log(error);
    });
}

function clearAppBadgeFunc() {
    // clear the badge
    navigator.clearAppBadge().catch((error) => {

    });
}



const options = {
    body: 'Welcome to Mobile Web Application!',
    icon: 'images/icon-512.png',
    vibrate: [100, 500, 100],
    badge: 'images/icon-512.png',
    data: { primaryKey: 1 },
    actions: [
        { action: 'go', title: 'Go to the Website!', icon: 'https://vanarragon.ca/nimage/icon.png' },
        { action: 'close', title: 'No Thanks', icon: 'https://vanarragon.ca/nimage/icon.png' }
    ]


};