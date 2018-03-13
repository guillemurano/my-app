import React, {Component, Fragment} from 'react';
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
            <Fragment >
                <input 
                    onChange={this.handleChange}
                    value={inputValue} 
                    type='text' style={{
                        marginLeft: '40px'
                     }}/>
                <button style={{
                    marginLeft: '10px',
                    width: '50px'
                    }}
                    onClick={this.handleClick}
                >Add</button>
            </Fragment>
        )
    }
}

export default AddTodo;