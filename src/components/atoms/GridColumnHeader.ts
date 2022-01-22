import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('grid-column-header')
export class GridColumnHeader extends LitElement {
	static styles = [
		css`
			.grid-col-header {
				margin-top: calc(var(--gutter) * 2);
				min-height: 7rem;
			}

			::slotted(h2) {
				margin: calc(var(--gutter) * 2);
				font-size: 1rem;
				text-align: center;
				font-weight: 500;
				font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
				letter-spacing: 0.5px;
				font-style: italic;
			}
		`
	];

	render() {
		return html`<div class="grid-col-header">
			<slot></slot>
		</div>`;
	}
}
