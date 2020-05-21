const str = 'aaaa https://qiita.com aaa';

const makeLink = (str) => {
    let regexpUrl = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
    let regexpMakeLink = function(all, url, h, href) {
        return `h${href}`;
    }
    return str.replace(regexpUrl, regexpMakeLink);
    // if you want only urls
    // return str.match(regexpUrl);
}

makeLink(str);