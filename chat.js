const listaMensagens = [];

function adicionarMensagem(apelido, mensagem) 
{
    listaMensagens.push({ apelido, mensagem });
}

function formatarMensagens() {
    let html = '';
    for (let i = 0; i < listaMensagens.length; i++) 
    {
        const mensagem = listaMensagens[i];
        html += `<div class="chat-message">
                    <span class="chat-message-apelido">${mensagem.apelido}</span>
                    <span class="chat-message-item">${mensagem.mensagem}</span>
                </div>`;
    }
    return html;
}

function atualizarHTML() 
{
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = formatarMensagens();
}

function commitMessageClickHandler() 
{
    const messageInput = document.getElementById('message-input');
    const mensagem = messageInput.value.trim();
    if (mensagem !== '') {
        adicionarMensagem('Você', mensagem);
        if (mensagem.toLowerCase() === 'olá') {
            adicionarMensagem('Chatbot', 'Olá mundo!');
        }
        messageInput.value = '';
        atualizarHTML();
    }
}

module.exports =

{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};