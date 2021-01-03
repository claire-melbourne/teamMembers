import React from 'react';
import axios from 'axios';
import TeamMember from '../TeamMember';
import Form from '../Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
      formView: false
    };
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log('retrying initial data request...');
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async fetchInitialData() {
    const response = await axios.get('/team');
    this.setState({
      team: response.data,
      loading: false
    });
  }

  async postNewData(newMemberData){
    this.setState({
      loading: true
    })
    try {
      const response = await axios.post('/newMember', newMemberData);
      if (response) {
        alert('Successfully joined!')
        this.fetchInitialData();
      }
    } catch (error) {
      alert('Unable to add new member. Make sure all required elements are filled in.')
    }
  }

  toggleFormView() {
    this.setState({
      formView: !this.state.formView
    })
  }

  saveNewMemberData(formData) {
    console.log('received form data for ' + formData.firstName + ' ' + formData.lastName);
    this.postNewData(formData);
    this.toggleFormView();
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    if (this.state.formView) {
      return (
        <Form saveNewMemberData={this.saveNewMemberData.bind(this)}/>
      )
    }

    return (
      <div className="app">
        <div className="team-grid" />
        {this.state.team.map(member => (
          <TeamMember
            key={member.id}
            name={`${member.firstName} ${member.lastName}`}
            title={member.title}
            photoUrl={member.photoUrl}
            story={member.story}
            favoriteColor={member.favoriteColor}
          />
        ))}
        {/* Make this new team member link to your form! */}
        <TeamMember id="new" name="Join us!" title="New Teammate" toggleFormView={this.toggleFormView.bind(this)}/>
      </div>
    );
  }
}

export default App;
