import React from 'react';
import './Form.css';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      favoriteColor: '',
      photoUrl: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleColorSelect = this.handleColorSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleColorSelect(e) {
    this.setState({
      favoriteColor: e.target.value
    })
  }

  handleSubmit(e) {
    const newMemberData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title,
      story: this.state.story,
      favoriteColor: this.state.favoriteColor,
      photoUrl: this.state.photoUrl
    }
    e.preventDefault();
    this.props.saveNewMemberData(newMemberData);
  }

  render() {
    return (
      <div>
        <h2>Enter your information and submit to join the team!</h2>
        <form onSubmit= {this.handleSubmit}>
          <label>
            First Name:<br></br>
          <input className="required" type="text" value={this.state.firstName} name="firstName" onChange={ e => this.handleInputChange(e) } required/>
          </label>
          <label>
            Last Name:<br></br>
            <input className="required" type="text" value= {this.state.lastName} name="lastName" onChange={ e => this.handleInputChange(e) } required
            />
          </label>
          <label>
            Title:<br></br>
            <input
              className="required"
              type="text" value= {this.state.title} name="title" onChange= {
              e => this.handleInputChange(e) } required
            />
          </label>
          <label>
            Story:<br></br>
            <textarea
              className="required"
              type="textarea" value= {this.state.story} name= "story" onChange= { e => this.handleInputChange(e) } required
            />
          </label>
          <label>
            Favorite Color:<br></br>
            <input
              type="color" value= {this.state.favoriteColor} name = "favoriteColor" onChange= {e => this.handleColorSelect(e)}
            />
          </label>
          <label>
            'Photo of YOU! (provide a link please!)':<br></br>
            <input
              type= "url" name="photoUrl" value={this.state.photoUrl} onChange= { e => this.handleInputChange(e)}
            />
          </label>
          <input className= 'formSubmit' type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default Form;