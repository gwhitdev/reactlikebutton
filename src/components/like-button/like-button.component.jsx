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

    toggleLiked = () => {
        let localLiked = this.state.liked;

        localLiked = !localLiked;
        this.setState({liked: localLiked});

        let localCheckMark = '✓';

        if (localLiked) {
            this.setState({checkMark: localCheckMark});
        } else {
            this.setState({checkMark: ''});
        }

        console.log(this.state);

    }

    render() {
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