import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Filters extends Component {
    static propTypes = {
        onChangeFilter: PropTypes.func.isRequired
    }

    handleClick = e => {
        this.props.onChangeFilter(e.target.id)
    }

    render(){
        const {filter} = this.props
        const filters = ['All', 'Completed', 'Uncompleted']
        return <ul style={{
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column'
        }}>
        {filters.map(f => (
            <li id={f}
            style={{
                cursor: 'pointer',
                backgroundColor: filter === f ? 'yellow' : 'blue'
            }}
             onClick={this.handleClick}>{f}</li>
        ))}
        </ul>
    }
}

export default Filters;