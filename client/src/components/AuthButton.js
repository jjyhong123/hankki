import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import constants from '../utils/constants';
import { withRouter } from "react-router-dom"
const API_URL = 'http://127.0.0.1:3001'

class AuthButton extends Component {

    componentDidMount() {
        const { socket, provider } = this.props

        socket.on(provider, user => {
            this.popup.close()
            this.props.setUser(user)
            sessionStorage.setItem("name", user.name)
            sessionStorage.setItem("photo", user.photo)
            const { history } = this.props
            history.push('/home')
        })
    }

    // Launches the popup by making a request to the server and then 
    // passes along the socket id so it can be used to send back user 
    // data to the appropriate socket on the connected client.
    openPopup() {
        const { provider, socket } = this.props
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${API_URL}/${provider}?socketId=${socket.id}`

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        )
    }

    // Kicks off the processes of opening the popup on the server and listening 
    // to the popup. It also disables the login button so the user can not 
    // attempt to login to the provider twice.
    startAuth(e) {
        e.preventDefault()
        this.popup = this.openPopup()
    }

    render() {
        const { provider, icon, history } = this.props

        return (
            <div>
                <div className={'button-wrapper fadein-fast'}>
                    <button
                        onClick={this.startAuth.bind(this)}
                    >
                        <FontAwesomeIcon
                            icon={icon}
                        />
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => {
            const action = { type: constants.SET_USER, user: user }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthButton));