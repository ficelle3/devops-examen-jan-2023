// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;

const isValidGamerTag = (gamerTag) => {

	if(gamerTag.length < 8)return false; //gamer tag isn't valid if it contains less than 8 characters

	const contains1Number = /[0-9]/g; //match any number between 0 and 9
	if(!gamerTag.match(contains1Number))return false; // if there is at least one match, gamer tag is valid

	const contains1SpecialCharacter = /[\+\\\-\*\/\%\?\.\:\<\>\~\^\¨\€\$\[\]\(\)\{\}\#\@\&]/; //match these special characters : +\-*/%?.:<>~^¨€$[]{}()#@&
	if(!gamerTag.match(contains1SpecialCharacter))return false; // if there is at least one match, gamer tag is valid

	return true;
};

exports.isValidGamerTag = isValidGamerTag;


































































/*

⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛⬜⬜⬜⬜⬜⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜⬜⬜⬜⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬜⬛⬛⬛⬜⬛⬜⬜⬛⬜⬛⬛⬛⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬜⬜⬛⬜⬛⬛⬛⬜⬛
⬛⬜⬛⬛⬛⬜⬛⬜⬛⬛⬛⬛⬜⬜⬜⬛⬜⬜⬛⬜⬛⬛⬛⬜⬛
⬛⬜⬜⬜⬜⬜⬛⬜⬜⬛⬜⬜⬛⬛⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜
⬛⬛⬛⬛⬜⬜⬛⬜⬛⬜⬜⬜⬛⬜⬛⬜⬛⬛⬜⬜⬛⬛⬛⬜⬛
⬜⬜⬜⬜⬛⬜⬜⬛⬜⬛⬜⬜⬜⬜⬛⬜⬛⬜⬜⬛⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜
⬜⬛⬛⬛⬛⬜⬜⬛⬜⬜⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜
⬜⬜⬛⬜⬜⬛⬛⬜⬜⬛⬜⬜⬛⬛⬜⬛⬜⬛⬛⬛⬛⬜⬛⬛⬛
⬜⬜⬜⬜⬛⬛⬜⬜⬛⬛⬛⬜⬛⬜⬜⬛⬛⬜⬛⬛⬛⬜⬜⬜⬛
⬜⬛⬜⬛⬜⬜⬛⬛⬜⬜⬜⬜⬜⬛⬛⬜⬛⬛⬜⬜⬛⬜⬛⬛⬜
⬛⬜⬛⬛⬛⬜⬜⬜⬛⬛⬜⬜⬛⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜⬛
⬜⬜⬜⬛⬛⬛⬛⬜⬜⬛⬜⬜⬛⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬜⬜⬛⬛⬛⬜⬛⬜⬜⬜⬛⬜⬛⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬛⬜⬜⬜⬛⬜⬛⬜⬜⬜⬛⬜⬜⬜⬛⬜⬜⬛⬜
⬛⬜⬛⬛⬛⬜⬛⬜⬜⬛⬛⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬜⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬛⬜⬜⬛⬛⬜⬛⬛⬛⬛⬛
⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬜⬛⬛⬜⬛⬛⬜⬜⬛⬜⬛⬜⬛⬛⬜
⬛⬜⬜⬜⬜⬜⬛⬜⬛⬜⬜⬛⬛⬛⬛⬛⬜⬛⬜⬜⬛⬜⬛⬜⬜
⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛⬛⬛⬛⬛⬛
*/