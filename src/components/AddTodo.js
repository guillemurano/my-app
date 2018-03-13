import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {    
    static propTypes = {
        onAddTodo: PropTypes.func.isRequired
    }

    state = {
        inputValue: ''
    }
    
    handleChange = e => {
      const {value} = e.target;
      this.setState({
        inputValue: value
      })
    }

    handleClick = e => {        
        const {onAddTodo} = this.props;
        onAddTodo(e, this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    render() {
        const {inputValue} = this.state;
        return(
            <div>
                <input 
                    onChange={this.handleChange}
                    value={inputValue} 
                    type='text'/>
                <button
                    onClick={this.handleClick}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;