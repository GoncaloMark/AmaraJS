import {createElement, render} from "../lib/createElement";
const assert = require("assert");

describe('Create Element', function () {
    it('Shpuld return an HTML element', function () {
        const p = createElement("p");
        const world = "World";
        const { template } = p`Hello ${world}`;
        assert.equal(template, "Hello World")
    })
})

/* describe('Render Element', function () {
    it('Shpuld return an HTML element', function () {
        
    })
}) */