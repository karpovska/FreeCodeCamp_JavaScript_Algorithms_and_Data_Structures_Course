function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp))
        console.log(obj[checkProp]);
    else
        console.log("Not found");
    console.log("finished");
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
console.log("finished");