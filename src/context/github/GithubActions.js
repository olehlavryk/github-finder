import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseUrl: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})

export const searchUsers = async (text) => {
  try {
    const params = new URLSearchParams({
      q: text
    });

    const response = await axios.get(`/search/users?${params}`);

    return response.data.items;
  } catch (e) {
    console.error(e.message)
  }
}

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);


  return { user: user.data, repos: repos.data }
}