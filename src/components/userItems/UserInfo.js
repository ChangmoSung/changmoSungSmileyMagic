import React from 'react';
import { Link } from "react-router-dom";

const UserInfo = props => {
    const signOut = () => {
        props.auth.signOut();
        
        window.location.reload();
    }

    return (
        <div className="userInfo">
            <h1>{props.userEmail}</h1>

            <div className='uploadAndSignOutButtons'>
                <input
                    id="fileUpload"
                    type="file"
                    onChange={props.uploadGallery}
                ></input>

                <label htmlFor="fileUpload">
                    <span>upload</span>

                    <span role='img' aria-label='heart emoji' ref={props.uploadEmoji} className='uploadEmoji'>😍</span>
                </label>

                <Link to='/changmoSungReactProjectFive/' className='signOutLink' onClick={signOut}>
                    <span className='signOut'>sign out</span>
                </Link>
            </div>

            <div className="progressBar">
                <span ref={props.progressSpan} style={{ width: `${props.progress}%` }}></span>
            </div>
        </div>
    )
}

export default UserInfo;