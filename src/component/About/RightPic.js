import React, { Component } from "react";
import './style.css'
import pic1 from './aboutPictures/fam2.jpg'
import pic2 from './aboutPictures/dogs2.jpg'


class RightPic extends Component {
  constructor(props) {
    super(props);
    this.photos = [pic2]
  }
  UNSAFE_componentWillMount() {
    this.timeout = setTimeout(
      this.props.animDuration * 1000
    )
  }
  UNSAFE_componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  }
  render() {
    return (
      <div className="right">
        <img className="aboutPictureR" 
          src={ pic1 } alt="Family Photo" 
          onMouseOver={e => (e.currentTarget.src = pic2)}
          onMouseLeave={e => (e.currentTarget.src = pic1)}/>
      </div>
    );
  }
}
export default RightPic;