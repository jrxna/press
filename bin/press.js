#!/usr/bin/env node

const { buildSite } = require("../src/build");

const args = process.argv.slice(2);

const command = args[0];
const inputDir = args[1];
const outputDir = args[2];

if (command !== "build") {
  console.log("Unknown command:", command);
  console.log("Usage: press build <input_directory> <output_directory>");
  process.exit(1);
}

if (!inputDir || !outputDir) {
  console.log("Missing required arguments.");
  console.log("Usage: press build <input_directory> <output_directory>");
  process.exit(1);
}

buildSite(inputDir, outputDir);