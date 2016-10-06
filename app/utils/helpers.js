import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = "ef41fe7af19ab139b78d9e5e7c7fff9e0c3e28d4";

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

// var promisObj = getRepos('flowkater');
// promisObj.then(function(data){
//   console.log(data);
// });

export default function getGithubInfo(username){
  return axios.all([getRepos(username), getUserInfo(username)])
  .then((arr) => ({repos: arr[0].data, bio: arr[1].data}));
}
