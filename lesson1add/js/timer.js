// loadScript("js/common.js", () => {
//     console.log("js/common.js loaded -> this is callback");
// })

// loadScript("js/common.js");

loadScript(["js/dateTimeUtils.js","js/stringUtils.js"], () => {
    console.log("utils loaded -> this is callback");
})
