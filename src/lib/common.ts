import { unescape } from "querystring";

export const decode = (encodedStr:string) => {
    try {
        return decodeURIComponent(decodeURI(encodedStr));
    } catch (error) {
        console.log(error, encodedStr);
        return unescape(decodeURI(encodedStr));
    }
}

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const leftPad = (idx:number) => {
    if(idx > 9) return `${idx}`;
    else return `0${idx}`;
}

export const shuffle = (arr:string[]) => {
    return arr.sort(() => Math.random() - 0.5);
}