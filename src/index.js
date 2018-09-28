module.exports = function check(str, bracketsConfig) {
  let opening = {
    '[': ']',
    '{': '}',
    '(': ')',
    '<': '>',
    '|': '|',
  };

  let open = 0, close = 0;

  for(let i = 0; i < str.length; i++){
    let c = str[i];
    if(opening[c]){
      open++;
    } else {
      close++;
    }

    if(open < close){
      return false;
    }
  }

  if(open != close){
    return false;
  }
  return true;
}

