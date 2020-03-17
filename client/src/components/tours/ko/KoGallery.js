import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [];
const imageThumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];

for (let i = 0; i < imageThumbs.length; i++) {
  images.push(require('../../../img/tour-ko/day' + imageThumbs[i] + '.jpg'));
}

export default class KsuGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="row" id="tour-gallery">
        {imageThumbs.map(image => (
          <div className="col-lg-3 col-sm-6" key={image}>
            <img
              className="img-fluid"
              src={require('../../../img/tour-ko/small/day' + image + '.jpg')}
              onClick={() =>
                this.setState({ isOpen: true, photoIndex: image - 1 })
              }
              alt="Поход в Парк Налычево"
            />
          </div>
        ))}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
