import React, { Fragment } from 'react'
import { Component } from 'react';
import { withAlert } from 'react-alert'

export class Alerts extends Component {

    componentDidMount = () => {
        this.props.alert.show('it works');
    }
    render() {
        return
        <Fragment />

    }
}

export default withAlert(Alerts)

