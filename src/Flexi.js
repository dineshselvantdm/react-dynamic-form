import React from 'react';
import FormData from './FormData';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => {
    // Replace data with composing your form data
    const data = {};
    this.props.onSubmit(data); // dont edit this line
  };

  render() {
    console.log(this.props);
    const { items } = this.props.config;
    return (
      <form>  
        {
          <FormData items={items}/>
        }
        <button onClick={this.onSubmit} />
      </form>
    );
  }
}

export default Flexi;