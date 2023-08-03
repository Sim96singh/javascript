function whisper(str) {
    if (str.charAt(str.length - 1) == "!") {
        //console.log(str.slice(0, -1));

        console.log("shh...." + str.substring(0, str.length - 1).toLowerCase());
    }
}

whisper("Good morning!");