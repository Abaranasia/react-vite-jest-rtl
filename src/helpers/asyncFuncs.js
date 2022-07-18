export const promiseFunc = (request) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  if (request) {
    resolve (`take your ${request} back`)
  }else
    reject ("Request could not be satisfied :(")
    }, 1000);

  })
};

export const asyncFunc = (request) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (request) {
    resolve (`take your ${request} back`)
  }else
    reject ("Request could not be satisfied :(")
    }, 1000);

  })
}