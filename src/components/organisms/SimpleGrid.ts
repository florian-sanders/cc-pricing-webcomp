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
				grid-template-columns: repeat(var(--nbOfColumns), 1fr);
				height: 100%;
			}
		`
	];

	nbOfColumns = this.querySelectorAll('grid-column').length;

	render() {
		return html`<div class="grid" style="--nbOfColumns: ${this.nbOfColumns}">
			<slot></slot>
		</div>`;
	}
}
