MathJax = {
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/SVG"],
    messageStyle: 'none',
    tex2jax: {
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true
    },
    SVG: {
        blacker: 7,
        showMathMenu: false,
        undefinedFamily: "inherit",
        // linebreaks: { automatic: true, width: "container" },
        scale: 80,
        styles: {
            "text": {
                "font-size": "calc(100% / 0.8)"
            },
            ".MathJax_SVG": {
                "overflow": "auto hidden",
                "vertical-align": "middle",
                "display": "contents !important"
            }
        },
    },
    "fast-preview": {
        disabled: true
    },
};
