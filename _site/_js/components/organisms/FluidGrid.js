import { css, html, LitElement } from 'lit';

export class FluidGrid extends LitElement {
	static styles = [
		css`
      .fluid-grid {
        display: grid;
        /* 3 columns when there is enough space. 1 full-width column otherwise */
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        grid-auto-rows: max-content;
        gap: calc(var(--gutter) * 2);
        height: 100%;
      }
		`
	];

	render() {
		return html`
			<div class='fluid-grid'>
				<slot></slot>
			</div>`;
	}
}

window.customElements.define('fluid-grid', FluidGrid);