var openChatButton = '';
var chatbox = '';
var chatboxBody = '';
var userInput = '';
var sendButton = '';
var closeIcon = '';
var chatboxStatus = '';
var chatboxTitle = '';
var chatAttachFile = '';
var chatInput = '';
var endChatElement = '';

var chatConnectionId = '';
var chatUserId = '';
var chatTemplateInitialized = false;
var chatTimeZone = 0;
var chatConversationGuid = '';
var chatConversationId = '';
var UserLanguage = '';
var currentChatStatus = '';

//------------------------------------chat video audio
var videoElement = '';
var audioInputSelect = '';
var audioOutputSelect = '';
var videoSelect = '';
var selectors = [];
var audioCallingElement = '';
var allowGeneralcallWithoutChat = true;

var checkStatusTimer = null;

//////////////////////////////////////////////////////////////////////
function checkStatusTimerFunction() {
    //console.log(currentChatStatus);
    if (chatUserId != '') {
        connection.invoke("processHandShake", chatUserId);//test
    }

}

//Function to initiate signalR connection to the server
const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://bacco.holeno.com/chathubonline")
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        //console.log("SignalR Connected.");
        connection.invoke("initializeApp");//2023-08-10
        chatConversationGuid = getChatCookieValue("chatConversationGuid");
        chatUserId = getChatCookieValue("chatUserId");
        connection.invoke("getGetConnectionId", chatUserId);//test
        //console.log("conversation:" + chatConversationGuid);
        //console.log("iser:" + chatUserId)
        connection.invoke("twilio");//2023-08-10

        UserLanguage = getChatCookieValue("UserLanguage");

        if (checkStatusTimer == null) {
            checkStatusTimer = setInterval(checkStatusTimerFunction, 5000);
        }


    } catch (err) {
        //console.log(err);
        setTimeout(start, 1000);
    }
};
// Start the connection.

start();

connection.onclose(async () => {
    await start();
});


connection.on("connectionIdProcess", (connectionIdValue) => {

    //console.log('connection id ' + connectionIdValue);

    let date = new Date();
    chatTimeZone = date.getTimezoneOffset();
    chatTimeZone = chatTimeZone * -1;
    chatTimeZone = chatTimeZone / 60;
    chatConnectionId = connectionIdValue;

    if (chatTemplateInitialized == false) {
        chatConversationGuid = getChatCookieValue("chatConversationGuid");
        chatUserId = getChatCookieValue("chatUserId");
        var location = window.location.href;
        connection.invoke("generateChatTemplate", chatConnectionId, chatUserId, chatTimeZone, chatConversationGuid, location);
    }
});
connection.on("prepareStoredMessagesDisplay", (proceed) => {
    var currentStoredMessages = localStorage.getItem("messages");

    if (proceed == "y") {
        if (currentStoredMessages != null && currentStoredMessages != 'null' && currentStoredMessages != '') {
            addToChat('chatbox-body', currentStoredMessages);
        }
    }
    if (proceed == "n") {
        localStorage.removeItem("messages");
    }

});
connection.on("generateChatTemplateProcess", (template, conversationGuid) => {
    // document.body.innerHTML += template;



    var paragraph = document.createElement("div");
    paragraph.innerHTML = template;

    document.body.appendChild(paragraph);
    loadChatBoxFunctions();

    if (chatTemplateInitialized == false) {
        chatTemplateInitialized = true;







        var conversationGuidStored = getChatCookieValue("chatConversationGuid");
        if (conversationGuidStored == '') {
            chatConversationGuid = conversationGuid
            addChatCookie("chatConversationGuid", chatConversationGuid, 1);
            //console.log('add');
        }
        else {
            chatConversationGuid = conversationGuidStored;
        }

        if (getChatCookieValue("chatOpen") == "Y") {

            openChatButton.click();
        }

        //navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
        setTimeout(function () {
            videoElement = document.querySelector('#localVideo');
            audioInputSelect = document.querySelector('select#audioSource');
            audioOutputSelect = document.querySelector('select#audioOutput');
            videoSelect = document.querySelector('select#videoSource');
            selectors = [audioInputSelect, audioOutputSelect, videoSelect];

            audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);

            navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);


            audioInputSelect.onchange = startStream;
            audioOutputSelect.onchange = changeAudioDestination;

            videoSelect.onchange = startStream;
            audioCallingElement = document.getElementById("myAudioCalling");

            document.getElementById("videoCallIcon").addEventListener("click", function () {
                document.getElementById('videoCallContainer').style.display = 'block';
                voiceCallIcon.style.display = 'none';
                videoCallIcon.style.display = 'block';
                videoCallAllowed = true;
                initiatAndConnect();
            });
            document.getElementById("voiceCallIcon").addEventListener("click", function () {
                videoCallAllowed = false;
                document.getElementById('videoCallContainer').style.display = 'block';
                voiceCallIcon.style.display = 'block';
                videoCallIcon.style.display = 'none';
                htmlVideoContainerFunctions('C');
                initiatAndConnect();
            });

        }, 500);

        // alert('cccc')
    }
});
connection.on("ChatContainerProcess", (elementId, message, guid, messageType, date) => {
    var currentStoredMessages = localStorage.getItem("messages");

    if (messageType == 'SH') {//Message is coming the from system History
        message = `<div style='display:flex'>
                                      <div class="message bot-message">
                <span class="bot-inner-message">${message}</span>
                <div class="message-bot-date">${date}</div>
            </div></div>
                                    `;
        //console.log(elementId + " |   " + message);

    }
    if (messageType == 'S') {//Message is coming the from system

        message = `
        <div style='display:flex' id='parent_container_${guid}'>
        <div class="message bot-message" dir='auto' id='parent_${guid}' style='display:none'>
               <span  id='msg_${guid}' class="bot-inner-message"></span>
                <span style='display:none' id='loading_${guid}'><i class="fa-solid fa-spinner fa-spin"></i></span>
                <div class="message-bot-date">${date}</div>
            </div></div>`;
        //console.log(elementId + " |   " + message);

    }
    if (messageType == 'U') {//user's message
        message = `
                                 <div style='display:flex; flex-direction: row-reverse;'>      <div class="message bot-message-user">
                <span class="bot-inner-message">${message}</span>
                <div class="message-bot-date">${date}</div>
            </div></div>
                                    `;

    }
    if (messageType == 'A') {//user's message
        message = `
                          <div style='display:flex; flex-direction: row-reverse;'>              <div class="message bot-message">
                <span class="bot-inner-message">${message}</span>
                <div class="message-bot-date">${date}</div>
            </div>
                          </div>           `;

    }
    if (messageType == 'U' || messageType == 'A' || messageType == 'SH') {

        if (currentStoredMessages == null || currentStoredMessages == 'null') {
            currentStoredMessages = message;
        }
        else {
            currentStoredMessages = currentStoredMessages + message;
        }

        localStorage.setItem("messages", currentStoredMessages);
    }

    addToChat(elementId, message);
});
connection.on("userIdProcess", (userId) => {
    chatUserId = userId;

    deleteChatCookie("chatUserId");
    addChatCookie("chatUserId", userId, 1);

});

