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
    console.log(this.state.story)
  }

  handleColorSelect(e) {
    this.setState({
      favoriteColor: e.target.value
    })
    console.log(this.state.favoriteColor)
  }

  handleSubmit(e) {
    const newMemberData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title,
      story: this.state.story,
      favoriteColor: this.state.favoriteColor
    }

    console.log('submit clicked ' + newMemberData)
    e.preventDefault();
    this.props.saveNewMemberData(newMemberData);
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <label>
          First Name:
        <input type="text" value={this.state.firstName} name="firstName" onChange={ e => this.handleInputChange(e) } required/>
        </label>
        <label>
          Last Name:
          <input type="text" value= {this.state.lastName} name="lastName" onChange={ e => this.handleInputChange(e) } required />
        </label>
        <label>
          Title:
          <input
            type="text" value= {this.state.title} name="title" onChange= {
            e => this.handleInputChange(e) }
          />
        </label>
        <label>
          Story:
          <textarea
            type="textarea" value= {this.state.story} name= "story" onChange= { e => this.handleInputChange(e) }
          />
        </label>
        <label>
          Favorite Color:
          <input
            type="color" value= {this.state.favoriteColor} name = "favoriteColor" onChange= {e => this.handleColorSelect(e)}
          />
        </label>
        <label>
          'Photo of YOU! (provide a link please!)':
          <input
            type= "url" name="photoUrl" value={this.state.photoUrl} onChange= { e => this.handleInputChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default Form;