import React from 'react';

import './App.css';

import LikeButton from './components/like-button/like-button.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      liked: false,
      checkMark: ''
    }
  }

  
  // create like button toggle method
  toggleLiked = () => {

    // create local liked variable to hold the liked state
    let localLiked = this.state.liked;

    // flip the state
    localLiked = !localLiked;

    // set the now flipped state
    this.setState({liked: localLiked});

    // create local checkmark variable to hold the character for setting later
    let localCheckMark = '✓';

    // create logic to check the status of having liked something
    if (localLiked) {
      // if localLiked === true then set this.state.checkMark to localCheckMark
      this.setState({checkMark: localCheckMark});
    } else {
      // if localLiked === false, set checkMark back to an empty string
      this.setState({checkMark: ''});
    }

    
  }
  // render component
  render() {

    // console.log the state to see what's going on
    console.log(this.state)

    return (
      <div>
        <LikeButton 
          checkMark={this.state.checkMark}
          toggle={this.toggleLiked}
        />
      </div>
    );
  }
  
}

export default App;