connection.on("displayData", (guid, data) => {
    var parentDiv = document.getElementById("parent_" + guid);

    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "dv_chart_" + guid);

    // Set some content for the new div (optional)
    newDiv.textContent = "This is a new div";

    // Append the new div as a child of the parent div
    parentDiv.appendChild(newDiv);

    drawChart3(data, "dv_chart_" + guid);
    //alert(data, guid)

});

connection.on("displayDataChart", (guid, data, index) => {
    var parentDiv = document.getElementById("parent_" + guid);

    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "dv_chart_" + guid + index);

    // Set some content for the new div (optional)
    newDiv.textContent = "This is a new div";

    newDiv.innerHTML = `<img style="width:100%" src="${data}"/>`;

    // Append the new div as a child of the parent div
    parentDiv.appendChild(newDiv);

   
    //alert(newDiv.innerHTML)

});

connection.on("chatStatusProcess", (operation, departmentName, AgentName, QueueNumber) => {
    if (operation == "R") {
        chatboxStatus.innerHTML = "Waiting for an agent " + `<i class="fa-solid fa-ellipsis fa-fade"></i>`;
        chatboxTitle.innerHTML = departmentName;
        videoCallIcon.style.display = "none";
        voiceCallIcon.style.display = "none";
        chatAttachFile.style.display = "none";
        endChatElement.style.display = "block";
        allowGeneralcallWithoutChat = false;
        currentChatStatus = operation;

    }
    if (operation == "A") {
        chatboxStatus.innerHTML = "";
        chatboxTitle.innerHTML = AgentName;
        videoCallIcon.style.display = "block";
        voiceCallIcon.style.display = "block";
        chatAttachFile.style.display = "block";
        endChatElement.style.display = "block";
        allowGeneralcallWithoutChat = false;
        currentChatStatus = operation;
    }
    if (operation == "Q") {
        chatboxStatus.innerHTML = "Waiting for an agent " + `<i class="fa-solid fa-ellipsis fa-fade"></i> <br/>` + "- " + QueueNumber + " in queue -";
        chatboxTitle.innerHTML = departmentName;
        videoCallIcon.style.display = "none";
        voiceCallIcon.style.display = "none";
        chatAttachFile.style.display = "none";
        endChatElement.style.display = "block";
        allowGeneralcallWithoutChat = false;
        currentChatStatus = operation;

    }
    if (operation == "M") {//Main
        chatboxStatus.innerHTML = "";
        chatboxTitle.innerHTML = "اهلا وسهلا بكم في BACCO";
        videoCallIcon.style.display = "block";
        voiceCallIcon.style.display = "none";
        chatAttachFile.style.display = "none";
        endChatElement.style.display = "none";
        allowGeneralcallWithoutChat = true;
        currentChatStatus = operation;


    }

});
connection.on("conversationEndedFunction", (operation) => {

    setTimeout(function () { localStorage.removeItem("messages"); }, 2000);



});
connection.on("passInfoFunction", (guid, message, operation) => {

    if (operation == "T") {
        chatboxStatus.innerHTML = "Typing....";

        //Disable the buttons to ensure the complete waiter's reply has been delivered

    }
    if (operation == "D") {
        chatboxStatus.innerHTML = "";

        var element = document.getElementById("msg_" + guid);
        testMessageElement = testMessageElement.replace('null', '');
        testMessageElement = testMessageElement.replace('undefined', '');
        element.innerHTML = testMessageElement;

        element.innerHTML = element.innerHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        //console.log(testMessageElement);


        testMessageElement = '';

        //var element = document.getElementById("msg_" + guid).innerHTML;
        //var contetnt = element.replace('<br>', '');
        ////console.log(contetnt)
        //iframe.contentWindow.postMessage(contetnt, '*');

        contentPassed = '';
        // messagesContent = [];

        //console.log("done message");

        userInput.value = '';

        var parentContainer = document.getElementById('parent_container_' + guid);


        //localstorage
        var currentStoredMessages = localStorage.getItem("messages");

        if (currentStoredMessages == null || currentStoredMessages == 'null') {
            currentStoredMessages = parentContainer.outerHTML;
        }
        else {
            currentStoredMessages = currentStoredMessages + parentContainer.outerHTML;
        }

        localStorage.setItem("messages", currentStoredMessages);
        //alert(currentStoredMessages)
    }

    if (operation != "T" && operation != "I") {
        //Pass info the HTML generated container based on the guid
        passInfo(guid, message, operation);






        //  iframe.contentWindow.postMessage(contetnt, '*');

    }

});
var testMessageElement;
function passInfo(elementId, message, loadingMessage) {
    //console.log(elementId);
    //console.log(message);
    var elementParent = document.getElementById("parent_" + elementId);

    var element = document.getElementById("msg_" + elementId);
    if (message != '') {
        elementParent.style.display = "block";
        element.innerHTML = element.innerHTML + message;

        element.innerHTML = element.innerHTML.replace('null', '');

        element.innerHTML = element.innerHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        testMessageElement += message;


        //console.log(message);
    }
    var elementLoading = document.getElementById("loading_" + elementId);
    if (loadingMessage == 'show') {

        elementLoading.style.display = "block";
    }
    else {
        elementLoading.style.display = "none";
    }
    var objDiv = chatboxBody;
    objDiv.scrollTop = objDiv.scrollHeight;
    //postPageHeight();
}
function functionRemove(elementId) {
    try {
        var element = document.getElementById("parent_" + elementId);
        element.remove();
    }
    catch (err) {

    }
}
function addToChat(elementId, content) {
    var element = document.getElementById(elementId);
    element.innerHTML += content;

    var objDiv = chatboxBody;
    objDiv.scrollTop = objDiv.scrollHeight;
    //postPageHeight();
}

