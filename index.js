console.log('Before');

getUser(1 , (user) => {
    
    getRepo(user.gitUserName, (repo) => {
        console.log('Repos:',repo);
    });
});

console.log('After');

function getUser(id , callback){
    setTimeout(() => {
        console.log('reading user from database ...'); 
        callback({id:id , gitUserName : 'Arham'});
    }, 2000);
}

function getRepo(username,callback){
    setTimeout(() => {
        console.log('Calling GitHub API');
    }, 2000);
    callback(['repo1' , 'repo2' , 'repo3']);
}