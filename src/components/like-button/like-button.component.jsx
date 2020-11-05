import React from 'react';

import './like-button.styles.css';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false,
            checkMark: ''
        }
    }

    // create method to toggle the liking
    toggleLiked = () => {
        // create localLiked variable to hold the current state of 'liked'
        let localLiked = this.state.liked;

        // flip the liked state locally
        localLiked = !localLiked;

        // set the liked state to the flipped localLiked variable
        this.setState({liked: localLiked});

        // create localLiked variable to hold the checkMark
        let localCheckMark = '✓';

        // create logic to set state correctly
        if (localLiked) {
            // if localLiked === true, set the checkmark to be the localCheckMark
            this.setState({checkMark: localCheckMark});
        } else {
            // if localLiked === false, set the checkMark back to the original empty string
            this.setState({checkMark: ''});
        }

        

    }

    render() {
        
        // console.log the state to observe
        console.log(this.state);

        return (
            <div>
                <button className="like-button" onClick={this.toggleLiked}>
                    {this.state.checkMark || 'Like'}
                </button>
            </div>
        )
    }
}

export default LikeButton;