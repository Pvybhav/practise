// Before
// After
// Reading a user from DataBase....
// Calling GitHub API....using the username: pvybhav
// F: \udemy\ practise\ nodejs - master - class\ async -demo\ Async - without - callback - hell.js: 24
// callback(["repo-1", "repo-2", "repo-3"]); ^

// TypeError: callback is not a
// function
// at Timeout.setTimeout(F: \udemy\ practise\ nodejs - master - class\ async -demo\ Async - without - callback - hell.js: 24: 9)
// at tryOnTimeout(timers.js: 232: 11)
// at Timer.listOnTimeout(timers.js: 202: 5)

console.log('Before');

getUser(1, getRepositories);
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from DataBase....');
        callback({
            id: id,
            github_user_name: "pvybhav"
        });
    }, 2000);
}

function getRepositories(user) {
    console.log("USER: ", user.github_user_name);
    getRepositories(user.github_user_name, getCommits);
}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API....  using the username: ", user.github_user_name);
        callback(["repo-1", "repo-2", "repo-3"]);
    }, 2000);
}

function getCommits(repos) {
    console.log("REPOS: ", repos);
    getCommits(repos, displayCommits);
}

function getCommits(repos, callback) {
    setTimeout(() => {
        console.log("Getting commits of repo : ", repos[0]);
        callback(["commit-1", "commit-2", "commit-3"]);
    }, 2000);
}

function displayCommits(commits) {
    console.log(commits);
}
