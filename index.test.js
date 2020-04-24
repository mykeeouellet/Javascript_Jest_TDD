const getContent = require('./index');

describe('getContent', () => {
    it('can fetch', async() => {
        response = await getContent("https://api.nasa.gov/planetary/apod?api_key=zOo3dMwTVU2F039jljNCfbowWVnMjRvYAqEIWBv8");
        expect(response).toContain("title");
    })
});
