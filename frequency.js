function freq(str) {

    const count = {};
	
	//create an object count
    let f = str.toLowerCase();

    console.log(f);
    let item = f.split(" ").join("");

    console.log(item);

    for (let i = 0; i < item.length; i++) {
		//if object doesnt have that character then add it and give a value 1
        if (!count[item[i]]) {
			
            count[item[i]] = 1;
        }
        else {
			//if it already in the object then just add it
            count[item[i]] += 1;
        }
    }
    return count;
}

console.log(freq("Sim Singh"))