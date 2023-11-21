//Arrange

import request from 'supertest'
import {app} from '../app'

describe('Test Coffee API endpoint request', () => {
  const expectedStatusCode = 200
  const expectedResponse = {
    drinkType: "Coffee",
    name: "Latte",
  };
  //Act
  test('Get coffee should return correct object', async () => {
    const res = await request(app).get("/coffee").query("{coffeeName: latte")
    //Assert
    expect(res.statusCode).toEqual(expectedStatusCode)
    expect(res.body).toEqual(expectedResponse)
  })
})
