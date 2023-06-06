function greetings(greetingsHandler, b){
    greetingsHandler(b);
}

function greetingsHandler(name){
    console.log('Ki khobor', name);
}

function greetEvening(name){
    console.log('good evening', name);
}

greetings(greetingsHandler, 'kuddus');
greetings(greetingsHandler, 'kalachan');
greetings(greetingsHandler, 'kholil mamu');
greetings(greetEvening, 'chacha chandu');