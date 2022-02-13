import { css, html, LitElement } from 'lit';

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
		return html`
			<div class='grid'>
				<slot></slot>
			</div>`;
	}
}

window.customElements.define('simple-grid', SimpleGrid);