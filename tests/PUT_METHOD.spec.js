const {test, expect} = require('@playwright/test')

test('should be able to send a PUT request', async ({request}) => {

    // Construct data
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const postContent = {
        id: 1,
        title: 'Tui la Teo',
        body: 'This is the body',
        userId: 1,
    }
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        data: postContent
    };

    // Send PUT request
    const response = await request.put(url, options);
    const status = response.status();
    const bodyJson = await response.json();

    // Verification
    expect(status).toBe(200);
    const {id, title, body, userId} = bodyJson;
    expect(status).toBe(200);
    expect(id).toBe(postContent.id);
    expect(userId).toBe(postContent.userId);
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);

})