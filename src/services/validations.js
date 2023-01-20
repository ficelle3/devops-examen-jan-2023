// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;

const isValidGamerTag = (gamerTag) => {
	if(gamerTag.length < 8)return false;
	const contains1Number = /[0-9]/g;
	if(!gamerTag.match(contains1Number))return false;
const contains1SpecialCharacter = /[\+\\\-\*\/\%\?\.\:\<\>\~\^\¨\€\$\[\]\(\)\{\}\#\@\&]/;
	if(!gamerTag.match(contains1SpecialCharacter))return false;
	return true;
};

exports.isValidGamerTag = isValidGamerTag;
