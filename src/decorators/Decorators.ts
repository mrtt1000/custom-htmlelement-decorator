export interface ComponentOptions {
    elementName: string;
    id?: string;
    classes?: string[];
    styles?: Partial<CSSStyleDeclaration>;
}

export function Component(componentOptions: ComponentOptions) {
    return function (target: any) {
        const originalMethod = target.prototype.connectedCallback;
        const {elementName, id, classes, styles} = componentOptions;

        // function() rather than () => is important because of the scoping of 'this'
        target.prototype.connectedCallback = function () {
            if (id) {
                this.id = id;
            }
            if (classes) {
                this.classList.add(...classes)
            }
            if (styles) {
                Object.assign(this.style, styles);
            }
            originalMethod.apply(this);
        };
        customElements.define(elementName, target);
    }
}