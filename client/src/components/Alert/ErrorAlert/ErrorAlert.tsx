import React, {Component} from "react";
import {Alert} from "antd";
import '../Alert.css'


export default class ErrorAlert extends Component<{}, {}> {
    render() {
        return(
            <div>
                <Alert
                    message="Error"
                    description="Failed registration"
                    type="error"
                />
            </div>
        )
    }
}