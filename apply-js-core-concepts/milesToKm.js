function milesToKm(para){
    let km = para / 1.60934;
    km = km.toFixed(2);
    km = parseFloat(km)
    return km;
}
console.log(milesToKm(2));