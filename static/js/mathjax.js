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
        undefinedFamily: "var(--font-stack)",
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
    TeX: {
        extensions: ['autoload-all.js', '/js/xypic.js'],
        Macros: {
            d: "\\text{d}",
            degree: "^\\circ",
            dis: "\\text{dis}",
            disp: "\\displaystyle",
            eq: "\\Longleftrightarrow",
            intro: "\\Longrightarrow",
            longequal: "=\\!=",
            margin: "\\textcolor{transparent}{1}",
            mex: "\\text\{mex\}",
            no: "\\times",
            wave: "\\sim",
            vec: "\\overrightarrow",
            yes: "\\surd",
        }
    },
    AuthorInit: function () {
        var REPLACEMENT = [
            [",", "\{\\unicode{0x2C} \\ \\ \}"],
            [/\\node/g, "*+[o][F-]{\\color{transparent}o}"]
        ];
        MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
            MathJax.InputJax.TeX.prefilterHooks.Add(function (data) {
                for (const it of REPLACEMENT)
                    data.math = data.math.replaceAll(it[0], it[1]);
                data.math = `\\displaystyle \{ ${data.math} \}`;
            });
        });
    },
};

(function (d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://gcore.jsdelivr.net/npm/mathjax@2.7.7/MathJax.js';
    d.getElementsByTagName('head')[0].appendChild(script);
})(document);