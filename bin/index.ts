#!/usr/bin/env node

import yargs from "yargs";
import axios from "axios";
import fs from 'fs';

const 








const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.name}!`
console.log(greeting);

console.log("Here's a random joke for you:")

