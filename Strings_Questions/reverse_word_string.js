let str = "Hello Mr Daya Pal";
// output "Pal Daya Mr Hello"

const reverse_a_word = (str) => {
  let rev = "";
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      result += rev + " ";
      rev = '';
    }else {
        rev = str[i] + rev;
    }
  }
  result += rev
  return result
};

console.log(reverse_a_word(str));
