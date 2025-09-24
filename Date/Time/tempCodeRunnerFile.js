let datee = new Date()
let yer = String(datee.getFullYear());
let mnth = String(datee.getMonth()+1).padStart(2, '0');
let day = String(datee.getDate()).padStart(2, '0');

let ans = `${day}-${mnth}-${yer}`
console.log(ans);