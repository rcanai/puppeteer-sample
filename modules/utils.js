const removeStr = (str) => {
  str.replace('\?', '');
  str.replace('\!', '');
  str.replace('\ ', '');
  return str;
};

module.exports = {
  removeStr
};
