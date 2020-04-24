const fetch = require("node-fetch");

async function getContent() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=zOo3dMwTVU2F039jljNCfbowWVnMjRvYAqEIWBv8';
    const response = await fetch(url);
    const json = await response.json();
    const data = JSON.stringify(json);
    const html = "<div>" + data + "</div>";
    console.log(html);
    return html;
};

module.exports = getContent;