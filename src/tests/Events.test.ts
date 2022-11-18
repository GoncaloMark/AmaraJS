import {createElement, render} from "../lib/createElement";
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
        const p = createElement("p", "test");
        const world = "World";
        let x = 0;
        const template = p`Hello ${world}`("click", () => {x = 1; return x});

        render("#app", template);
        const y = document.getElementById("test");
        y?.dispatchEvent(evt)
        assert.equal(x, 1)
    })

    after(function () {
        this.jsdom()
    })
})

describe('Event Test for HTML', function () {
    before(function () {
        this.jsdom = require('jsdom-global')();
        const div = document.createElement("div");
        div.setAttribute("id", "app");
        document.body.appendChild(div);
    })

    it('Should return HTML', function () {
        const evt = new Event('click', { bubbles: false, cancelable: false, composed: false });
        const p = createElement("p", "test");
        let x = true;
        const template = p`Hello ${x}`("click", () => { return x});
        render("#app", template);
        const y = document.getElementById("test");
        y?.dispatchEvent(evt)
        assert.equal(document.body.innerHTML, "<p id=\"test\">Hello true</p>")
    })

    after(function () {
        this.jsdom()
    })
})