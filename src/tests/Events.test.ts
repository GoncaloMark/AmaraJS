import {createElement, render} from "../lib/createElement";
import { onClick } from "../lib/eventHandling";
const assert = require("assert");

describe('Event Test', function () {
    before(function () {
        this.jsdom = require('jsdom-global')();
        const div = document.createElement("div");
        div.setAttribute("id", "app");
        document.body.appendChild(div);
    })

    it('Should return x = 1 after click', function () {
        const evt = new Event('click', { bubbles: false, cancelable: false, composed: false });
        const p = createElement("p");
        const world = 3;
        let x = 0;
        const template = p`${onClick(() => {x = 1; return x})} Hello ${world}`;
        render("#app", template);
        const y = document.getElementById("test");
        y?.dispatchEvent(evt)
        assert.equal(x, 1)
    })

    after(function () {
        this.jsdom()
    })
})