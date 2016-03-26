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
    constructor(token) {
        this.surface = token.surface_form;
        // kuromoji's token word_position start with 1>=
        this.offset = token.word_position - 1;
        this.tags = toTagsList(token);
    }

    /**
     * init with redpen object
     * @param {{ surface: string, offset: number, tags: Array}}object
     */
    static initWithRedPenObject(object) {
        const element = new TokenElement({});
        element.surface = object.surface;
        element.offset = object.offset;
        element.tags = object.tags;
        return element;
    }

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