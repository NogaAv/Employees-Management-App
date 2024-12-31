
import './update-employ-page.styles.css';
import Card from '../../components/card/Card.component';
import { useEffect, useState } from 'react';
import { API_ROOT_URL } from '../../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';
import { SERVER_FULL_URL } from '../homePage/HomePage.component';
import axios from "axios";

const UpdateEmployPage = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadEmployee(id);
    }, [])

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    //using deconstruction for the employee object:
    const { firstName, lastName, email } = employee;


    const loadEmployee = async (id) => {

        try {
            const employeeFound = await axios.get(`${SERVER_FULL_URL}/${id}`);

            const nameParts = employeeFound.data.name.split(" ");
            setEmployee({
                firstName: nameParts[0],
                lastName: nameParts[1],
                email: employeeFound.data.email
            });
        } catch (err) {
            alert("Something went wrong!");
            navigate(API_ROOT_URL);
        }
    }

    const onInputChange = (event) => {
        console.log(event.target.value);

        setEmployee({ ...employee, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const employeeToUpdate = {
                name: firstName + " " + lastName,
                company: "", //TODO: Add 'Company' column to employees
                email: email
            }

            //we use here axios to put to the db
            await axios.put(`${SERVER_FULL_URL}/${id}`, employeeToUpdate);

            //after the submition, I want the page to render to HOME page:
            navigate(API_ROOT_URL);

        } catch (err) {
            alert('Something went wrong!');
        }
    }

    return (
        <main className='main-page'>
            <Card title="Update Employee">
                <form className='add-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <FormInputContainer
                            id="firstName"
                            labelText="First Name"
                            required={true}
                            placeHolder="First Name"
                            type="text"
                            handleInput={onInputChange}
                            value={firstName}
                        />
                        <FormInputContainer
                            id="lastName"
                            labelText="Last Name"
                            required={true}
                            placeHolder="Last Name"
                            type="text"
                            handleInput={onInputChange}
                            value={lastName}
                        />
                        <FormInputContainer
                            id="email"
                            labelText="Email"
                            required={true}
                            placeHolder="Email Address"
                            type="email"
                            handleInput={onInputChange}
                            value={email}
                        />
                    </div>
                    <button className='save-btn' type="submit">Save</button>
                    <Link className='cancel' to={API_ROOT_URL}>Cancel</Link>
                </form>
            </Card>
        </main>
    );

};

export default UpdateEmployPage;