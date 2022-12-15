import React from 'react'

const PortfolioItem = ({ title, imageUrl, githubLink, demoLink }) => {
    return (
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={imageUrl} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
                <a href={githubLink} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={demoLink} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>
    )
}

export default PortfolioItem