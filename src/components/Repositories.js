import React from "react";
import { Alert } from '../components/Alert'
import { ButtonGithub } from "./ButtonGithub";
import { ListRepositories } from "./ListRepositories";
import { useRepository } from "../hooks/useRepository";

export const Repositories = () => {

  /* Custom hook */
  const {
    tokenGitHub,
    dataRepositories,
    handleSignInGitHub,
    handleRemoveRepoToFavorites,
    handleAddRepoToFavorites
  } = useRepository();

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

      {dataRepositories.favorites.length > 0 && (
        <section>
          <h3>Favorite repositories</h3>
          <hr />
          <ListRepositories repositories={dataRepositories.favorites} action={handleRemoveRepoToFavorites} removeRepo />

        </section>
      )}

      <section>
        <h3>Own repositories</h3>
        <hr />
        <ListRepositories repositories={dataRepositories.owner} action={handleAddRepoToFavorites} />
      </section>
    </div>
  );
};