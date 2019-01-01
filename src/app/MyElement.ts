import {Component} from "../decorators/Decorators";

@Component({
    elementName: `my-element`,
    classes: [`myElement`]
})
export default class MyElement extends HTMLElement {
    constructor(){
        super();
    }

    public connectedCallback(): void {
        this.textContent = `It works!`;
    }
}