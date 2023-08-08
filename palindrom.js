function palindrom(str) {

    let eachitem = str.split("");
    let reverseditem = eachitem.reverse();
    console.log(reverseditem);
    let final = reverseditem.join("");
    if (final === str) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}




palindrom("simpy");