import { Octokit } from "octokit";

const gitHubAPI = (gitHubToken) => {

    return new Octokit({
        auth: gitHubToken
    })
}

export default gitHubAPI;