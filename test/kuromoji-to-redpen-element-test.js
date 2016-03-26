// LICENSE : MIT
"use strict";
const assert = require("power-assert");
const tokenize = require("kuromojin").tokenize;
import {toElements, isRedPenElement} from "../src/kuromoji-to-redpen-element"
import TokenElement from "../src/TokenElement"
describe("kuromoji-to-redpen-element", function () {
    context("when pass without array", () => {
        it("should throw error", ()=> {
            const text = `お刺身を食べれない。`;
            assert.throws(() => {
                toElements(text);
            });
        });
    });
    context("when pass token array", () => {
        it("should return array of redpen element", ()=> {
            const text = `お刺身を食べれない。`;
            return tokenize(text).then(tokens => {
                return toElements(tokens);
            }).then(elements => {
                elements.forEach(element => {
                    assert(isRedPenElement(element));
                });
            });
        });
        // http://www.clear-code.com/blog/2015/8/29.html
        it("should match redpen results", ()=> {
            const text = `お刺身を食べれない。`;
            const expectedElements = [
                new TokenElement({
                    surface: 'お',
                    offset: 0,
                    tags: ["接頭詞", "名詞接続", "*", "*", "*", "*", "お", "オ", "オ"]
                }),
                new TokenElement({
                    surface: '刺身',
                    offset: 1,
                    tags: ["名詞", "一般", "*", "*", "*", "*", "刺身", "サシミ", "サシミ"]
                }),
                new TokenElement({
                    surface: 'を',
                    offset: 3,
                    tags: ["助詞", "格助詞", "一般", "*", "*", "*", "を", "ヲ", "ヲ"]
                }),
                new TokenElement({
                    surface: '食べ',
                    offset: 4,
                    tags: ["動詞", "自立", "*", "*", "一段", "未然形", "食べる", "タベ", "タベ"]
                }),
                new TokenElement({
                    surface: 'れ',
                    offset: 6,
                    tags: ["動詞", "接尾", "*", "*", "一段", "未然形", "れる", "レ", "レ"]
                }),
                new TokenElement({
                    surface: 'ない',
                    offset: 7,
                    tags: ["助動詞", "*", "*", "*", "特殊・ナイ", "基本形", "ない", "ナイ", "ナイ"]
                }),
                new TokenElement({
                    surface: '。',
                    offset: 9,
                    tags: ["記号", "句点", "*", "*", "*", "*", "。", "。", "。"]
                })
            ];
            return tokenize(text).then(tokens => {
                return toElements(tokens);
            }).then(elements => {
                elements.forEach((element, index) => {
                    const expected = expectedElements[index];
                    assert(element.isEquals(expected));
                });
            });
        });
    });
});