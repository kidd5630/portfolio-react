import React, { Component } from "react";
import './style.css'
import pic1 from './pictures/1.jpg'
import pic2 from './pictures/2.jpg'
import pic3 from './pictures/3.jpg'
import pic4 from './pictures/4.jpg'

class MyPic extends Component {
  constructor(props) {
    super(props);
    this.photos = [pic1, pic2, pic3, pic4]
    this.state = { photoIndex: 0 }
    this.changePhoto = this.changePhoto.bind(this)
  }
  UNSAFE_componentWillMount() {
    this.timeout = setTimeout(
      this.changePhoto,
      this.props.animDuration * 1000
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
        this.props.animDuration * 1000
      )
    })
  }
  render() {
    return (
      <div>
          <img className="picture" src={ this.photos[this.state.photoIndex] } />
      </div>
    );
  }
}
export default MyPic;