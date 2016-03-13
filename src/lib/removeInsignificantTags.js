export default (html) => html
    .replace(/<head[\s\S]*?<\/head>/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/g, '');
