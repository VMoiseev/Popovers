export default class Popover {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
      <div class="container_wraper">
        <button class="popover">
          Click to toggle popover
        </button>
        <div class="tooltip hidden">
          <div class="tooltip_title">
            Popover title
          </div>
          <div class ="tooltip_text">
            And here's some amazing content. It's very engaging. Right?
          </div>
        </div>
      </div>
    `;
  }

  static get popoverSelector() {
    return '.tooltip';
  }

  static get buttonSelector() {
    return '.popover';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    button.addEventListener('click', (e) => this.onButton(e));
  }

  onButton(e) {
    e.preventDefault();
    const popover = this.parentEl.querySelector(this.constructor.popoverSelector);
    if (popover.classList.contains('hidden')) {
      popover.classList.remove('hidden');
    } else {
      popover.classList.add('hidden');
    }
  }
}
