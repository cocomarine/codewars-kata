function XO(str) {
    str = Array.from(str.toLowerCase());
    return str.filter(i => i === 'x').length === str.filter(i => i === 'o').length;
  }