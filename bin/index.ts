#!/usr/bin/env node

import yargs from "yargs";
import axios from "axios";
import program from 'commander';
import init from './commands/init';


program
    .command('init <token>')
    .description('Initialize the cli with an access token of the polygon.io api.')
    .action(init)


const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .parseSync;

const greeting = `Hello, ${options.name}!`
console.log(greeting);


