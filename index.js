// module.exports = function removeSpace(string) {
//     if (typeof string !== "string") throw new TypeError("Not a string!");
//     return string.replace(/\s/g, "");
//   };

//   export default class DateUtils {
//        DateTest(params) {

//         console.log("DateTest");
//     }
//   }


class Utils {
  removeSpace(string) {
    if (typeof string !== "string") throw new TypeError("Not a string!");
    return string.replace(/\s/g, "");
  };


  test2() {
    console.log("test2");
  }
}

module.exports = Utils;