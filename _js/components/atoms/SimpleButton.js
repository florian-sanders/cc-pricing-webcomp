import { css, html, LitElement } from 'lit';

export class SimpleButton extends LitElement {

	static styles = [
		css`
      /* basic styles */

      button {
        height: fit-content;
        padding: 0.5rem 0.8rem;
        border-radius: 0.3rem;
        border: solid 1px transparent;
        box-shadow: var(--shadow-elevation-high);
        color: var(--white-color);
        font-family: 'Ubuntu', Arial, sans-serif;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.4s ease-out;
      }

      button.primary,
      button.secondary,
      button.cautionary {
        background: var(--component-color);
      }

      /* hover + focus styles */

      button:hover,
      button:focus-visible {
        border: solid 1px var(--component-color);
        background-color: var(--white-color);
        color: var(--black-color);
        transition: background-color 0.4s ease-out, color 0.4s ease-out, border 1s ease-out;
      }

      button:focus-visible {
        outline: dashed 2px var(--component-color);
        outline-offset: 5px;
      }

      button[disabled] {
        box-shadow: none;
        background-color: var(--soft-black-color);
        color: var(--white-color);
        cursor: auto;
      }
		`
	];

	constructor() {
		super();
		this.skin = 'primary';
		this.isDisabled = false;
	}

	static get properties() {
		return {
			skin: { type: String },
			isDisabled: { type: Boolean }
		};
	}

	render() {
		return html`
			<button
				class='${this.skin}'
				type='button'
				?disabled='${this.isDisabled}'
				style='--component-color: var(--${this.skin}-color)'
			>
				<slot></slot>
			</button>
		`;
	}
}

window.customElements.define('simple-button', SimpleButton);