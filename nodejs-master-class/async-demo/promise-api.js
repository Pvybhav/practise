
// const p = Promise.resolve({id: 1, name: "vybhav"});
// p.then(result => console.log(result));

// const p2 = Promise.reject(new Error('reason for error'));
// p2.catch(error => console.log(error.message)); // display error message without callstack

// const promise1 = new Promise((resolve) =>{
//     setTimeout(() =>{
//         console.log("Promise1...");
//         resolve(1);
//     }, 2000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Promise2...");
//         resolve(2);
//     }, 2000);
// });

// Promise.all([promise1, promise2])
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message)); // it will display result after getting all promises completed


// Promise.race([promise1, promise2])
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message)); // whenever the first promise result comes it'll execute

// Async & Await

// getuser
// get repos
// print firstrepo

// console.log('Before')
// async function displayCommits(){
//     try{
//         const user = await getUser(1);
//         const repos = await getRepositories(user.gitHubUsername);
//         const commits = await getCommits(repos[0]);
//         console.log(commits);    
//     }
//     catch(err) {
//         console.log(err.message);
//     }
// }
// displayCommits();
// console.log('After');