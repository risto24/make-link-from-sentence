const str = 'aaaa https://qiita.com aaa';

const makeLink = (str) => {
    let regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
    let regexp_makeLink = function(all, url, h, href) {
        return `h${href}`;
    }
    return str.replace(regexp_url, regexp_makeLink);
    // if you want only urls
    // return str.match(regexp_url);
}

makeLink(str);