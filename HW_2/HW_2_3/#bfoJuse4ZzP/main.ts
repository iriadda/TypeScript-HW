
function stringToArray(str:string):string[] {
   if (str){
       return (str.split(' '));
   }
}
console.log(stringToArray(`Ревуть воли як ясла повні`));