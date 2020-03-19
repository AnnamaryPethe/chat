import React, {Component} from "react";
import {Alert} from "antd";
import '../Alert.css'

export default class SuccessAlert extends Component<{},{}>{
    render() {
        return(
            <div>
                <Alert
                    message="Success"
                    description="Your registration is successfully done."
                    type="success"
                />
            </div>
        )
    }



}
