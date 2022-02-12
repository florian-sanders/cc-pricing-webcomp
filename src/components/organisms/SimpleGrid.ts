import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('simple-grid')
export class SimpleGrid extends LitElement {
	static styles = [
		css`
			:host {
				height: 100%;
			}
			
			.grid {
				display: grid;
				grid-auto-columns: 1fr;
				grid-auto-flow: column;
				height: 100%;
			}
		`
	];

	render() {
		return html`<div class="grid">
			<slot></slot>
		</div>`;
	}
}
