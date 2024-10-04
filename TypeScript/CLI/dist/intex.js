#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const argv = yargs_1.default
    .command("create", "create a new file")
    .help()
    .argv;
if (argv._.includes("create")) {
    console.log("create işlemini başlat....");
}
