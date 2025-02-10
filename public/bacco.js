var onlineChatView = "F";
async function prepareScripts() {
    var script1 = document.createElement('script');
    script1.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/6.0.1/signalr.js');
    script1.setAttribute('onload', "startCommunicationLib();");
    document.head.appendChild(script1);

    var script3 = document.createElement('script');
    script3.setAttribute('src', 'https://kit.fontawesome.com/934b7bfd2b.js');
    script3.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(script3);
   

    var script2 = document.createElement('script');
    script2.setAttribute('src', 'https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js');
    document.head.appendChild(script2);

    /*

     var script2 = document.createElement('script');
    script2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.min.js');
    document.head.appendChild(script2);

    var script2 = document.createElement('script');
    script2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
    document.head.appendChild(script2);

    var script3 = document.createElement('script');
    script3.setAttribute('src', 'https://kit.fontawesome.com/934b7bfd2b.js');
    script3.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(script3);

    //var script4 = document.createElement('script');
    //script4.setAttribute('src', 'Scripts/custom_script/menumiz_support.js');
    //document.head.appendChild(script4);

    var style1 = document.createElement('link');
    style1.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
    style1.setAttribute('rel', 'stylesheet');
    document.head.appendChild(style1);
    */

    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    
}
//add all extra scripts



 prepareScripts();

function startCommunicationLib() {
    var script2 = document.createElement('script');
    script2.setAttribute('src', 'https://localhost:44353/Scripts/custom_script/communication.js');
    //script2.setAttribute('src', 'https://localhost:44353/Scripts/custom_script/communication-ar.js');
    document.head.appendChild(script2);
}
 

