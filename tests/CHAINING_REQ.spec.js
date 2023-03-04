/*
* Get authen token > Create order > Read order details > Update order > Delete Order || CRUD
*
* */

const {test, expect} = require('@playwright/test')

test('should be able to perform CRUD on post type', async ({request}) => {

    // Construct data
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const postContent = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    const putContent = {
        title: 'Tui la Teo',
        body: 'This is the body',
        userId: 1,
    }
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    }
    const postOptions = {
        headers: headers,
        data: postContent
    }
    const putOptions = {
        headers: headers,
        data: putContent
    }

    // Create a post
    const postRes = await request.post(baseUrl + '/posts', postOptions);
    const postJsonBody = await postRes.json();
    let postId = postJsonBody.id; // 101
    postId = Number(postId) - 1; // 100
    // TODO: Verification

    // Reuse the post ID to read the details
    const getRes = await request.get(`${baseUrl}/posts/${postId}`);
    const getJsonBody = await getRes.json();
    // TODO: Verification

    // Update the post details
    const putRes = await request.put(`${baseUrl}/posts/${postId}`, putOptions);
    // TODO: Verification

    // Delete the post
    const deleteRes = await request.delete(`${baseUrl}/posts/${postId}`);
    // TODO: Verification
})