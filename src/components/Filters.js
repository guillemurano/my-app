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
            flexDirection: 'row'
        }}>
        {filters.map(f => (
            <li id={f}
            style={{
                cursor: 'pointer',
                backgroundColor: filter === f ? '#C0C0C0' : '#FFFFFF',
                width: '150px',
                height: '30px',
                border: '1px solid #909090',
                fontFamily: 'verdana',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center'
            }}
             onClick={this.handleClick}>{f}</li>
        ))}
        </ul>
    }
}

export default Filters;