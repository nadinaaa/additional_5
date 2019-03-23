function isEven (str) {
  if(str.length % 2 != 0) {
    return false;
  }
  return true;
}
function simplify (str, config) {
	for( var i=str.length-1; i>=0; i--) {
		for(var j=0; j<config.length; j++) {
			if(str.charAt(i) == config[j][0]) {
				var same = config[j].join('');
				str = str.replace(same,'');
			}
		}
	}
	return str;
}
function isEmpty (str) {
	if(str.length == 0) {
	return true;
}
return false;
}

module.exports = function check(str, bracketsConfig) {

if(isEven(str) == false) {
  return false;
}
str = simplify(str, bracketsConfig);
return isEmpty(str);

}
