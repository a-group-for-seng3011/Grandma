"use strict";

const AhoCorasick = require("aho-corasick-node");

module.exports = class StringMatch {
    constructor(stringArray) {
        this.stringArray = stringArray;
    }

    buildLowerCase() {
        const builder = AhoCorasick.builder();
        this.stringArray.forEach(k => builder.add(k.toLowerCase()));
        this.ac = builder.build();
    }

    matchLowerCase(text) {
        return this.ac.match(text.toLowerCase());
    }
}
