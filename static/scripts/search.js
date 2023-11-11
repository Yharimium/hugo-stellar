(function () {
    var pattern;
    pattern = (window.location.href.match(/\?key=(.+)/) || ["", ""])[1];
    pattern = decodeURIComponent(pattern);

    var data   = document.getElementById("data").children;
    var result = document.getElementById("search-result");
    var input  = document.getElementById("search-input");
    
    String.prototype.escapeRegex = function() {
        return this.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    String.prototype.highlightKeyWords = function(pattern) {
        return String(this).replaceAll(pattern, `<span class="key">$1</span>`);
    };

    input.value = pattern;

    search = () => {
        var key = input.value.trim();
        var path = window.location.href;
        
        if (path.indexOf("?") != -1) {
            path = path.substring(0, path.indexOf("?"))
        }

        if (! key.length) {
            history.pushState('', '', path);
            result.innerHTML = "";
            return;
        }

        history.pushState('', '', path + `?key=${key}`);

        var counter = 0, html = "";
        var regexKey = RegExp(`(${key.escapeRegex()})`, "gi");

        for (item of data) {
            var title   = item.querySelector("title").innerHTML;
            var url     = item.querySelector("url").innerHTML;
            var content = item.querySelector("description").innerHTML;

            var index   = (title + content).search(regexKey);

            if (index > -1) {
                counter ++;
                title   = title.highlightKeyWords(regexKey);
                content = content.substr(Math.max(0, index - 20), 60).highlightKeyWords(regexKey);
                html += `<a class="item card" href='${url}'><span class="title">${title}</span><code class="preview">${content}...</code></a>`;
            }
        }

        result.innerHTML = `<p class="item summary">${!counter ? `未找到匹配的文章.` : `找到 ${counter} 个包含「${key}」的结果.`}</p>` + html;
    }

    input.oninput = search;


    search()
})(window);