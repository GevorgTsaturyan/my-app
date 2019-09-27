import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Registration.css';
import store from '../Store/store';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            address: "",
            secondAddress: "",
            selectLegal: "",
            package: ""
        }
    };


    handleFirstNameChange = (e) => {
        const value = e.target.value;

        this.setState({
            firstName: value
        })
    };
    handleLastNameChange = (e) => {
        const value = e.target.value;

        this.setState({
            lastName: value
        })
    };
    handleCountryChange = (e) => {
        const value = e.target.value;

        this.setState({
            country: value
        })
    };
    handleCityChange = (e) => {
        const value = e.target.value;

        this.setState({
            city: value
        })
    };
    handleAddressChange = (e) => {
        const value = e.target.value;

        this.setState({
            address: value
        })
    };
    handleSecondAddressChange = (e) => {
        const value = e.target.value;

        this.setState({
            secondAddress: value
        })
    };
    handleSelectChange = (e) => {
        const value = e.target.value;

        this.setState({
            selectLegal: value
        })
    };
    handleRadioChange = (e) => {
        const value = e.target.value;

        this.setState({
            package: value
        })
    };

    handleCancelling = () => {
        this.setState({
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            address: "",
            secondAddress: ""
        })
    };

    handleSubmit = (event) => {
        const requiredFields = {
            firstName: true,
            lastName: true,
            country: true,
            city: true,
            address: true,
            secondAddress: false,
            selectLegal: true,
            package: false
        }
        let check = false;
        const currentUser = {};
        for (let key in this.state) {
            if (requiredFields[key] && this.state[key] === '') {
                alert('Please fill all required fields');
                check = true;
                break;
            } else {
                currentUser[key] = this.state[key]
            }
        };
        if (!check) {
            store.addRegisteredUserToStore(currentUser);
            this.props.history.push('/UsersList')
        }

    };



    render() {

        return (
            <div className='registration'>
                <h2>Registration</h2>
                <form>
                    <p><input type='text' onChange={this.handleFirstNameChange} placeholder='First Name *' required /></p>
                    <p><input type='text' onChange={this.handleLastNameChange} placeholder='Last Name *' required /></p>
                    <p><input type='text' onChange={this.handleCountryChange} placeholder='Country *' required /></p>
                    <p><input type='text' onChange={this.handleCityChange} placeholder='City *' required /></p>
                    <p><input type='text' onChange={this.handleAddressChange} placeholder='Address *' required /></p>
                    <p><input type='text' onChange={this.handleSecondAddressChange} placeholder='Address2' /></p>
                    <p><select required onChange={this.handleSelectChange}>
                        <option value='' defaultValue hidden>Select Legal *</option>
                        <option value='Company'>Company</option>
                        <option value='Individual'>Individual</option>
                    </select ></p>
                    <p className="radio">
                        <label>Standard Package <input onChange={this.handleRadioChange} type='radio' value="Standard Package" name='legal' /></label>
                        <label>Premium Package  <input onChange={this.handleRadioChange} type='radio' value="Premium Package" name='legal' /></label>
                    </p>
                    <div className='RegistrationButtons'>
                        <button type='reset' onClick={this.handleCancelling}>Cancel</button>
                        <button onClick={this.handleSubmit}>Submit</button>

                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(RegistrationForm);