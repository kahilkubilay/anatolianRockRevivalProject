import React from 'react';
import { TrackList } from './TrackList';

class Stories extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showImage: './posters/bülent-ve-korhan-ayrilik-anisi.jpg',
          showAlt: 'Bülent ve Korhan - Ayrılık Anısı Poster ',
      };
  
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
      this.setState(prevState => ({
        showImage: e.target.src || '',
        showAlt: e.target.alt || '',
      }));
    }

    allPoster = TrackList.map((info) => {
      return <div className='posters' onClick={this.handleClick}>
              <img className='poster-capsule' src={info.image} alt={info.title + ' poster'}/>
          </div>
  });

  render() {
      return (
          <div className='posters posters-area'>
              <nav className='tag-area'>
          </nav>

              {this.allPoster}
              <div className='image-description'>
              <img className='download-view' src={this.state.showImage} alt={this.state.showAlt}/>
              <a className='download-button' alt='anan' href={this.state.showImage} download>İndir</a>
          </div>
      </div>
      );
  };
}

export default Stories;
