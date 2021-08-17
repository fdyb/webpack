

function attachDOM (url, callback) {

    let list = document.getElementsByTagName('script');
    let scriptWasNotAttachedBefore = true;
    for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute("src") === url) {
            scriptWasNotAttachedBefore = false;
            break;
        }
    }

    if (scriptWasNotAttachedBefore) {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        if (callback !== undefined) {
            element.onload = callback;
        }
        document.body.appendChild(element);
    }
}


function loadScript(url, callback) {

    switch (typeof url) {
        case "function": {
            url();
            return true;
        }
        case "string": {
            attachDOM(url, callback)
            return true;
        }
        case "object": {
            if (url instanceof Array) {
                url.forEach(item => attachDOM(item,callback))
                return true;
            }
        }
        default: {
            return {err: 'Аргумент должен быть массивом, функцией callback или строкой!'}
        }
    }

}