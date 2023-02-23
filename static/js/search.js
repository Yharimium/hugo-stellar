(function () {
    var section = "posts", pattern;

    try {
        section = decodeURIComponent(window.location.href.match(/\?sec=(.+)\?/)[1]);
        pattern = decodeURIComponent(window.location.href.match(/\?key=(.+)/)[1]);
    }
    catch {}

    $items = $(`pre[id=${section}]`).find("item");

    $result = $("#search-result");
    $input = $("#search-input");

    $tab_posts = $(".sec_tabs .tab.posts");
    $tab_docs = $(".sec_tabs .tab.docs");

    $(".sec_tabs").find(`.tab.${section}`).addClass("active");

    $tab_posts.click( () => {
        if (! $tab_posts.hasClass("active")) {
            $tab_posts.addClass("active");
            $tab_docs.removeClass("active");
            section = "posts";
            $items = $(`pre[id=${section}]`).find("item");
            search();
        }
    })
    
    $tab_docs.click( () => {
        if (! $tab_docs.hasClass("active")) {
            $tab_docs.addClass("active");
            $tab_posts.removeClass("active");
            section = "docs";
            $items = $(`pre[id=${section}]`).find("item");
            search();
        }
    })

    $input.val(pattern);

    search = () => {
        var key = $input.val().trim();
        if (! key.length)
            return $result.html("");
        
        var cnt = 0,
            html = "";

        for (item of $items) {
            var $item = $(item);
            var title   = $item.find("title").html();
            var link    = $item.find("url").html();
            var content = $item.find("description").html();

            var text    = title + content;
            var index   = text.toLowerCase().indexOf(key.toLowerCase());

            if (index > -1) {
                cnt ++;
                var preview = text
                    .substr(Math.max(0, index - 20), 60)
                    .replaceAll(RegExp(`(${key})`, "ig"), `<span class="key">$1</span>`);
                html += `<a class="item card" href='${link}'>\
                    <span class="title">${title}</span>\
                    <code class="preview">${preview}...</code>\
                </a>`;
            }
        }

        $result.html(
            `<p class="item summary">${!cnt ? `未找到匹配的文章.` : `找到 ${cnt} 个包含「${key}」的结果.`}</p>` + html
        );
    }

    $input.bind("input propertychange", search);

    search()
})(window);