function chatBoxToggleOpenCloseStyle() {
    if (chatbox.classList.contains('open')) {
        if (onlineChatView == "F") {
            openChatButton.style.display = 'none';
        }
        addChatCookie("chatOpen", "Y", 1);

    } else {
        if (onlineChatView == "F") {
            openChatButton.style.display = 'block';
        }
        if (onlineChatView == "L") {
            chatbox.style.bottom = '-10px';
            chatbox.style.top = 'auto';
        }
        deleteChatCookie("chatOpen");

    }
}
function handleTouchMove(event) {
    if (event.target === chatbox) {
        //console.log('User is holding and scrolling on the div');
    } else {
        if (chatbox.classList.contains('open')) {
            if (window.innerWidth < 567) {
                // chatbox.style.top = window.visualViewport.offsetTop + "px";

                var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

                if (isIOS) {
                    setTimeout(() => window.scrollTo(0, 0), 100);
                } else {
                    chatbox.style.top = window.visualViewport.offsetTop + "px";
                    setTimeout(function () { chatbox.style.top = window.visualViewport.offsetTop + "px"; }, 500);
                }


                const d = new Date();
                let time = d.getTime();

                //userInput.value = "addong" + time
                // setTimeout(function () { chatbox.style.top = window.visualViewport.offsetTop + "px"; }, 1000);

            }
        }
    }
}
function loadChatBoxFunctions() {
    openChatButton = document.getElementById('open-chat-button');
    chatbox = document.getElementById('chatbox');
    chatboxBody = chatbox.querySelector('.chatbox-body');
    userInput = chatbox.querySelector('#user-input');
    sendButton = chatbox.querySelector('#send-button');
    closeIcon = chatbox.querySelector('.close-icon');
    chatboxStatus = chatbox.querySelector('.chatbox-status');
    chatboxTitle = chatbox.querySelector('#chatbox-title');
    chatAttachFile = chatbox.querySelector('#attach-file');
    chatInput = chatbox.querySelector('#fileInput');
    endChatElement = document.getElementById('endChat');

    userInput.style.boxShadow = 'none';
    if (onlineChatView == "L") {

        document.querySelectorAll('a[href="#openchat"]').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the link

                // console.log('Opening chat...');
                openChatButton.click();
            });
        });

        document.querySelectorAll('.open-chat').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the link

                // console.log('Opening chat...');
                openChatButton.click();
            });
        });
        openChatButton.style.display = "none";
    }


    // Add touch event listener to the window
    window.addEventListener('touchmove', handleTouchMove);





    if (UserLanguage != "5c69e98a-2b46-4819-8fb6-6acdfba597bd") {
        openChatButton.style.bottom = "10px";
    }

    endChatElement.addEventListener('click', () => {

        connection.invoke("initiateConversationOnlineChat", chatUserId, chatConversationGuid, "end", chatTimeZone, 'N', chatConnectionId);

    });


    userInput.addEventListener('focus', () => {
        if (window.innerWidth < 567) {

            setTimeout(function () {
                var objDiv = chatboxBody;
                objDiv.scrollTop = objDiv.scrollHeight;
            }, 200);
            setTimeout(() => window.scrollTo(0, 0), 100)
        }

    });

    openChatButton.addEventListener('click', () => {
        openChatButton.style.display = 'none';
        chatbox.classList.toggle('open');
        if (window.innerWidth < 567) {
            chatbox.style.maxWidth = '100%';
            chatbox.style.height = '100%';
            chatbox.style.right = '0px';
            chatboxBody.style.minHeight = 'calc(100% - 150px)';
            chatboxBody.style.maxHeight = 'calc(100% - 150px)';
            chatbox.style.top = '0px';
            chatbox.style.borderRadius = '0px';


        } else {
            chatbox.style.maxWidth = '360px';
            //chatbox.style.height = '70vh';
            chatbox.style.right = '20px';
            chatboxBody.style.minHeight = '400px';// 'calc(70vh - 150px)';
            chatboxBody.style.maxHeight = '400px';// 'calc(70vh - 150px)';
            chatbox.style.bottom = '20px';
            chatbox.style.borderRadius = '28px';
        }
        //userInput.focus();
        chatBoxToggleOpenCloseStyle();
    });

    closeIcon.addEventListener('click', () => {
        chatbox.classList.toggle('open');
        if (onlineChatView == "L") {
            openChatButton.style.display = 'none';
        }
        if (onlineChatView == "F") {
            openChatButton.style.display = 'block';
        }
        chatbox.style.bottom = '-10px';
        chatbox.style.top = 'auto';
        chatBoxToggleOpenCloseStyle();
    });
    chatAttachFile.addEventListener('click', () => {
        chatInput.click();
    });
    chatInput.addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function () {
            let base64Data = reader.result.split(',')[1];
            let mimeType = file.type; // Get the MIME type
            let fileName = file.name; // Get the file name
            let fileMimeType = reader.result.split(',')[0]; // Get the file name
            //console.log(mimeType);
            if (file.size > 10 * 1024 * 1024) {
                alert('File size exceeds 10MB. Please select a smaller file.');
                return;
            }
            // Assuming you want to send this data to a server
            // You can use AJAX or any other method to send this data

            // Example using fetch API:
            var fileMessage = 'FILE:' + base64Data + '|' + mimeType + '|' + fileName + '|' + fileMimeType; // Get the file name;
            //console.log(fileMessage)
            connection.invoke("initiateConversationOnlineChat", chatUserId, chatConversationGuid, fileMessage, chatTimeZone, 'N', chatConnectionId);
        }

        reader.readAsDataURL(file);
    });

    userInput.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            sendButton.click();
            userInput.focus();
            userInput.value = '';
        }
    });

    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {

            userInput.focus();
            passUserMessage(userMessage);




            /*var timeoutValue = 2000;
            if (window.innerWidth < 567) {
                timeoutValue = 2000;
            }
            if (chatUserId == '') {
                setTimeout(function () {
                    connection.invoke("initiateConversationOnlineChat", chatUserId, chatConversationGuid, userMessage, chatTimeZone, 'N', chatConnectionId);
                    console.log('timer')
                }, timeoutValue);
            }
            else {
                connection.invoke("initiateConversationOnlineChat", chatUserId, chatConversationGuid, userMessage, chatTimeZone, 'N', chatConnectionId);
                
                
            }*/ //adding timer
            connection.invoke("initiateConversationOnlineChat", chatUserId, chatConversationGuid, userMessage, chatTimeZone, 'N', chatConnectionId);

            userInput.value = '';
        }
    });
    let initialViewportHeight = window.visualViewport.height;
    window.visualViewport.addEventListener('resize', () => {
        if (!chatbox.classList.contains('open')) return;

        if (window.innerWidth < 567) {

            let currentViewportHeight = window.visualViewport.height;

            // Calculate the keyboard height by subtracting the current height from the initial height
            let keyboardHeight = initialViewportHeight - currentViewportHeight;
            chatbox.style.maxWidth = '100%';
            if (keyboardHeight == 0) {
                chatbox.style.height = '100%';
            }
            else {
                var keyboardHeightFinal = keyboardHeight - 10
                chatbox.style.height = window.visualViewport.height + 'px';
            }
            //console.log('updated')
            chatbox.style.right = '0px';
            chatboxBody.style.minHeight = 'calc(100% - 150px)';
            chatboxBody.style.maxHeight = 'calc(100% - 150px)';
            chatbox.style.bottom = '0px';
            chatbox.style.borderRadius = '0px';
        } else {
            chatbox.style.maxWidth = '360px';
            //chatbox.style.height = '70vh';
            chatbox.style.right = '20px';
            chatboxBody.style.minHeight = '400px';// 'calc(70vh - 150px)';
            chatboxBody.style.maxHeight = '400px';// 'calc(70vh - 150px)';
            chatbox.style.bottom = '20px';
            chatbox.style.borderRadius = '28px';
        }
    });
}
function addChatCookie(name, value, expiryDays) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);

    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expiryDate.toUTCString()}; path=/`;
    document.cookie = cookie;
}
function deleteChatCookie(name) {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
function getChatCookieValue(name) {
    const encodedName = encodeURIComponent(name);
    const cookies = document.cookie.split('; ');

    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === encodedName) {
            return decodeURIComponent(cookieValue);
        }
    }

    return '';
}
function rateChat(chatId, rate) {
    connection.invoke("rateChat", chatId, rate);
}
/*connection.on("chatStatusProcess", (status) => {
    if (status == "S") {

    }
    if (status == "E") {
        // alert('err')
    }

});*/







/*VideoAudicall------------------------------------------------------------------------------------------------------------------------------------------------------------*/
var iceservers = [];
connection.on("twilioProcess", (connectionIdValue) => {

    //console.log('connection id ' + connectionIdValue);
    iceservers = JSON.parse(connectionIdValue);

});
var callAccepted = 'C';
connection.on("peerCallAcceptProcess", (connectionIdValue) => {


    peerConnectionId = connectionIdValue;
    callAccepted = 'A';
    // alert(connectionIdValue)

});
connection.on("peerCurrentCallStatusProcess", (agentConnectionId) => {

    connection.invoke("peerCurrentCallStatus", callAccepted, agentConnectionId);


});


var peer;
var conn;
var peerCall;
var callStream;


var videoCallAllowed = true;

var peerConnectionId = '';


var mediaRecorder;
var chunks = [];




//https://www.smarterasp.net/support/kb/a2193/how-to-deploy-peerjs.aspx
//https://www.linkedin.com/pulse/how-run-node-js-application-iis-rashid-bilgrami/
//https://www.linkedin.com/pulse/how-run-node-js-application-iis-rashid-bilgrami
//https://www.google.com/search?q=add+iisnode+module+iis&rlz=1C1ONGR_enMY1039MY1040&oq=add+iisnode+module+iis&aqs=chrome..69i57j33i160l2.5447j0j9&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:a6a2226f,vid:JUYCDnqR8p0
//https://stackoverflow.com/questions/24028537/iisnode-encountered-an-error-when-processing-the-request

function playRining() {
    audioCallingElement.currentTime = 0;
    audioCallingElement.play()
}
function stopRining() {
    audioCallingElement.currentTime = 0;
    audioCallingElement.pause();
}

function initiatAndConnect() {
    peer = new Peer(chatConnectionId, {
        host: 'pj2.holeno.com', path: "myapp", secure: true, port: 443, config: { 'iceServers': iceservers } /* Sample servers, please use appropriate ones */
    });//

    peer.on('open', function (id) {
        //console.log('My peer ID is: ' + id);
        // alert('My peer ID is: ' + id);
        initiateVideoCall();
        playRining();
        callAccepted = 'I';

        connection.invoke("sendVideoAudioCallAlert", chatUserId, chatConnectionId);


    });

    peer.on('disconnected', function () {
        peer.reconnect();
    });

    peer.on('error', function (err) {

        if (err.type == 'unavailable-id') {
            initiateVideoCall();
            playRining();
            callAccepted = 'I';
            connection.invoke("sendVideoAudioCallAlert", chatUserId, chatConnectionId);
        }
    });

    peer.on('connection', function (conn) {
        conn.on('data', function (data) {
            // Will print 'hi!'
            //console.log(data);
            //alert('sss')

            if (peerConnectionId == data) {
                endCall('L');
            }
            else {


                // alert('fat')
            }
            if (data == 'disconnect') {
                endCall('L');
            }
            if (data == 'share_screen') {
                htmlVideoContainerFunctions('V');
            }
            if (data == 'stop_share_screen') {
                htmlVideoContainerFunctions('E');
            }

        });
    });

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    peer.on('call', function (call) {
        getUserMedia({ video: videoCallAllowed, audio: true }, function (stream) {
            peerCall = call;
            callStream = stream;

            peerCall.answer(callStream); // Answer the call with an A/V stream.

            //console.log('answer call');
            peerCall.on('stream', function (remoteStream) {
                // Show stream in some video/canvas element.
                // alert('stream');
                const remoteVideo = document.getElementById('remoteVideo');
                remoteVideo.srcObject = remoteStream;

                const locallVideo = document.getElementById('localVideo');
                locallVideo.srcObject = callStream;

                if (videoCallAllowed) {
                    sender = peerCall.peerConnection.getSenders().find(sender => sender.track.kind === 'video');
                    sender.replaceTrack(callStream.getVideoTracks()[0]);
                }

                /* mediaRecorder = new MediaRecorder(remoteStream);
 
                 mediaRecorder.ondataavailable = (event) => {
                     chunks.push(event.data);
                 };
                 mediaRecorder.onstop = () => {
                     const recording = new Blob(chunks, { type: 'video/mp4' });
                     chunks.length = 0;
 
                     // const recordingURL = URL.createObjectURL(recording);
                     // preview.src = recordingURL;
 
                     const reader = new FileReader();
                     reader.onloadend = () => {
                         const base64String = reader.result;
 
 
                         console.log(base64String);
 
 
                     };
                     reader.readAsDataURL(recording);
                 };
                 mediaRecorder.start();
                 */
                stopRining();
                htmlVideoContainerFunctions('E')
            });

            peerCall.on('close', () => {
                videoCall(peerCall.peer);

                //alert('call ened' + peerCall.peer);
                const remoteVideo = document.getElementById('remoteVideo');
                remoteVideo.srcObject = null; // Clear the remote video stream
            });
            peerCall.on('error', (err) => {
                //console.log(err)
            });
        }, function (err) {
            //console.log('Failed to get local stream', err);
        });
    });
}


function videoCall(peerId) {
    var conn = peer.connect(peerId);
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function () {
        // here you have conn.id
        conn.send("disconnect");
    });
}

function playStream(stream) {
    var audio = $('<audio autoplay />').appendTo('body');
    audio[0].src = (URL || webkitURL || mozURL).createObjectURL(stream);
}
var localStream;
var sender;

function initiateVideoCall() {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    getUserMedia({ video: videoCallAllowed, audio: true }, function (stream) {
        callStream = stream;

        peerCall = peer.call(peerConnectionId, callStream);
        peerCall.on('stream', function (remoteStream) {
            // Show stream in some video/canvas element.
            const remoteVideo = document.getElementById('remoteVideo');
            remoteVideo.srcObject = remoteStream;

            const locallVideo = document.getElementById('localVideo');
            locallVideo.srcObject = callStream;

            if (videoCallAllowed) {
                sender = peerCall.peerConnection.getSenders().find(sender => sender.track.kind === 'video');
                sender.replaceTrack(callStream.getVideoTracks()[0]);
            }
            stopRining();
            //alert('stream init')
            stopCam();
        });

        peerCall.on('close', () => {
            videoCall(peerCall.peer);
            //alert('call ened');
            const remoteVideo = document.getElementById('remoteVideo');
            remoteVideo.srcObject = null; // Clear the remote video stream
        });
    }, function (err) {
        //console.log('Failed to get local stream', err);
    });
}
function answerCall() {

}
function endCall(operation) {
    if (peerCall) {
        peerCall.close(); // Close the call
        const remoteVideo = document.getElementById('remoteVideo');
        remoteVideo.srcObject = null; // Clear the remote video stream

        const locallVideo = document.getElementById('localVideo');
        locallVideo.srcObject = null;

        callStream.getAudioTracks()[0].stop();
        if (videoCallAllowed) {
            callStream.getVideoTracks()[0].stop();
        }

        document.getElementById('videoCallContainer').style.display = 'none';
        document.getElementById('voiceCallContainer').style.display = 'none';
        stopRining();

        callAccepted = 'C';

        // mediaRecorder.stop();
        //  videoCall();

        voiceCallIcon.style.display = 'block';
        videoCallIcon.style.display = 'block';
    }
}

//----------------------------------------------------



function gotDevices(deviceInfos) {
    // Handles being called several times to update labels. Preserve values.
    //console.log(deviceInfos)
    const values = selectors.map(select => select.value);
    selectors.forEach(select => {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    });
    for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
            option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
            audioInputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'audiooutput') {
            option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
            audioOutputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
            videoSelect.appendChild(option);
        } else {
            //console.log('Some other kind of source/device: ', deviceInfo);
        }
    }
    selectors.forEach((select, selectorIndex) => {
        if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
            select.value = values[selectorIndex];
        }
    });
}



// Attach audio output device to video element using device/sink ID.
function attachSinkId(element, sinkId) {
    if (typeof element.sinkId !== 'undefined') {
        element.setSinkId(sinkId)
            .then(() => {
                //console.log(`Success, audio output device attached: ${sinkId}`);
            })
            .catch(error => {
                let errorMessage = error;
                if (error.name === 'SecurityError') {
                    errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
                }
                console.error(errorMessage);
                // Jump back to first output device in the list as it's the default.
                audioOutputSelect.selectedIndex = 0;
            });
    } else {
        console.warn('Browser does not support output device selection.');
    }
}

function changeAudioDestination() {
    const audioDestination = audioOutputSelect.value;
    attachSinkId(videoElement, audioDestination);
}

function gotStream(stream) {
    // window.stream = stream; // make stream available to console
    //videoElement.srcObject = stream;
    callStream.addTrack(stream.getVideoTracks()[0]);
    document.getElementById('localVideo').srcObject = callStream;
    sender.replaceTrack(stream.getVideoTracks()[0])




    // Refresh button list in case labels have become available
    return navigator.mediaDevices.enumerateDevices();
}


function handleError(error) {
    //console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

function startStream() {


    callStream.getVideoTracks().forEach(track => track.stop());
    callStream.removeTrack(callStream.getVideoTracks()[0]);

    const audioSource = audioInputSelect.value;
    const videoSource = videoSelect.value;
    const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
}

//audioInputSelect.onchange = startStream;
//audioOutputSelect.onchange = changeAudioDestination;

// videoSelect.onchange = startStream;

//startStream();

async function calculateStreamSize(stream) {
    const reader = stream.getReader();
    let totalSize = 0;

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalSize += value.length;
    }

    return totalSize;
}




function replaceStream() {

    var videoConstraints = {};

    videoConstraints.width = 1920;
    videoConstraints.height = 1080;

    var displayMediaStreamConstraints = {
        video: videoConstraints // or pass HINTS
    };



    if (navigator.mediaDevices.getDisplayMedia) {
        //navigator.mediaDevices.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);



        navigator.mediaDevices.getDisplayMedia(displayMediaStreamConstraints).then((stream) => {


            peerCall.peerConnection.getSenders().forEach((sender) => {
                if (sender.track.kind === "audio" && stream.getAudioTracks().length > 0) {
                    sender.replaceTrack(stream.getAudioTracks()[0]);
                }
                if (sender.track.kind === "video" && stream.getVideoTracks().length > 0) {
                    sender.replaceTrack(stream.getVideoTracks()[0]);
                }
            });
            document.getElementById('localVideo').srcObject = stream;

        });

    } else {
        navigator.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);
    }
}

function replaceStreamCamera() {

    const audioSource = audioInputSelect.value;
    const videoSource = videoSelect.value;
    const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
    };




    if (navigator.mediaDevices.getUserMedia) {
        //navigator.mediaDevices.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);



        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {


            peerCall.peerConnection.getSenders().forEach((sender) => {
                if (sender.track.kind === "audio" && stream.getAudioTracks().length > 0) {
                    sender.replaceTrack(stream.getAudioTracks()[0]);
                }
                if (sender.track.kind === "video" && stream.getVideoTracks().length > 0) {
                    sender.replaceTrack(stream.getVideoTracks()[0]);
                }
            });
            document.getElementById('localVideo').srcObject = stream;

        });

    } else {
        navigator.getUserMedia(constraints).then(success).catch(error);
    }
}

function replaceAudioOnly() {

    const audioSource = audioInputSelect.value;
    const videoSource = videoSelect.value;


    const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: false
    };




    if (navigator.mediaDevices.getUserMedia) {
        //navigator.mediaDevices.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);



        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {


            peerCall.peerConnection.getSenders().forEach((sender) => {
                if (sender.track.kind === "audio" && stream.getAudioTracks().length > 0) {
                    sender.replaceTrack(stream.getAudioTracks()[0]);
                    //console.log('audio track aaaa');

                    callStream.getVideoTracks().forEach(track => track.stop());
                    callStream.removeTrack(callStream.getVideoTracks()[0]);

                }
                if (sender.track.kind === "video" && stream.getVideoTracks().length > 0) {
                    sender.replaceTrack(stream.getVideoTracks()[0]);
                    //console.log('video track aaaa')
                }
            });
            document.getElementById('localVideo').srcObject = stream;


        });

    } else {
        navigator.getUserMedia(constraints).then(success).catch(error);
    }
}
function replaceVideoOnly() {

    videoCallAllowed = true;
    const audioSource = audioInputSelect.value;
    const videoSource = videoSelect.value;
    const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
    };




    if (navigator.mediaDevices.getUserMedia) {
        //navigator.mediaDevices.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);



        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {


            peerCall.peerConnection.getSenders().forEach((sender) => {
                if (sender.track.kind === "audio" && stream.getAudioTracks().length > 0) {
                    sender.replaceTrack(stream.getAudioTracks()[0]);
                }
                if (sender.track.kind === "video" && stream.getVideoTracks().length > 0) {
                    sender.replaceTrack(stream.getVideoTracks()[0]);
                }
            });
            document.getElementById('localVideo').srcObject = stream;

        });

    } else {
        navigator.getUserMedia(constraints).then(success).catch(error);
    }
}

var micStatus = true;
var videoStatus = false;
function muteMic() {
    // callStream.getAudioTracks().forEach(track => track.enabled = !track.enabled);

    let micStoredValue = micStatus;
    if (micStoredValue === true) {

        micStatus = false;
        //btn_MuteAudio.className = "btn btn-danger text-center";
        btn_MuteAudio.innerHTML = `<i class="fa-solid fa-microphone-slash"></i>`;

    }
    if (micStoredValue === false) {
        micStatus = true;
        // btn_MuteAudio.className = "btn btn-dark text-center";
        btn_MuteAudio.innerHTML = `<i class="fa-solid fa-microphone"></i>`;
    }
    try {
        callStream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
    }
    catch (err) {

    }
}

function muteCam() {
    //callStream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
    let videoStoredValue = videoStatus;
    if (videoStoredValue == true) {
        videoStatus = false;

        //btn_MuteCam.className = "btn btn-danger text-center";
        btn_MuteCam.innerHTML = `<i class="fa-solid fa-video-slash"></i>`;
        videoCallOperation(peerCall.peer, "stop_share_screen");
    }
    if (videoStoredValue == false) {
        videoStatus = true;
        // btn_MuteCam.className = "btn btn-dark text-center";
        btn_MuteCam.innerHTML = `<i class="fa-solid fa-video"></i>`;
        videoCallOperation(peerCall.peer, "share_screen");
    }
    try {
        callStream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
    }
    catch (err) {

    }
}
function stopCam() {
    callStream.getVideoTracks().forEach(track => track.enabled = false);
}
function htmlVideoContainerFunctions(operation) {

    if (operation == 'C') {
        dv_videoSection.style.display = 'none';
        dvConnecting.style.display = 'block';
        btn_MuteCam.style.display = 'none';
        btn_MuteAudio.style.display = 'none';
        dvConnected.style.display = 'none';
    }

    if (operation == 'E') {
        dv_videoSection.style.display = 'none';
        dvConnecting.style.display = 'none';
        btn_MuteCam.style.display = 'none';
        btn_MuteAudio.style.display = 'inline-block';
        dvConnected.style.display = 'block';
    }
    if (operation == 'V') {
        dv_videoSection.style.display = 'block';
        dvConnecting.style.display = 'none';
        btn_MuteCam.style.display = 'none';
        btn_MuteAudio.style.display = 'inline-block';
    }
}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    try {
        if (UserLanguage != "5c69e98a-2b46-4819-8fb6-6acdfba597bd") {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                openChatButton.style.bottom = "78px";
            } else {
                openChatButton.style.bottom = "10px";
            }
        }
        else {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                openChatButton.style.bottom = "152px";
            } else {
                openChatButton.style.bottom = "83px";
            }
        }
    }
    catch (err) {

    }

}

function getCurrentTimeAMPM() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = hours + ':' + minutes + ' ' + ampm;
    return timeString;
}

function passUserMessage(messagePassed) {
    var currentTime = getCurrentTimeAMPM();
    var message = `
                                 <div style='display:flex; flex-direction: row-reverse;'>      <div class="message bot-message-user">
                <span class="bot-inner-message">${messagePassed}</span>
                <div class="message-bot-date">${currentTime}</div>
            </div></div>
                                    `;

    addToChat('chatbox-body', message);

    var currentStoredMessages = localStorage.getItem("messages");
    if (currentStoredMessages == null || currentStoredMessages == 'null') {
        currentStoredMessages = message;
    }
    else {
        currentStoredMessages = currentStoredMessages + message;
    }

    localStorage.setItem("messages", currentStoredMessages);

}

