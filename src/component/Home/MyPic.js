import React, { Component } from "react";
import './homeStyle.css'
import pic1 from './pictures/1.png'
import pic2 from './pictures/2.png'
import pic3 from './pictures/3.png'


class MyPic extends Component {
  constructor(props) {
    super(props);
    this.photos = [pic1, pic2, pic3]
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