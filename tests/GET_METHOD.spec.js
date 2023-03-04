const {test, expect} = require("@playwright/test")

test('should be able to send a GET method request', async ({request}) => {
    // Send GET request
    let response = await request.get("https://jsonplaceholder.typicode.com/posts")

    // Extract response data
    const status = response.status()
    const jsonResponse = await response.json()
    let randomIndex = Math.floor(Math.random() * jsonResponse.length)
    const randomPost = jsonResponse[randomIndex]

    // Verification
    expect(status).toBe(200)
    expect(jsonResponse.length).toBeGreaterThan(1)
    const {userId, id, title, body} = randomPost
    expect(userId).toBeTruthy()
    expect(id).toBeTruthy()
    expect(title).toBeTruthy()
    expect(body).toBeTruthy()

});


