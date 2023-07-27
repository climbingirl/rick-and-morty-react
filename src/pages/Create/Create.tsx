import React from 'react';
import CreateForm from '../../components/CreateForm/CreateForm';

class Create extends React.Component {
  render() {
    return (
      <section className="create container" aria-label="Create product page">
        <CreateForm />
      </section>
    );
  }
}

export default Create;
