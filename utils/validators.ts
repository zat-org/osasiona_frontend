export const required = (errMessage: string = ""): Function => {
    return (val: string) => {
        if (val === null || val.trim().length === 0) {
            return errMessage ? errMessage : "هذا الحقل مطلوب"
        }
        return null;
    }
}
export const email = (errMessage: string = ""): Function => {
    return (val: string) => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (val === null || val.trim().length === 0 || !val.match(validRegex)) {
            return errMessage ? errMessage : "برجاء ادخال بريد الكتروني صحيح"
        }
        return null;
    }
}
export const validate = (validators: Function[], value: string) => {
    return validators.reduce<string[]>((acc, fn) => {
        let res = fn(value)
        if (res) acc.push(res);
        return acc;
    }, [])
}




