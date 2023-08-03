function panic(str) {
    const arrayitems = str.split(' ');
    //split function converts string into array
    console.log(arrayitems);
    console.log(arrayitems.join(' :) ').toUpperCase() + "!");

}

panic("My home is very far away");

