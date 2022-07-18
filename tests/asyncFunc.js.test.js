import { promiseFunc, asyncFunc } from "../src/helpers/asyncFuncs";

describe('Basic Async tests', () => {

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