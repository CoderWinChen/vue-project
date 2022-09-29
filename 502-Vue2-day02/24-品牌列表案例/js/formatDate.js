function formate(date){
    let year = pandZero(date.getFullYear());
    let month = pandZero(date.getMonth() + 1);
    let day = pandZero(date.getDate());
    let hour = pandZero(date.getHours())
    let minutes = pandZero(date.getMinutes())
    let second = pandZero(date.getSeconds())
    return `${year}年${month}月${day}日 ${hour}:${minutes}:${second}`
}

function pandZero(n) {
    return n < 10 ? '0' + n : n
}
