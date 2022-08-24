import React from 'react'

export const Card = ({ dataInfoRepo, onclick, index, removeRepo}) => {
    const { name, visibility, description, language, clone_url } = dataInfoRepo;
    return (
        <li className="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6">
            <div className="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable">
                <div className="pinned-item-list-item-content d-flex justify-content-between">
                    <div className="d-flex width-full position-relative">
                        <div className="flex-1">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted">
                                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                            </svg>
                            <a href={clone_url} target="_blank" rel="noopener noreferrer" className='mr-1 text-bold wb-break-word'>
                                <span className="repo" title="calculator-ios">{name}</span>
                            </a>
                            <span></span>
                            <span className="Label Label--secondary v-align-middle mt-1 no-wrap v-align-baseline Label--inline">{visibility}</span>
                        </div>
                    </div>

                    {description && (
                        <p className="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
                            {description}
                        </p>
                    )}

                    {language && (
                        <p className="mb-0 mt-2 f6 color-fg-muted">
                            <span className="d-inline-block mr-3">
                                <span className="repo-language-color"></span>
                                <span itemProp="programmingLanguage">{language}</span>
                            </span>
                        </p>

                    )}
                <button onClick={() => onclick(index)} className={`btn mt-2 ${(removeRepo) ? 'btn-danger' : 'btn-primary' }`}>{
                    (removeRepo) ? 'Remove Favorites' : 'Add favorites'
                }</button>
                </div>
            </div>
        </li>
    )
}
