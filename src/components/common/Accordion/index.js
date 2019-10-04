import React, {Component} from 'react'

class Accordion extends Component{
    state = {show: false}

    componentDidMount(){
        if(this.props.open){
            this.setState({show: true})
        }
    }

    handleClick = () =>{
        let newState = this.state
        newState.show = !newState.show
        this.setState(newState)
    }

    render(){
        const { title, content } = this.props
        const { show } = this.state

        return(
            <div className="accordion">
                <button onClick={this.handleClick} className="title">{title} <i className="fa fa-chevron-down color-red"></i></button>
                {show &&
                    <div className="content">{content}</div>
                }
            </div>
        )
    }
}

export default Accordion