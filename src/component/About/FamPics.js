import React, { Component } from "react";
import './aboutStyle.css'
import pic1 from './aboutPictures/1.jpg'
import pic2 from './aboutPictures/2.jpg'
import pic3 from './aboutPictures/3.jpeg'
import pic4 from './aboutPictures/4.jpeg'
import pic5 from './aboutPictures/5.jpeg'
import pic6 from './aboutPictures/6.jpeg'
import pic7 from './aboutPictures/7.jpeg'
import pic8 from './aboutPictures/8.jpeg'
import pic9 from './aboutPictures/9.jpeg'
import pic10 from './aboutPictures/10.jpeg'
import pic11 from './aboutPictures/11.jpeg'



class FamPics extends Component {
  constructor(props) {
    super(props);
    this.photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11]
    this.state = { photoIndex: 0 }
    this.changePhoto = this.changePhoto.bind(this)
  }
  UNSAFE_componentWillMount() {
    this.timeout = setTimeout(
      this.changePhoto,
      this.props.animDuration * 2000
    )
  }
  UNSAFE_componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  }
  changePhoto () {
    this.setState(function ({ photoIndex }) {
      const nextPhotoIndex = ++photoIndex % this.photos.length
      return { photoIndex: nextPhotoIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changePhoto,
        this.props.animDuration * 2000
      )
    })
  }
  render() {
    return (
      <div className="familyPics">
          <img className="pictures" src={ this.photos[this.state.photoIndex] } />
      </div>
    );
  }
}
export default FamPics;

