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

    
  }

  render() {
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
