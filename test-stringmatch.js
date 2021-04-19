"use strict";

const StringMatch = require("./services/stringmatch");

const stringMatch = new StringMatch(['fox', 'cat', 'lazy dog']);
stringMatch.buildLowerCase();
const matches = stringMatch.matchLowerCase("The quick brown fox jumps over the lazy DOG.");

console.log(matches);
