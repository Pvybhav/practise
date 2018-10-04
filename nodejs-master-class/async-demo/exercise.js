// using CALLBACKs //

// console.log('Before');

// const getCustomer = (id, callback) => {
//     setTimeout(() => {
//         callback({
//             id: id,
//             email: 'vybhav@gmail.com',
//             isGold: true
//         });
//     }, 2000);
// };

// getCustomer(1, (customer) => {
//     if (customer.isGold) getTopMovies(customer, (movies) => {
//         console.log("Top Movies : ", movies);
//         sendEmail(customer.email);
//     });
// });

// const getTopMovies = (customer, callback) => {
//     callback(['Movie-1', 'Movie-2', 'Movie-3']);
// };

// const sendEmail = (emailID) => {
//     console.log("sent mail to : ", emailID);
// };

// console.log('After');


// using Promises

console.log('Before');

const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1);
    }, 3000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(2);
    }, 2000);
})
p
    .then(result => console.log(result))
    .catch(err => console.log("ERROR : ", err.message));

console.log('After');