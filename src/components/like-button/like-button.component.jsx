import React from 'react';

import './like-button.styles.css';

const LikeButton = ({ toggle, checkMark }) => {

        return (
            <div>
                <button className="like-button" 
                    onClick={toggle}>
                        {checkMark || 'Like'}
                </button>
            </div>
        )
    }

export default LikeButton;