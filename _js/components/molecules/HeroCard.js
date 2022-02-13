import { css, html, LitElement } from 'lit';

export class HeroCard extends LitElement {
	static styles = [
		css`
      .hero-card {
        display: flex;
        flex-flow: column;
        padding-bottom: var(--gutter);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-elevation-low);
        background-color: var(--light-primary-color);
      }

      .hero-card.selected,
      .hero-card.selected:hover,
      .hero-card.selected:focus-within {
        box-shadow: var(--shadow-highlight-primary);
      }

      .hero-card:hover,
      .hero-card:focus-within {
        transition: box-shadow 0.3s ease-out;
        box-shadow: var(--shadow-elevation-medium);
      }

      .hero-header {
        position: relative;
      }

      slot[name=heading]::slotted(*) {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--gutter) 0.5rem;
        margin: 0;
        height: 5rem;
        width: 100%;
        letter-spacing: 1.5px;
        text-align: center;
        font-size: 1.1rem;
        background: linear-gradient(180deg,
        rgb(255 255 255 / 82%) 16%,
        var(--light-primary-color) 80%);
      }

      .hero-logo {
        position: relative;
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
      }

      ::slotted(simple-button) {
        display: flex;
        justify-content: center;
      }
		`
	];

	constructor() {
		super();
		this.heroImage = '';
	}

	static get properties() {
		return {
			heroImage: { type: String }
		};
	}

	render() {
		return html`
			<div class='hero-card' class:selected='{isSelected}' transition:fade>
				<div class='hero-header'>
					<img class='hero-logo' src='${this.heroImage}' alt='' width='176' height='181' />
					<slot name='heading'></slot>
				</div>
				<slot></slot>
			</div>`;
	}
}

window.customElements.define('hero-card', HeroCard);