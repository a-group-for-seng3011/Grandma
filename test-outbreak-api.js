"use strict";

const OutbreakAPI = require("./services/outbreak-api");

async function myfunc() {
    const outbreakAPI = new OutbreakAPI('2020-01-01T00:00:00', undefined, 'Coronavirus', undefined);
    const articles = await outbreakAPI.getSortedArticles();

    console.log(articles);
}

myfunc();
