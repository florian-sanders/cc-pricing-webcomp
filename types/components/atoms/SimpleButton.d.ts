import { LitElement } from 'lit';
export declare class SimpleButton extends LitElement {
    skin: 'primary' | 'secondary' | 'cautionary';
    isDisabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
