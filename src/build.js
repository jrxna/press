const fs = require("fs").promises;
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

async function buildSite(inputDir, outputDir) {
  console.log("Starting site build...");
  console.log("Reading from:", inputDir);
  console.log("Writing to:", outputDir);

  await fs.mkdir(outputDir, { recursive: true });

  const postsDir = path.join(inputDir, "posts");
  const files = await fs.readdir(postsDir);

  console.log("Files in posts directory:", files);

  for (const fileName of files) {
    const filePath = path.join(postsDir, fileName);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const parsed = matter(fileContent);
    const htmlContent = marked(parsed.content);

    console.log("\n---");
    console.log("File name:", fileName);
    console.log("Frontmatter data:", parsed.data);
    console.log("Markdown body:");
    console.log(parsed.content);
    console.log("Generated HTML:");
    console.log(htmlContent);
  }
}

module.exports = {
  buildSite
};