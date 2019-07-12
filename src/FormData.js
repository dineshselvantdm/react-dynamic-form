import React from 'react';
import Input from './Input';
import DropDown from './DropDown';

const FormData = (props) => {
  const { items } = props;
  return items.map((item) => {
    switch (item.type) {
      case "TextField" : 
        return (
          <React.Fragment>
            <Input {...item}/>
            {item.children && <FormData items = {item.children}/>}
          </React.Fragment>
        )
      case "DropDown" : 
        return( 
          <React.Fragment>
            <DropDown {...item}/>
            {item.children && <FormData items = {item.children}/>}
          </React.Fragment>
        )
    }
  })
}

export default FormData;