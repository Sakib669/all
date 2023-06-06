const zero = document.getElementById('zero');
let zeroValue = displayFromLocalStorage();
 
const setLocalStorage = (count) => {
    localStorage.setItem('count', count)
   }
   
document.getElementById('btn-add').addEventListener('click', () => {
   let count = zeroValue++;
   zero.innerText = count;
   setLocalStorage(count);
});

function displayFromLocalStorage(){
   const z = 0;
   const v = localStorage.getItem('count')
   if(v){
      zero.innerText = v;
      return v;
   }
   zero.innerText = z;
   return z;
};

displayFromLocalStorage();