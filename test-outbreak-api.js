"use strict";

const OutbreakAPI = require("./services/outbreak-api");

async function myfunc() {
    const outbreakAPI = new OutbreakAPI(undefined, undefined, 'Coronavirus', undefined);
    const articles = await outbreakAPI.getSortedArticles();

    console.log(articles);
}

myfunc();
