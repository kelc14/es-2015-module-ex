import ReactDOM from "react-dom";

import React from "react";

import items from "./foods";
import { choice, remove } from "./helpers";

let item = choice(items);
console.log(`I'd like one ${item} please!`);
console.log(`Here you go: ${item}!`);
console.log(`Delicious, may I have another?`);
remove(items, item);
console.log(`I'm sorry, we're all out.  We have ${items.length} left.`);
