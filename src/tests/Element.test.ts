import {createElement, render} from "../lib/createElement";
const assert = require("assert");

describe('Create Element', function () {
    it('Should return an HTML element', function () {
        const p = createElement("p");
        const world = 3;
        const myp = p`Hello ${world}`;
        const  template = myp()
        assert.equal(template.template.text, `Hello ${world}`)
    })
})

describe('Render Element', function () {
    before(function () {
        this.jsdom = require('jsdom-global')();
        const div = document.createElement("div");
        div.setAttribute("id", "app");
        document.body.appendChild(div);
    })

    it('WORKS!', function () {
        const p = createElement("p");
        const world = "World";
        const myp = p`Hello ${world}`;
        const template = myp()
        render("#app", template);

        assert.equal(document.body.innerHTML, "<p>Hello World</p>")
    })

    after(function () {
        this.jsdom()
    })
}) 