function numberToFloat(num: number){
    let result = "";
    while(parseInt(num / 1000 as any) !== 0){
        let n: number | string = num % 1000;
        if(n < 10){
            n = "00" + n;
        }
        else if(n < 100){
            n = "0" + n;
        }
        result = "." + n + result;
        num = parseInt(num / 1000 as any);
    }
    result = num + result;

    return result;
}

function convertDateToString(date: Date){
    return `${date.getDate()} Th${date.getMonth() + 1}, ${date.getFullYear()}`;
}

function compareDateToPast(date: Date){
    const milis = new Date().getTime() - date.getTime();
    if(milis < 1000){
        return "vừa xong";
    }
    const seconds = parseInt(milis / 1000 + "");
    if(seconds < 60){
        return seconds + " giây trước";
    }
    const minus = parseInt(seconds / 60 + "");
    if(minus < 60){
        return minus + " phút trước";
    }
    const hour = parseInt(minus / 60 + "");
    if(hour < 24){
        return hour + " giờ trước";
    }

    return parseInt(hour / 24 + "") + " ngày trước";
}

export { numberToFloat, convertDateToString, compareDateToPast}