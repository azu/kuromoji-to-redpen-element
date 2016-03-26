# kuromoji-to-redpen-element

Convert [kuromoji.js](https://github.com/takuyaa/kuromoji.js "kuromoji.js")'s token to RedPen's [TokenElement](http://redpen.cc/javadoc/latest/cc/redpen/tokenizer/TokenElement.html "Class TokenElement").

- [TokenElement (redpen-core 1.3 API)](http://redpen.cc/javadoc/latest/cc/redpen/tokenizer/TokenElement.html)
- [redpen/TokenElement.java at master · redpen-cc/redpen](https://github.com/redpen-cc/redpen/blob/master/redpen-core/src/main/java/cc/redpen/tokenizer/TokenElement.java)

## Installation

    npm install kuromoji-to-redpen-element

## Usage

```js
const tokenize = require("kuromojin").tokenize;
import {toElements, isRedPenElement} from "kuromoji-to-redpen-element"
const text = "お刺身を食べれない。";
tokenize(text).then(tokens => {
    return toElements(tokens);
}).then(elements => {
    // elemements is array of TokenElement
    elements.forEach(element => {
        assert(isRedPenElement(element));
    });
});
```

See [TokenElement](./src/TokenElement.js).

RedPen documents

- [TokenElement (redpen-core 1.3 API)](http://redpen.cc/javadoc/latest/cc/redpen/tokenizer/TokenElement.html)


## Tests

    npm testr

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT