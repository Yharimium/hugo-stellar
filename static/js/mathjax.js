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
        // linebreaks: { automatic: true },
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

(function (d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://gcore.jsdelivr.net/npm/mathjax@2.7.7/MathJax.js';
    d.getElementsByTagName('head')[0].appendChild(script);
})(document);