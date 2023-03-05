MathJax = {
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/SVG"],
    messageStyle: 'none',
    tex2jax: {
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        inlineMath: [['$', '$'], ['\\(', '\\)']],
    },
    SVG: {
        blacker: 7,
        showMathMenu: false,
        undefinedFamily: "inherit",
        // linebreaks: { automatic: true, width: "container" },
        scale: 90,
        styles: {
            "text": {
                "font-size": "calc(100% / 0.9)",
            }
        }
    },
    "fast-preview": {
        disabled: true
    },
};
