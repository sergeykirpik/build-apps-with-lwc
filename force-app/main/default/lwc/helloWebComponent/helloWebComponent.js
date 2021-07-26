import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = 'Trailblaizer';

    currentDate = new Date().toDateString();

    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }

    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
}