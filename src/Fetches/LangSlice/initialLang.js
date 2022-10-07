export const lang = [
    {
        id: 1,
        name: "Հայերեն",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197516.png",
        code: "am"
    },
    {
        id: 2,
        name: "English",
        flag: "https://cdn-icons-png.flaticon.com/512/323/323310.png",
        code: "en"
    }
]
export const initialLang = function () {
    if (localStorage.hasOwnProperty("lang")) {

        return localStorage.getItem('lang');
    } else {
        localStorage.setItem('lang', 'am')
        return localStorage.getItem('lang');
    }
}


localStorage.getItem("lang") ?? localStorage.setItem('lang', 'am')