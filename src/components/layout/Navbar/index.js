import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

//actions
import { logout } from '../../../redux/actions/loginActions'

//assets
import logo from '../../../assets/img/logo.png'

//Components
import Button from '../../common/Button';

class NavBar extends Component {

    state = {
        userDropdown : false
    }

    handleUserbtnClick = () =>{
        const newState = this.state
        newState.userDropdown = !newState.userDropdown
        this.setState(newState)
    }

    handleLogout = () => {
        this.props.dispatch(logout())
        sessionStorage.removeItem('user-token')
        sessionStorage.removeItem('user-email')
        this.props.history.push('/')
    }

    getUserFromSessionStorage = () =>{
        return {
            name: sessionStorage.getItem('user-name'),
            email: sessionStorage.getItem('user-email'),
            job_description: sessionStorage.getItem('user-job-description'),
            image: sessionStorage.getItem('user-image')
        }
    }

    render(){
        const { buttons = [] } = this.props
        const { userDropdown } = this.state
        const user = this.getUserFromSessionStorage()

        return(
            <div className="navbar">
                <Link exact="true" to="/">
                    <img className="logo" src={logo} alt="Getnet" />
                </Link>
                    {user.email &&
                        <div>
                            <Button onClick={this.props.history.goBack} classList="btn-back"><i className="fa fa-arrow-left"></i> <br/> voltar</Button>
                            {buttons.map((Btn, index) => <Btn key={index} />)}
                            <button className="btn-user" onClick={this.handleUserbtnClick}>
                                <div className="user-avatar text-uppercase">
                                    {user.email.substring(0, 2)}
                                </div>
                                <p className="user-name">{user.name}</p>

                                <div className={`user-box ${userDropdown ? 'active':''}`}>
                                    <span className="user-box-tip"></span>
                                    <div className="user-email d-flex">
                                        {/* <div className="user-avatar-wrapper">
                                            <img className="w-100" src={user.image} alt={user.name} />
                                        </div> */}
                                        <div className="px-3 col">{user.name}</div>
                                    </div>
                                    <div className="user-info color-white text-center">
                                        <p className="user-name">{user.name}</p>
                                        <p className="user-title">{user.email}</p>
                                        <hr/>
                                        <div onClick={this.handleLogout} className="btn btn-inverse btn-sm">Logout</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    }
                
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return { user: store.loginStore.user };
};

export default withRouter(connect(mapStateToProps)(NavBar))