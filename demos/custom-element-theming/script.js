customElements.define('var-button', class extends HTMLElement {
  static get observedAttributes() {
    return [ 'theme' ];
  }

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    this.shadowRoot.appendChild(style);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = this.textContent;
    root.appendChild(btn);

    this.setTheme(this.getAttribute('theme') || 'basic');
  }
  
  attributeChangedCallback(name, _, newValue) {
    if (name === 'theme' && newValue) {
      this.setTheme(newValue);
    }
  }

  async setTheme(theme) {
    const { varButtonCSS } = await import(`./themes/${theme}.js`);
    const style = this.shadowRoot.firstChild;
    style.textContent = varButtonCSS;
  }
});

const button = document.querySelector('var-button');
document.querySelector('#themeSelector').addEventListener('change', ({ target }) => {
  button.setAttribute('theme', target.value);
});
