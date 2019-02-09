module.exports = function removeSpace(string) {
    if (typeof string !== "string") throw new TypeError("Not a string!");
    return string.replace(/\s/g, "");
  };

