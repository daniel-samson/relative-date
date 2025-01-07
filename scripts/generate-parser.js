var peggy = require('peggy');
var tspegjs = require('ts-pegjs');
var fs = require('fs');

const grammar = fs.readFileSync("./lib/grammar.pegjs", "utf8");

const parser = peggy.generate(grammar, {
    format: "esm",
    output: 'source',
    plugins: [tspegjs],
});

fs.writeFileSync("./lib/grammar-parser.ts", parser);