export const getDate = ()=>{
  const today = new Date();

const yy = today.getFullYear();
const mm = today.getMonth() + 1;
const dd = today.getDate();
const res = `${ yy }-${ mm }-${dd}`;

console.log(res)
return res;  
}

