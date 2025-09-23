// let mydate = new Date()
// console.log(typeof mydate);


// let mycre = new Date(2025, 0, 23)
// let mycre = new Date(2025, 0, 23)
// let mycre = new Date("2025-09-06")
// console.log(mycre.toString());

// let myTimestamp = Date.now()
// console.log(Math.floor(myTimestamp/1000));

// let newDtae = new Date().getTime()
// console.log(newDtae.toLocaleString());



// Get the current date and time.
// const currentDate = new Date();    
// const datee = currentDate.toLocaleDateString()
// const timee = currentDate.toLocaleTimeString()
// const dt = currentDate.toLocaleString()
// console.log(dt);



// Get only the current year.
// const currentyear = new Date()
// const yer = currentyear.getFullYear()
// console.log(yer);



// Get only the current month (0-11).
// const monthh = new Date()
// const currentmonth = monthh.getMonth()
// console.log(currentmonth);


// Get the current date (1-31).
// Get the current day of the week (0-6).
// const datee = new Date()
// const currentdatee = datee.getDate() 
// const currentweek = datee.getDay().toString()
// console.log(currentdatee, currentweek);



// Get the current hour (0-23).
// const hour = new Date()
// const currenthour = hour.getHours()
// console.log(currenthour);



// Get the current minutes and seconds.
//  const min = new Date()
// const currentmin = min.getMinutes()
// const currentsec = min.getSeconds()
// console.log(currentmin, currentsec);




// Format the current date as DD-MM-YYYY.
// let datee = new Date()
// let day = String(datee.getDate()).padStart(2, '0');
// let mnth = String(datee.getMonth()+1).padStart(2, '0');
// let yer = String(datee.getFullYear());

// let ans = `${day}-${mnth}-${yer}`
// console.log(ans);



// Format the current date as YYYY/MM/DD.
// let datee = new Date()
// let yer = String(datee.getFullYear());
// let mnth = String(datee.getMonth()+1).padStart(2, '0');
// let day = String(datee.getDate()).padStart(2, '0');

// let ans = `${yer}-${mnth}-${day}`
// console.log(ans);



// Display a full timestamp like September 20, 2025, 10:30 AM.
// let datee = new Date()
// let month = datee.toLocaleString('defalt',{month:'long'});
// let yer = String(datee.getFullYear());
// let day = String(datee.getDate()).padStart(2, '0');
// let timee = String(datee.getTime())

// console.log(`${month}, ${day}, ${yer} ${timee}`);

