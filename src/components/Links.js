import React from 'react';
import { Link } from "react-router-dom";

const Links = props => {
    const highlightLink = e => {
        if(e.keyCode === 13 || typeof e.keyCode !== 'number') {
            document.querySelector('.highlight').classList.remove('highlight');
    
            if(e.target.dataset.icon === 'yes') {
                e.target.parentNode.classList.add('highlight');
            } else {
                e.target.classList.add('highlight');
            }
        }
    }

    return (
        <div className='links'>
            <Link to={`/${props.uid}`} className='highlight' onClick={highlightLink}>
                <i className="far fa-image" data-icon='yes' onKeyDown={highlightLink}></i>
            </Link>

            <Link to={`/${props.uid}/video`} onClick={highlightLink}>
                <i className="fas fa-video" data-icon='yes' onKeyDown={highlightLink}></i>
            </Link>

            <Link to={`/${props.uid}/journal`} onClick={highlightLink}>
                <i className="fas fa-book" data-icon='yes' onKeyDown={highlightLink}></i>
            </Link>
        </div>
    )
}

export default Links;