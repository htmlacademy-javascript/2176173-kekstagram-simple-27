const getRandomNumber = (a,b) => {
  if (a < 0 || b < 0 || a > b) {
    return NaN;
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};


const compareLength = (str,maxLength) => str.length < maxLength;

const getRandomArrayElement = (array) => array[getRandomNumber(0,array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomArrayElement,compareLength,getRandomNumber,isEscapeKey};
