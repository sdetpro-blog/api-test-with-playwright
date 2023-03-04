const {test, expect} = require('@playwright/test');

test('should be able to send a delete request', async ({request}) => {
    // Construct the data
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Send DELETE request
    const response = await request.delete(url);

    // Verify the response
    expect(response.status()).toBe(200);
})