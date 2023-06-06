const lyrics = 'Ami faisa gechi ami faisa gechi maiNkar chipay';
const parts = lyrics.split(' ');
const charectars = lyrics.split('');
// console.log(charectars);

const partial = lyrics.slice(0, 8);
// console.log(partial);

const lines = [
    'Ami',     'faisa',
    'gechi',   'ami',
    'faisa',   'gechi',
    'maiNkar', 'chipay'
  ];
const newSong = lines.join(' ');
console.log(newSong);