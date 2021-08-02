/*
 * @Author: Sky
 * @Date: 2021-07-31 15:37:37
 * @Description: fromEventPattern
 */

import { parseDocument } from "@umijs/deps/compiled/cheerio/htmlparser2";
import { fromEventPattern } from "rxjs";

function addClickHandler(handler) {
    parseDocument.addEventListener('click',handler)
}

function removeClickHandler(handler) {
    parseDocument.removeEventListener('click',handler)
}

const clicks=fromEventPattern(
    addClickHandler,
    removeClickHandler
)

clicks.subscribe(x=>console.log(x))