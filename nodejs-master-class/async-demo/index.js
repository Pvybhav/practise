

// Asynchronous --> with CALLBACK HELL //

// console.log('Before');

// getUser(1, (user) => {
//     console.log("USER: ", user);
//     getRepositories(user.github_user_name, (repos) => {
//         console.log("REPOS: ", repos);
//         getCommits(repos, (commits) => {
//             console.log("Commits : ", commits);
//         });
//     });
// });
// console.log('After');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from DataBase....');
//         callback({
//             id: id,
//             github_user_name: "pvybhav"
//         });
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log("Calling GitHub API....  using the username: ", username);
//         callback(["repo-1", "repo-2", "repo-3"]);
//     }, 2000);
// }

// function getCommits(repos, callback) {
//     setTimeout(() => {
//         console.log("Getting commits of repo : ", repos[0]);
//         callback(["commit-1", "commit-2", "commit-3"]);
//     }, 2000);
// }


// Synchronous
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.name);
// const commits = getCommits(repos[0]);
// console.log('After');





// PROMISES

// promises holds the eventual result of an asynchronous operation

console.log('Before');

// getUser(1, (user) => {
//     console.log("USER: ", user);
//     getRepositories(user.github_user_name, (repos) => {
//         console.log("REPOS: ", repos);
//         getCommits(repos, (commits) => {
//             console.log("Commits : ", commits);
//         });
//     });
// });

getUser(1)
    .then(user => getRepositories(user.github_user_name))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log("Commits: ", commits))
    .catch(err => console.log("ERROR : ", err.message));

console.log('After');

function getUser(id) {

    return(new Promise((resolve) =>{
        setTimeout(() => {
            console.log('Reading a user from DataBase....');
            resolve({
                id: id,
                github_user_name: "pvybhav"
            });
        }, 2000);
    }))
}

function getRepositories(username) {
    return(new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Calling GitHub API....  using the username: ", username);
            resolve(["repo-1", "repo-2", "repo-3"]);
        }, 2000);
    }));
}

function getCommits(repo) {
    return(new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Getting commits of repo : ", repo);
            resolve(["commit-1", "commit-2", "commit-3"]);
        }, 2000);
    }));
}