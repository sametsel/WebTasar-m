#!/usr/bin/env node

import yargs from "yargs";

const argv = yargs
.command("create","create a new file")
.help()
.argv as {_:string[]}
if (argv._.includes("create")){
 console.log("create işlemini başlat....");
}
