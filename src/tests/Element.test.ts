import {createElement, render} from "../lib/createElement";
const assert = require("assert");

describe('Create Element', function () {
    it('Should return an HTML element', function () {
        const p = createElement("p");
        const world = "World";
        const { template } = p`Hello ${world}`;
        assert.equal(template, "Hello World")
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
        const template = p`Hello ${world}`;
        render("app", template);

        assert.equal(document.body.innerHTML, "<div id=\"app\"><p>Hello World</p></div>")
    })

    after(function () {
        this.jsdom()
    })
}) 