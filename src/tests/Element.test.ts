const element = require("Element")
const assert = require("assert")

describe('Create Element', function () {
    it('Shpuld return an HTML element', function () {
        const result = element("app", {msg: "hello world"})
        assert.equal(result, "<span am-binding='msg'>hello world</span>")
    })
})