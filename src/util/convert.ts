function numberToFloat(num: number){
    let result = "";
    while(parseInt(num / 1000 as any) !== 0){
        result = "." + (num % 1000) + result;
        num = parseInt(num / 1000 as any);
    }
    result = num + result;

    return result;
}

function convertDateToString(date: Date){
    return `${date.getDate()} Th${date.getMonth() + 1}, ${date.getFullYear()}`;
}

export { numberToFloat, convertDateToString}