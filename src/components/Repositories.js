import React from "react";
import { Alert } from '../components/Alert'
import { ButtonGithub } from "./ButtonGithub";
import { ListRepositories } from "./ListRepositories";
import { useRepository } from "../hooks/useRepository";

export const Repositories = ({ search, setSearch }) => {

  /* Custom hook */
  const {
    tokenGitHub,
    favoriteRepos,
    searchResults,
    handleSignInGitHub,
    handleRemoveRepoToFavorites,
    handleAddRepoToFavorites
  } = useRepository(search, setSearch);

  /* Render content when user is not logged in GitHub */
  if (!tokenGitHub)
    return (
      <div className="container mt-5">
        <Alert message={'We need to access your github account'} />
        {/* GitHub Button */}
        <ButtonGithub onClick={handleSignInGitHub} />
      </div>
    )

  return (
    <div className="container mt-5" >
      <h1 className="mb-4"> Repositories </h1>

      {favoriteRepos.length > 0 && (
        <section>
          <h3>Favorite repositories</h3>
          <hr />
          <ListRepositories repositories={favoriteRepos} action={handleRemoveRepoToFavorites} removeRepo />

        </section>
      )}

      <section>
        <h3>Own repositories</h3>
        <hr />
        <ListRepositories
          repositories={searchResults}
          action={handleAddRepoToFavorites}
        />
      </section>
    </div>
  );
};