import React from 'react';
import axios from 'axios';
//import PhotoGrid from './PhotoGrid.jsx';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      hasLoaded: false
    }
    this.getPhotosByRoomId = this.getPhotosByRoomId.bind(this);
    //this.getTitleByRoomId = this.getTitleByRoomId.bind(this);
  }

  componentDidMount() {
  //this.getTitleByRoomId(1);
  this.getPhotosByRoomId(1);
  }

  getPhotosByRoomId(roomId) {

  axios.get(`http://localhost:3001/${roomId}/room_photos`)
    .then((response) => {
      console.log('photos: ', response.data);
      let allPhotos = [];
      allPhotos.push(response.data[0]);
      this.setState({
        photos: allPhotos,
        hasLoaded: true
      });
    })
    .catch((err) => {
      console.log('error getting photos: ', err);
    })
  }

  // getTitleByRoomId(roomId) {
  //   //will pass in folder on cloudinary api endpoint
  // axios.get(`http://localhost:3001/${roomId}/title`)
  //   .then((response) => {
  //     console.log('photos: ', response.data);
  //     let allPhotos = [];
  //     allPhotos.push(response.data[0]);
  //     this.setState({
  //       photos: allPhotos,
  //       hasLoaded: true
  //     });
  //   })
  //   .catch((err) => {
  //     console.log('error getting photos: ', err);
  //   })
  // }

  render() {
    const { title } = this.state;
    const { photos } = this.state;
    const { hasLoaded } = this.state;
    // if (hasLoaded) {
    //   return (
    //     <h1>{ title }</h1>
    //     <PhotoGrid photos={ photos } />
    //   );
    // }
    return (
      <h1>Unique Glamping Experience</h1>
    );
  }
}

export default Images;