function FindProxyForURL(url, host) {
    // 国内网站直连，不走代理
    if (shExpMatch(host, "*.cn") ||
        shExpMatch(host, "*.com.cn") ||
        shExpMatch(host, "*.taobao.com") ||
        shExpMatch(host, "*.tmall.com") ||
        shExpMatch(host, "*.jd.com") ||
        shExpMatch(host, "*.baidu.com") ||
        shExpMatch(host, "*.qq.com") ||
        shExpMatch(host, "*.weixin.qq.com") ||
        shExpMatch(host, "*.wechat.com") ||
        shExpMatch(host, "*.bilibili.com") ||
        shExpMatch(host, "*.zhihu.com") ||
        shExpMatch(host, "*.douyin.com") ||
        shExpMatch(host, "*.xiaohongshu.com") ||
        shExpMatch(host, "*.aliyun.com") ||
        shExpMatch(host, "*.alipay.com") ||
        shExpMatch(host, "*.163.com") ||
        shExpMatch(host, "*.126.com") ||
        shExpMatch(host, "*.bing.com") ||
        shExpMatch(host, "*.alicdn.com") ||
        dnsDomainIs(host, "localhost") ||
        isPlainHostName(host)) {
        return "DIRECT";
    }

    // 国外网站走香港代理
    if (shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.ytimg.com") ||
        shExpMatch(host, "*.twitter.com") ||
        shExpMatch(host, "*.x.com") ||
        shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.fbcdn.net") ||
        shExpMatch(host, "*.instagram.com") ||
        shExpMatch(host, "*.tiktok.com") ||
        shExpMatch(host, "*.reddit.com") ||
        shExpMatch(host, "*.redd.it") ||
        shExpMatch(host, "*.github.com") ||
        shExpMatch(host, "*.github.io") ||
        shExpMatch(host, "*.openai.com") ||
        shExpMatch(host, "*.whatsapp.com") ||
        shExpMatch(host, "*.telegram.org") ||
        shExpMatch(host, "*.discord.com") ||
        shExpMatch(host, "*.gmail.com") ||
        shExpMatch(host, "*.medium.com") ||
        shExpMatch(host, "*.quora.com") ||
        shExpMatch(host, "*.pinterest.com") ||
        shExpMatch(host, "*.formspree.io") ||
        shExpMatch(host, "*.web3forms.com")) {
        return "SOCKS5 127.0.0.1:1080";
    }

    // 默认：国外IP走代理，国内直连
    // 简单判断：非.cn域名的走代理
    if (dnsDomainIs(host, ".cn")) {
        return "DIRECT";
    }

    return "SOCKS5 127.0.0.1:1080";
}
