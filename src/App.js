import Form from './components/Form'
import CardList from './components/CardList'
import React, { useState } from 'react';

function App(props) {
  const [profiles, setProfiles] = useState([])

  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData])
  };

  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;