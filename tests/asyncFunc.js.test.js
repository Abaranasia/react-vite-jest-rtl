
import { promiseFunc, asyncFunc } from "../src/helpers/asyncFuncs";


describe('Basic promise tests', () => {

  test('should not fail', (done) => {
    const request = "data";

    promiseFunc(request)
      .then(result => {
        expect(result).toEqual(`take your ${request} back`);
        done()
      }
      );
  });

  test('should fail', (done) => {
    promiseFunc()
      .catch(error => {
        expect(error).toEqual("Request could not be satisfied :(")
        done()
      });
  });
});

describe('Basic async tests', () => {

  test('should not fail', async () => {
    const data = await asyncFunc();
    console.log("TEST: ", data)
    expect(typeof data).toBe("object")
  });
})