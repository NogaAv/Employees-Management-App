import { useState } from 'react';
import { API_ROOT_URL } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card.component';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';
import './add-employ-page.styles.css';
import { SERVER_FULL_URL } from '../homePage/HomePage.component';
import axios from "axios";

const AddEmployPage = () => {

    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    //using deconstruction for the employee object:
    const { firstName, lastName, email } = employee;


    const onInputChange = (event) => {
        console.log(event.target.value);
        //The spread operator (...employee,) is needed for changing only single field in the object.
        setEmployee({ ...employee, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const employeeToPost = {
                name: firstName + " " + lastName,
                company: "", //TODO: Add 'Company' column to employees
                email: email
            }

            //we use here axios to post to the db
            await axios.post(`${SERVER_FULL_URL}`, employeeToPost);

            //after the submition, the page renders to HOME page:
            navigate(API_ROOT_URL);

        } catch (err) {
            alert('Something went wrong!');
        }
    }

    return (
        <main className='main-page'>
            <Card title="Add Employee">
                <form className='add-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <FormInputContainer
                            id="firstName"
                            labelText="First Name"
                            required={true}
                            placeHolder="First Name"
                            type="text"
                            handleInput={onInputChange}
                        />
                        <FormInputContainer
                            id="lastName"
                            labelText="Last Name"
                            required={true}
                            placeHolder="Last Name"
                            type="text"
                            handleInput={onInputChange}
                        />
                        <FormInputContainer
                            id="email"
                            labelText="Email"
                            required={true}
                            placeHolder="Email Address"
                            type="email"
                            handleInput={onInputChange}
                        />
                    </div>
                    <button className='save-btn' type="submit">Save</button>
                    <Link className='cancel' to={API_ROOT_URL}>Cancel</Link>
                </form>
            </Card>
        </main>

    );
};

export default AddEmployPage;