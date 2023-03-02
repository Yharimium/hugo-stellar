SelectText = (el) => {
    if (! el)
        return;
    var doc = window.document, sel, range;
    if (window.getSelection && doc.createRange) {
        sel = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

$(".highlight").each( (id, codeblock) => {
    var $codeblock  = $(codeblock);
    var $board      = $codeblock.find(".board");
    var $clip       = $board.find(".clipboard");
    var $edit       = $board.find(".edit");
    var $pre        = $codeblock.find("pre").eq($codeblock.has(".chroma").length);
    
    $clip.click( () => {
        if ($clip.hasClass("active"))
            return;
        SelectText($pre[0]);
        document.execCommand("copy");
        $clip.addClass("active");
        setTimeout( () => {
            $clip.removeClass("active")
        }, 1000);
    });

    $edit.click( () => {
        if (! $edit.hasClass("active")) {
            $edit.addClass("active");
            $board.addClass("active");
            $pre.attr("contenteditable", "true")
                .attr("style", "background: var(--bg-card) !important")
                .focus();
        }
        else {
            $edit.removeClass("active");
            $board.removeClass("active");
            $pre.attr("contenteditable", "false")
                .attr("style", "");
        }
    });
});

$(".stellar.copy-area").each( (id, el) => {
    var $el = $(el);
    var $clip = $el.find(".clipboard");
    var $pre = $el.find("pre");
    $clip.click( () => {
        SelectText($pre[0]);
        document.execCommand("copy");
    });
});