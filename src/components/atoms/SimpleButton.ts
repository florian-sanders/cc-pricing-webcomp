import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('simple-button')
export class SimpleButton extends LitElement {
	@property()
	skin: 'primary' | 'secondary' | 'cautionary' = 'primary';

	@property()
	isDisabled: boolean = false;

	@property()
	isCentered: boolean = false;

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
				font-family: 'Ubuntu', Arial;
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

	render() {
		return html`
			<button
				class="${this.skin}"
				type="button"
				?disabled=${this.isDisabled}
				style="--component-color: var(--${this.skin}-color)"
			>
				<slot></slot>
			</button>
		`;
	}
}
