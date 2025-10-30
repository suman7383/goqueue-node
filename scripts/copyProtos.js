const fs = require("fs");
const path = require("path");

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDir(srcPath, destPath);
    } else {
      // Copy *all* files (no extension filter)
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir("src/proto", "dist/proto");
console.log("Copied all files from src/proto → dist/proto");
