function capword(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
    //console.log(arritems.length);
    // for (let i = 0; i < arritems.length; i++) {
    //     console.log(arritems[0].toUpperCase());
    // }
	
	//capitalize first character
}

function titlecase(str) {
    const arritems = str.split(" ");
	//will split each word
    const capsentence = arritems.map(w => capword(w));
    //map function is used to iterate over each elment
    return capsentence.join(" ");
	//join will join with spaces
}

console.log(capword("sleep"));
console.log(titlecase("sleep well good night"));