const chatWidget = document.querySelector('.chat-widget');
const chatMessages = document.querySelector('.chat-widget__messages');
const chatInput = document.querySelector('.chat-widget__input');

let inactivity = setInterval(() => {
    chatBot(timeoutMsgList[Math.floor(Math.random() * timeoutMsgList.length)]);
}, 30000);

const responsesList = [
    'У нас обед',
    'Обращение только по записи',
    'Молчать кожаный мешок',
    'Не мешай я ем',
    'Иди поспи',
]

const timeoutMsgList = [
    'Не хочешь писать так хоть чат закрой',
    'Ты где?',
    'Напиши хоть что-то',
]


function currntTime() {
    let dt = new Date();
    return `${dt.getHours()}:${dt.getMinutes()}`;
}


function chatClient(msg) {
    chatMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currntTime()}</div>
            <div class="message__text">${msg}</div>
        </div>
    `
    chatMessages.scrollIntoView(false);
}

function chatBot(msg) {
    chatMessages.innerHTML += `
        <div class="message message_c">
            <div class="message__time">${currntTime()}</div>
            <div class="message__text">${msg}</div>
        </div>      
    `
    chatMessages.scrollIntoView(false);
}


chatWidget.onclick = () => {
    chatWidget.classList.add('chat-widget_active');
}

chatWidget.onkeyup = (key) => {
    clearInterval(inactivity);
    if (key.code === 'Enter') {
        if (chatInput.value.trim()) {
            chatClient(chatInput.value.trim());
            chatInput.value = '';
            chatBot(responsesList[Math.floor(Math.random() * responsesList.length)]);
            inactivity = setInterval(() => {
                chatBot(timeoutMsgList[Math.floor(Math.random() * timeoutMsgList.length)]);
            }, 30000);
        }
    }
}