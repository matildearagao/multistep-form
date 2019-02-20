import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();

        //PROCESS FORM
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem

                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem

                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem

                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem

                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem

                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem

                            primaryText="Bio"
                            secondaryText={bio}
                        />

                    </List>
                    <RaisedButton
                        label="Previous"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

                </Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}