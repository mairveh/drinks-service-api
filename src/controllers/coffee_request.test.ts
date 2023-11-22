//Arrange
import request from "supertest";
import { app } from "../app";

describe("Test Coffee API endpoint request", () => {
  test("Get coffee should return default coffee by default", async () => {
    const expectedStatusCode = 200;
    const expectedResponse = {
      drinkType: "Coffee",
      name: "Latte",
    };
    //Act
    const res = await request(app).get("/coffee");
    //Assert
    expect(res.statusCode).toEqual(expectedStatusCode);
    expect(res.body).toEqual(expectedResponse);
  });
  test("Get coffee should return sepcified coffee requested", async () => {
    const expectedStatusCode = 200;
    const expectedResponse = {
      drinkType: "Coffee",
      name: "Espresso",
    };
    //Act
    const res = await request(app)
      .get("/coffee")
      .query({coffeeName: 'Espresso'});
    //Assert
    expect(res.statusCode).toEqual(expectedStatusCode);
    expect(res.body).toEqual(expectedResponse);
  });
});
