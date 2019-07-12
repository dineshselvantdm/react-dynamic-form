import React from 'react';
import CustomFormData from './FormData';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.formNode = null;
  }

  onSubmit = (e) => {
    // Replace data with composing your form data
    e.preventDefault();
    const data = Object.values(this.formNode).reduce((obj,field) => {
      if(field.name) 
       {
         obj[field.name] = field.value;
       }
      return obj
    }, {});
    console.log(data);
    this.props.onSubmit(data); // dont edit this line
  };

  render() {
    const { items } = this.props.config;
    return (
      <form ref={node => (this.formNode = node)}>  
        {
          <CustomFormData items={items}/>
        }
        <button onClick={this.onSubmit} />
      </form>
    );
  }
}

export default Flexi;