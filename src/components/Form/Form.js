import React from 'react';
import './Form.css';
class Form extends React.Component {
  constructor(props) {
    super(props);
    //handle click
    //handle submit
    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      favoriteColor: '',
      photoUrl: ''
    }
  }
  render() {
    return (
      'FORM'
    )
  }
}
export default Form;