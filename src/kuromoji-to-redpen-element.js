// LICENSE : MIT
"use strict";
/*
    TokenElement{surface='お', offset=0, tags=[接頭詞, 名詞接続, *, *, *, *, お, オ, オ]}
 */
import TokenElement from "./TokenElement";
export {TokenElement};
export function isRedPenElement(element) {
    if (element instanceof TokenElement) {
        return true;
    }
    if (element["surface"] == null) {
        return false;
    }
    if (typeof element["offset"] !== "number") {
        return false
    }

    if (!Array.isArray(element["tags"])) {
        return false
    }
    return true;
}
/**
 * @param {Object} token
 */
export function createElement(token) {
    return TokenElement.initWithToken(token);
}

/**
 * @param {Array} tokens
 * @returns {Array} array of TokenElement
 */
export function toElements(tokens) {
    return tokens.map(createElement);
}