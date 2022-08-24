import { useEffect, useState } from "react";
import gitHubAPI from "../api/githubAPI";
import { useAuth } from "../context/AuthContex";

export const useRepository = () => {
    const { tokenGitHub, signInWithGithub } = useAuth();
    const [dataRepositories, setDataRepositories] = useState({
        owner: [],
        favorites: []
    })

    const getRepositoriesGitHub = async (tokenAPI) => {
        const token = tokenGitHub || tokenAPI;
        const octokit = gitHubAPI(token);
        const repositories = await octokit.request('GET /user/repos', {})
        setDataRepositories({
            ...dataRepositories,
            owner: repositories.data
        })
    }

    const handleAddRepoToFavorites = (index) => {
        const [repo] = dataRepositories.owner.splice(index, 1);
        setDataRepositories({
            ...dataRepositories,
            favorites: [...dataRepositories.favorites, repo],
        })

    }

    /* Handle for remove repo from favorites */
    const handleRemoveRepoToFavorites = (index) => {
        const [repo] = dataRepositories.favorites.splice(index, 1);
        setDataRepositories({
            ...dataRepositories,
            owner: [...dataRepositories.owner, repo],
        })
    }

    /* Handle for sigin with github */
    const handleSignInGitHub = async () => {
        const token = await signInWithGithub();
        getRepositoriesGitHub(token);
    }

    useEffect(() => {
        if (tokenGitHub) {
            getRepositoriesGitHub();
        }
    }, []);


    return {
        tokenGitHub,
        dataRepositories,
        handleSignInGitHub,
        handleRemoveRepoToFavorites,
        handleAddRepoToFavorites
    }
}
