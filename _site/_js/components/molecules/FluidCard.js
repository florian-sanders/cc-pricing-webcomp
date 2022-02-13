import { LitElement, html, css } from 'lit';

export class FluidCard extends LitElement {
	static styles = [
		css`
			.horizontal-card {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				justify-content: space-evenly;
				gap: calc(var(--gutter) * 2);
				padding: 1.5rem;
				width: max-content;
				background-color: var(--light-primary-color);
				border-radius: var(--border-radius);
				box-shadow: var(--shadow-elevation-low);
				margin-bottom: calc(var(--gutter) * 2);
				transition: box-shadow 0.3s ease-out;
			}

			.horizontal-card:hover,
			.horizontal-card:focus-within {
				transition: box-shadow 0.3s ease-out;
				box-shadow: var(--shadow-elevation-medium);
			}

			/* default heading style - can be overridden by custom styles outside the component if needed */
			slot[name=heading]::slotted(*) {
				letter-spacing: 2px;
				min-width: 3rem;
				font-size: 0.9rem;
				font-weight: 600;
				text-align: center;
				text-transform: uppercase;
			}

			::slotted(.price-area) {
				display: flex;
				flex-flow: column wrap;
				justify-content: space-evenly;
				gap: 1rem;
				align-items: center;
				font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
				font-weight: bold;
				font-size: 1.3rem;
			}
		`
	];

	render() {
		return html`<div class="horizontal-card">
			<slot name="heading"></slot>
			<slot></slot>
		</div>`;
	}
}

window.customElements.define('fluid-card', FluidCard);
