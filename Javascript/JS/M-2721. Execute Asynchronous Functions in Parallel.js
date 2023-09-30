/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  const result = [];
  let counter = 0;

  return new Promise((res, rej) => {
    functions.forEach((fn, i) => {
      fn()
        .then((data) => {
          result[i] = data;
          counter++;
          if (counter === functions.length) res(result);
        })
        .catch((e) => rej(e));
    });
  });
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);
promise.then(console.log); // [42]
