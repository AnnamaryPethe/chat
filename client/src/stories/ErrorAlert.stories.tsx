import React from 'react';
import ErrorAlert from "../components/Alert/ErrorAlert/ErrorAlert";
import SuccessAlert from "../components/Alert/SuccessAlert/SuccessAlert";

export default {
    title: 'Alert'
}

export const Error = () => <ErrorAlert/>;

export const Success = () => <SuccessAlert/>;