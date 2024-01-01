const promptId = 'prompt-id';

const closePrompt = () => {
  document.getElementById(promptId).remove();
};

const showPrompt = (title, text) => {
  const bodyElement = document.getElementsByTagName('body')[0];
  const promptElement = document.createElement('div');
  promptElement.className = 'prompt-background';
  promptElement.id = promptId;
  promptElement.addEventListener('click', closePrompt);

  promptElement.innerHTML = `
    <div class="prompt">
      <h5 class="prompt__title">${title}</h5>
      <p class="prompt__text">${text}</p>
    </div>
  `;
  bodyElement.appendChild(promptElement);
};

export {showPrompt};
