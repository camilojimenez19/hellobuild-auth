import { useEffect, useState } from "react";
import gitHubAPI from "../api/githubAPI";
import { useAuth } from "../context/AuthContex";

export const useRepository = (search, setSearch) => {

    const { tokenGitHub, signInWithGithub } = useAuth();
    
    const [dataRepositories, setDataRepositories] = useState({
        owner: [],
        favorites: [],
        filtered: []
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

    /* Handle for add repo from favorites */
    const handleAddRepoToFavorites = (index) => {
        setSearch('');
        const [repo] = dataRepositories.owner.splice(index, 1);
        setDataRepositories({
            ...dataRepositories,
            favorites: [...dataRepositories.favorites, repo] 
        });
    }

    /* Handle for remove repo from favorites */
    const handleRemoveRepoToFavorites = (index) => {
        setSearch('');
        const [repo] = dataRepositories.favorites.splice(index, 1);
        setDataRepositories({
            ...dataRepositories,
            owner: [...dataRepositories.owner, repo],
        });
    }

    /* Handle for sigin with github */
    const handleSignInGitHub = async () => {
        const token = await signInWithGithub();
        getRepositoriesGitHub(token);
    }

    const searchRepo = () => {
        if(search){
            const findRepos = dataRepositories.owner.filter((repo) => repo.name.includes(search));
            setDataRepositories({
                ...dataRepositories,
                filtered: findRepos,
            })
        }else{
            setDataRepositories({
                ...dataRepositories,
                filtered: [],
            })
        }
    }    

    useEffect(() => {
        if (tokenGitHub) {
            getRepositoriesGitHub();
        }
    }, []);

    useEffect(() => {
        searchRepo();
    }, [search])
    


    return {
        tokenGitHub,
        dataRepositories,
        handleSignInGitHub,
        handleRemoveRepoToFavorites,
        handleAddRepoToFavorites
    }
}
