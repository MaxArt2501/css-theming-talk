customElements.define('var-button', class extends HTMLElement {
  static get observedAttributes() {
    return [ 'color', 'radius' ];
  }

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `button {
      background: #ccc;
      border: none;
      color: white;
      font-size: 1em;
      padding: .2em 1em;
      box-shadow: 0 .2em .07em -.15em rgba(0,0,0,.2), 0 .15em .15em 0 rgba(0,0,0,.14), 0 .07em .3em 0 rgba(0,0,0,.12);
    }`;
    this.shadowRoot.appendChild(style);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = this.textContent;
    root.appendChild(btn);

    this.setColor(this.getAttribute('color') || 'navy');
    this.setRadius(this.getAttribute('radius') || '0');
  }
  
  attributeChangedCallback(name, _, newValue) {
    if (name === 'color') {
      this.setColor(newValue);
    } else {
      this.setRadius(`${newValue}px`);
    }
  }
  
  setColor(color) {
    this.shadowRoot.lastChild.style.background = color;
  }
  setRadius(radius) {
    this.shadowRoot.lastChild.style.borderRadius = radius;
  }
});

const button = document.querySelector('var-button');
document.addEventListener('input', ({ target }) => {
  button.setAttribute(target.id, target.value);
});
