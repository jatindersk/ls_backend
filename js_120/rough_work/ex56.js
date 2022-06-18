let funcObj = {
  returnLength() {
    return this.str.length;
  }
};

let obj = {
  str: 'Milky Way',
};

obj.returnLength = funcObj.returnLength;
console.log(obj.returnLength());