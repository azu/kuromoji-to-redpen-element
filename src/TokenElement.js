// LICENSE : MIT
"use strict";
function toTagsList(token) {
    return [
        token.pos,
        token.pos_detail_1,
        token.pos_detail_2,
        token.pos_detail_3,
        token.conjugated_type,
        token.conjugated_form,
        token.basic_form,
        token.reading,
        token.pronunciation
    ];
}
export default class TokenElement {
    /**
     * @param {{surface: string, offset: number, tags: Array}} [object]
     */
    constructor(object = {}) {
        this.surface = object.surface;
        this.offset = object.offset;
        this.tags = object.tags;
    }

    /**
     * init with kuromoji.js token object
     * @param {{surface_form:string, word_position:number}} token
     */
    static initWithToken(token) {
        const element = new TokenElement();
        element.surface = token.surface_form;
        // kuromoji's token word_position start with 1>=
        element.offset = token.word_position - 1;
        element.tags = toTagsList(token);
        return element;
    }

    /**
     * is equal to other element
     * @param {TokenElement} element
     * @returns {boolean}
     */
    isEquals(element) {
        return this.surface === element.surface &&
            this.offset === element.offset &&
            this.tags.every((tag, index) => {
                return tag === element.tags[index];
            });
    }

    toString() {
        return `TokenElement{surface='${this.surface}', offset=${this.offset}, tags=${this.tags}}`;
    }
}