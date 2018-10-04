
// single PROMISE //

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Resolve--> output'); // --> resove for success
//         // reject(new Error('error occured')) // --> reject for error
//     }, 2000);
// });

// promise
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message));





console.log('Before');

// Callback Based Approach //

// getUser(1, (user) => {
//     console.log("USER: ", user);
//     getRepositories(user.github_user_name, (repos) => {
//         console.log("REPOS: ", repos);
//         getCommits(repos, (commits) => {
//             console.log("Commits : ", commits);
//         });
//     });
// });


// Promise Based Approach //
// getUser(1)
//     .then(user => getRepositories(user.github_user_name))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(error => console.log(error.message));

// Async and Await Based Approach

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.github_user_name);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log("ERROR : ", error.message);        
    }
}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log('Reading a user from DataBase....');
            resolve({
                id: id,
                github_user_name: "pvybhav"
            });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Calling GitHub API....  using the username: ", username);
            resolve(["repo-1", "repo-2", "repo-3"]);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Getting commits of repo : ", repo);
            resolve(["commit-1", "commit-2", "commit-3"]);
        }, 2000);
    });
}