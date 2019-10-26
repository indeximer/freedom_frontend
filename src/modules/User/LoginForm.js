import React, {Component} from 'react'
import { connect } from 'react-redux'  
import { withRouter } from "react-router-dom";

//actions
import { loginAsync } from '../../redux/actions/loginActions'

//Api
import { validateApiToken } from '../../api/apiConstants'

//Utils
import { setUserToSessionStorage } from '../../utils/helpers'

//Components
import { Button, TextField } from 'rmwc'
import ModalLoader from '../../components/common/loader/ModalLoader'

class LoginForm extends Component{

    state = {
        user:'',
        password:''
    }

    componentDidMount(){
        const userToken = sessionStorage.getItem('api-token')
        if(validateApiToken(userToken)){
            this.props.history.push('/techniques')
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.state.user
        const password = this.state.password
        const encodedLogin = {login: btoa(`${user}:${password}`)}
        console.log('login')
        this.props.history.push('/techniques')

        // this.props.dispatch(loginAsync(encodedLogin))
        //     .then(res => {
        //         if(!res.payload.status_code){
        //             setUserToSessionStorage(res.payload.access_token, encodedLogin)
        //             this.props.history.push('/entrance-hub')
        //         }                
        //     })
    }

    handleInput = (value,name) => {
        this.setState({[name]: value})
    }

    render(){
        const { loginError, isSaving } = this.props

        const fields = {
            username: {
                label: 'Usuário',
                name: 'user-name',
                type: 'text',
                value: this.state.user,
                onChange: (event) => this.handleInput(event.target.value, 'user')
            },
            password: {
                label: 'Senha',
                name: 'password',
                type: 'password', 
                value: this.state.password,
                onChange: (event) => this.handleInput(event.target.value, 'password')
            }
        }
    
        return (
            <form className="row mt-5 pt-5" onSubmit={this.handleSubmit}>
                <TextField outlined {...fields.username}/>
                <TextField outlined {...fields.password}/>
                <div className="col-12 text-center">
                    {loginError &&
                        <span className="color-red error-msg">Usuário ou senha incorretos!</span>
                    }
                    <Button label="Entrar" raised type="submit" />
                </div>
                {isSaving &&
                    <ModalLoader />
                }
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        loginError: store.loginStore.loginError,
        isSaving: store.loadingStore.isSaving
    }
}


export default withRouter(connect(mapStateToProps)(LoginForm))