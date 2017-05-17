import React,{Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render(){
    return(
      <div className='TodoItem'>
        <input type='chenckbox' checked={this.props.todo.status==='completed'}
          onChange={this.toggle.bind(this)}/>
        <span className='title'>{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}></button>
      </div>
    )
  }
  
  toggle(e,todo){
    this.props.onToggle(e,this.props.todo);
  }
  delete(e,todo){
    this.props.onDelete(e,this.props.todo)
  }
}
export default TodoItem