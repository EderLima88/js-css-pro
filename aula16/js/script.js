var mostraNotification = document.querySelector('#mostra-notification');


mostraNotification.addEventListener('click', function(event) {
    event.preventDefault()
    if(!Notification) {
        alert("Verifica Solicitação")
        return;
    }
    

    if(Notification.permission !==  'granted') {
        Notification.requestPermission();
    }

    
})



function abriNotification() {
    if(Notification.permission !== 'granted'){
        Notification.requestPermission()
    }else {
        var notificationValue = new Notification ("Notification Title", {
            icon:"https://image.flaticon.com/icons/png/128/1827/1827504.png",
            body: "Eder de Lima",
            image:'https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg'
        });
        // notificationValue.onclick = function() {
        //     console.log('BOOOMMM')
        // }
    }
}
