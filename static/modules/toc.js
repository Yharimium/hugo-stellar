$toc = $("#TableOfContents");

$toc.find("li").each( (id, el) => {
    var $el = $(el);
    var $a = $el.find("> a");
    var $ul = $el.find("> ul");
    if ($a.length > 1) {
        $ul.remove();
        var text = $el.text();
        $el.html($ul);
        $el.prepend($a.eq(0).text(text));
    }
});

$toc.find("ul").each( (id, el) => {
    var $el = $(el);
    var $children = $el.children();
    if ($children.length == 1 && $children[0].tagName.toLowerCase() == "li") {
        var $deep_children = $children.eq(0).children();
        if ($deep_children.length == 1 && $deep_children[0].tagName.toLowerCase() == "ul") {
            console.log($deep_children[0])
            $children.prop("outerHTML", $deep_children.html())
        }
    }
});

$anchor = $toc.find("a");
$widgets = $(".widgets");
$heading = $(".content").children("h1, h2, h3, h4, h5, h6").filter("[id]");

scrollParentToChild = (parent, child) => {
    if (!parent || !child)
        return;
    var parentRect = parent.getBoundingClientRect();
    var childRect = child.getBoundingClientRect();
    var isViewable = (childRect.top >= parentRect.top) && (childRect.bottom <= parentRect.top + parent.clientHeight);
    if (!isViewable) {
        const scrollTop = childRect.top - parentRect.top;
        const scrollBot = childRect.bottom - parentRect.bottom;
        parent.scrollTop += (scrollTop + scrollBot) / 2;
    }
}

isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

currentAnchor = () => {
    for (var i = 0; i < $heading.length; i ++)
        if (isInViewport($heading[i]))
            return $anchor.filter(`[href="${$heading[i].id}"]`);
    return null;
}

setActiveAnchor = ($cntAnchor) => {
    if (!$cntAnchor)
        return;
    $anchor.removeClass("active");
    $cntAnchor.addClass("active");
    scrollParentToChild($widgets[0], $cntAnchor[0]);
}

$(window).scroll( () => {
    setActiveAnchor(currentAnchor());
});

setActiveAnchor(currentAnchor());

$anchor.each( (id, el) => {
    $(el).click( () => {
        scrollParentToChild($widgets[0], el);
    });
});