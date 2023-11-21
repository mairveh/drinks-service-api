//Arrange
import request from 'supertest'
import {app} from '../app'

describe ('Test Home API endpoint request', () => {
    test('GET should return correct message', async () => {
        const expectedStatusCode = 200
        const expectedText = 'Welcome to the Drinks API!'
//Act
        const res = await request(app).get('/')
//Assert
        expect(res.statusCode).toEqual(expectedStatusCode);
        expect(res.text).toEqual(expectedText)
    })
})
describe ('Test Coffee Lover API endpoint request', () => {
    test('GET should return the correct coffe lover message', async() => {
        const expectedStatusCode = 200
        const expectedText = 'I like coffee!'
//Act
        const res = await request(app).get('/coffeelover')
//Assert
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual(expectedText)
    })
}
)