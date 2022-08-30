export function getCategories(obj: any, lastEl: string) {
  let arr: string[] = [];

  function getCategoriesArr(obj: any, lastEl: string) {
    for (let i in obj) {
      if (obj.hasOwnProperty(lastEl)) {
        if (Array.isArray(obj[lastEl])) {
          arr = [...obj[lastEl]];
          arr.shift();
          return;
        } else {
          arr = Object.keys(obj[lastEl]);
          return;
        }
      }
      if (typeof obj[i] === "object") {
        getCategoriesArr(obj[i], lastEl);
      }
    }
  }
  getCategoriesArr(obj, lastEl);

  return arr;
}
