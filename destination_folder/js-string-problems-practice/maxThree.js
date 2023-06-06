const jim = 84;
const dela = 99;
const chinku = 77;
if(jim > dela && jim > chinku) {
    console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('dela will get the cake');
}
else{
    console.log('chinku will get the cake');
}
function min(a,b,c){
    if(a < b && a < c) {
        console.log(a);
    }
    else if(b < a && b < c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

function x(a, b, c){
    return console.log(Math.max(a,b,c));
}
function xx(a, b, c){
    return console.log(Math.min(a,b,c));
}
min(jim, dela, chinku);
x(jim, dela, chinku);
xx(jim, dela, chinku);