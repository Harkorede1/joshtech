import { publish } from "gh-pages";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

publish(
  join(__dirname, "dist"),
  {
    branch: "gh-pages",
    repo: "https://github.com/Harkorede1/joshies-tech.git", // ← Change this!
    dotfiles: true,
  },
  (err) => {
    if (err) console.error("Deploy failed:", err);
    else console.log("🚀 Successfully deployed!");
  }
);
