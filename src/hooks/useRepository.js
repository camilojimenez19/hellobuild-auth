import { useEffect, useRef, useState } from "react";
import gitHubAPI from "../api/githubAPI";
import { useAuth } from "../context/AuthContex";

export const useRepository = (search, setSearch) => {

    const { tokenGitHub, signInWithGithub } = useAuth();

    const [dataRepos, setDataRepos] = useState([])
    const [favoriteRepos, setFavoriteReposDataRepos] = useState([])
    const [searchResults, setSearchResults] = useState([])


    const getRepositoriesGitHub = async (tokenAPI) => {
        const token = tokenGitHub || tokenAPI;
        const octokit = gitHubAPI(token);
        const repositories = await octokit.request('GET /user/repos', {})

        setDataRepos(repositories.data);
        setSearchResults(repositories.data)
    }

    /* Handle for add repo from favorites */
    const handleAddRepoToFavorites = (id) => {
        
        const [existInFavorites] = favoriteRepos.filter( repo => repo.id === id);

        if(!existInFavorites){
            const [repo] = searchResults.filter( repo => repo.id === id);            
            setFavoriteReposDataRepos([
                ...favoriteRepos,
                repo
            ])

        }
    }

    /* Handle for remove repo from favorites */
    const handleRemoveRepoToFavorites = (id) => {
        const index = favoriteRepos.findIndex(repo => repo.id === id);
        const [repo] = favoriteRepos.splice(index, 1);

        setFavoriteReposDataRepos([
            ...favoriteRepos
        ]);
    }

    /* Handle for sigin with github */
    const handleSignInGitHub = async () => {
        const token = await signInWithGithub();
        getRepositoriesGitHub(token);
    }

    const searchRepo = () => {
        const findRepos = dataRepos.filter((repo) => repo.name.toLowerCase().includes(search));
        setSearchResults(findRepos)
    }

    useEffect(() => {
        if (tokenGitHub) {
            getRepositoriesGitHub();
        }
    }, [])

    useEffect(() => {
        searchRepo();
    }, [search])



    return {
        tokenGitHub,
        dataRepos,
        favoriteRepos,
        searchResults,
        handleSignInGitHub,
        handleRemoveRepoToFavorites,
        handleAddRepoToFavorites
    }
}
