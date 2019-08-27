#!/usr/bin/env node
import { HMError, makeParser } from "@hashml/hashml";
import * as fs from "fs";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as yargs from "yargs";
import { Document } from "./components/Document";
import { toOM } from "./om/irToOm";
import { schema } from "./schema";

const logger = (_: HMError) => {
	throw _;
};

yargs
	.command(
		"* [input] [output]",
		"Convert a Hashdocs file to HTML.",
		zargs =>
			zargs
				.positional("input", {
					describe: "Input file",
					type: "string"
				})
				.option("output", {
					alias: "o",
					describe: "Output file",
					type: "string"
				}),
		argv => {
			const { input, output } = argv;
			// TODO: make reading stdin work on Windows
			const inputString = fs.readFileSync(input || "/dev/stdin", "utf-8");
			const parse = makeParser(schema, logger);
			const om = toOM(parse(inputString));
			const outputString = renderToStaticMarkup(React.createElement(Document, om));
			if (output) fs.writeFileSync(output, outputString);
			// tslint:disable-next-line:no-console
			else console.log(outputString);
		}
	)
	.parse();
