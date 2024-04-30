export  function storageUrl() {
    return `${rootUrl()}/static/`;
};

export function rootUrl() {
    let port = process.env.PORT || 3000;
    let domain = process.env.DOMAIN || 'localhost';
    let protocol = process.env.PROTOCOL || 'http';
    return `${protocol}://${domain}:${port}`
}