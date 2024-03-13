import { Main } from '../utils/githubResponse';

export const getRepositories = async () => {
    
    let localRepositories: { repos: Main[], expired: number };
    
    await fetch('https://api.github.com/users/rijalBinHusen/repos', { cache: 'force-cache' })
    .then(response => response.json())
    .then(data => {
        let gotRepositories = {
            repos: data,
            expired: new Date().getTime() + 86400000
        }
        localRepositories = gotRepositories
    })
    .catch(err => console.error(err));
        
    return localRepositories.repos.sort(function (a, b) {
        // return a?.pushed_at - b?.pushed_at;
        let x = a.pushed_at;
        let y = b.pushed_at;
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });

}