import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";

import {Component} from "./decorators/Decorators";
import MyElement from "./app/MyElement";

@Component({
    elementName: `main-element`,
    id: `main`
})
class Main extends HTMLElement {
    constructor() {
        super();
        document.body.appendChild(this);
    }

    public connectedCallback(): void {
        const myElement = new MyElement();
        this.appendChild(myElement);
    }
}

new Main();