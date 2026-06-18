var HTTP_PROXY = "192.168.1.54:1818"
var SOCKs_PROXY = "localhost:8080"

/**
 * 返回示例：
 *      直连 - DIRECT
 *  HTTP代理 - PROXY 172.0.0.1:8080
 * SOCKS代理 - SOCKS 172.0.0.1:1080
 *  组合指令 - PROXY 172.0.0.1:8080;SOCKS 172.0.0.1:1080;DIRECT
 * 
 * @param {string} url
 * @param {string} host
 * @returns {'DIRECT' | string}
 */
function FindProxyForURL(url, host) {
    if (isPlainHostName(host) || dnsDomainls(host, ".local") || isInNet(host, "192.168.0.0", "255.255.0.0")) {
        return "DIRECT"
    }
    return "PROXY " + HTTP_PROXY + ";DIRECT"
}
