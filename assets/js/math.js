/* see: <https://docs.mathjax.org/en/latest/options/input/tex.html#tex-options> */
MathJax = {
  tex: {
    packages: {
      "[+]": ["noundefined", "autoload", "ams", "textmacros", "physics"],
    },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    tags: "all", // or 'none' or 'ams'
  },
};
