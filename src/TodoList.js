import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    //constructor(props) {
       // super(props);
   // }   

    render() {
	const items = this.props.items;
  	const listItems = items.map((item) =>
	<Todo text={item.text} dueDate={item.dueDate} priority={item.priority} />
 
  );
        return (  
          <ul>{listItems}</ul>
        );
    }

}
