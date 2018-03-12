customElements.define('var-button', class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = '@import "./themes/var-button.css";';
    this.shadowRoot.appendChild(style);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = this.textContent;
    root.appendChild(btn);
  }
});
customElements.define('var-checkbox', class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = '@import "./themes/var-checkbox.css";';
    this.shadowRoot.appendChild(style);

    const input = document.createElement('input');
    input.type = 'checkbox';
    root.appendChild(input);
  }
});

const button = document.querySelector('var-button');
document.querySelector('#themeSelector').addEventListener('change', ({ target }) => {
  document.body.className = target.value ? `${target.value}-theme` : '';
});
