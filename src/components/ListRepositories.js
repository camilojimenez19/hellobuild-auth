import React from 'react'
import { Card } from './Card'

export const ListRepositories = ({repositories, action, removeRepo = false}) => {
    return (
        <ol className="d-flex flex-wrap list-style-none gutter-condensed mb-2 js-pinned-items-reorder-list">
            {repositories.map((repo, index) => <Card  removeRepo={removeRepo} key={repo.id} dataInfoRepo={repo} onclick={action} index={index} />)}
        </ol>
    )
}
