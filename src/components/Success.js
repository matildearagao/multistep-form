import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export default class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you</h1>
                    <p>You will get an email</p>

                </Fragment>
            </MuiThemeProvider>
        )
    }
}
