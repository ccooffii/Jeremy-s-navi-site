// console.log(jQuery)
const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const ls = localStorage.getItem("ls");
const lsObejct = JSON.parse(ls);
const hashMap = lsObejct || [];
const removeHttp = (url)=>{
    return url.replace("https://", "").replace("http://", "").replace("www.", "".replace(/\/.*/, ""));
};
const test = "https://www.douyu.com";
removeHttp(test);
// console.log(test)
const render = ()=>{
    $siteList.find("li:not(.last)").remove();
    hashMap.forEach((node, index)=>{
        const $li = $(`<li>
                <div class = "site">
                <div class = "icon">
                ${node.icon}
                </div>
                <div class = "link">
                ${removeHttp(node.url)}
                </div>
                <svg class = "close"><use href="#close"></use></svg>
                </div>
                </li>`).insertBefore($lastLi);
        $li.on("click", ()=>{
            window.open(node.url);
        });
        $li.on("click", ".close", (e)=>{
            e.stopPropagation();
            hashMap.splice(index, 1);
            render();
        });
    });
};
render();
$(".importButton").on("click", ()=>{
    let newUrl = window.prompt("enter a website");
    if (newUrl.indexOf("http") !== 0) newUrl = "https://" + newUrl;
    hashMap.push({
        icon: removeHttp(newUrl)[0],
        url: newUrl
    });
    render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap);
    localStorage.setItem("ls", string);
};

//# sourceMappingURL=index.de158e3a.js.map
