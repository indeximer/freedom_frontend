import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component{
    state = {
        activeTab:0
    }

    handleClick = (tabId) => {
        this.setState({activeTab:tabId})
    }

    render(){
        const { children, tabTitles } = this.props
        const { activeTab } = this.state

        return(
            <div className="tabs-container">
                <nav className="tabs-nav">
                    {tabTitles.map((title, index) =>(
                        <button 
                            className={activeTab === index ? 'active':''}
                            type="button"
                            key={index} 
                            onClick={() => this.handleClick(index)}
                        >
                            {title}
                        </button>
                    ))}
                </nav>
                

                {React.Children.map(children, (child,index) => (
                    <div 
                        key={index}
                        className={`tab-content ${activeTab === index ? 'active':''}`}
                    >
                        {child}
                    </div>
                ))}
            </div>
        )
    }

    static propTypes = {
        children: PropTypes.any.isRequired,
        tabTitles: PropTypes.array.isRequired
    }
}

export default Tabs