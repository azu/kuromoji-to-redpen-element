// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import TokenElement from "../src/TokenElement"
describe("TokenElement-test", function () {
    describe("#toString", () => {
        const surface = 'お';
        const offset = 0;
        const tags = ["接頭詞", "名詞接続", "*", "*", "*", "*", "お", "オ", "オ"];
        const element = new TokenElement({
            surface,
            offset,
            tags
        });
        assert.equal(element, `TokenElement{surface='${surface}', offset=${offset}, tags=${tags}}`);
    });
});