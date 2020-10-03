export const getDate = ()=>{
  const today = new Date();

const yy = today.getFullYear();
const mm = today.getMonth() + 1;
const day = today.getDate();
const dd = day < 10 ? '0' + day : day;
const res = `${ yy }-${ mm }-${dd}`;

console.log(res)
return res;  
}

