export const promiseFunc = (request) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (request) {
        resolve(`take your ${request} back`)
      } else
        reject("Request could not be satisfied :(")
    }, 1000);

  })
};

export const asyncFunc = async () => {

  try {
    const resp = await fetch('https://reqres.in/api/users?page=2')
    const { data } = await resp.json();
    // console.log(data)
    return data

  } catch (error) {
    console.log(error)
    return ("data not reachable")
  }

}
