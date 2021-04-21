import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  //<App/> is passed as children

  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  //request loading
  const [requests, setRequest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({ show: false, msg: '' });

  const searchUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      //repos
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(res=>
        setRepos(res.data)
      );

      //followers
      axios(`${followers_url}?per_page=100`).then(res=>setFollowers(res.data));

    } else {
      toggleError(true, 'there is no user with this name');
    }
    checkRequest();
    setIsLoading(false);
  };
  //check rate
  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequest(remaining);
        if (remaining === 0) {
          //throw an error
          toggleError(true, 'Sorry! you exceeded your limit');
        }
      })
      .catch((err) => console.log(err));
  };

  //errors
  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  useEffect(checkRequest, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
