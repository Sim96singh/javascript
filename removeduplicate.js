function removeduplicate(chars) {
    let str = "";
    for (let i = 0; i < chars.length; i++) {
        if (!str.includes(chars[i])) {
            str = str + chars[i];
        }

    }
    console.log(str);
}

removeduplicate("ffghhhfhfja");