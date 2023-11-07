(function () {
    var pattern;
    pattern = (window.location.href.match(/\?key=(.+)/) || ["", ""])[1];
    pattern = decodeURIComponent(pattern);

    $items  = $("#data").find("item");
    $result = $("#search-result");
    $input  = $("#search-input");

    $input.val(pattern);

    search = () => {
        var key = $input.val().trim();
        var path = window.location.href;
        
        if (path.indexOf("?") != -1) {
            path = path.substring(0, path.indexOf("?"))
        }

        if (! key.length) {
            history.pushState('', '', path);
            $result.html("");
            return;
        }

        history.pushState('', '', path + `?key=${key}`);
        
        var counter = 0, html = "";
        var regexKey = RegExp(`(${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");

        for (item of $items) {
            var $item = $(item);
            var title   = $item.find("title").html();
            var url     = $item.find("url").html();
            var content = $item.find("description").html();

            var index   = (title + content).search(regexKey);

            if (index > -1) {
                counter ++;
                title = title
                    .replaceAll(regexKey, `<span class="key">$1</span>`);
                content = content
                    .substr(Math.max(0, index - 20), 60)
                    .replaceAll(regexKey, `<span class="key">$1</span>`);
                html += `<a class="item card" href='${url}' target='_blank'><span class="title">${title}</span><code class="preview">${content}...</code></a>`;
            }
        }

        html = `<p class="item summary">${!counter ? `未找到匹配的文章.` : `找到 ${counter} 个包含「${key}」的结果.`}</p>` + html;

        $result.html(html);
    }

    $input.bind("input propertychange", search);

    search()
})(window);