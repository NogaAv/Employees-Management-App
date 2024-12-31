import { useEffect, useState } from 'react';
import { API_ROOT_URL } from '../../App';
import Card from '../../components/card/Card.component';
import { Link, useParams } from 'react-router-dom';
import './view-employ-page.styles.css';
import { SERVER_FULL_URL } from '../homePage/HomePage.component';
import axios from "axios";

const ViewEmployPage = () => {

    const { id } = useParams();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    //using deconstruction for the employee object:
    const { firstName, lastName, email } = employee;

    useEffect(() => {
        loadEmployee(id);
    }, []);

    const loadEmployee = async (employeeId) => {

        try {
            const employeeFound = await axios.get(`${SERVER_FULL_URL}/${employeeId}`);
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

    return (
        <main className='main-page'>
            <Card title='View Employee Details'>
                <div className='center'>
                    <ul>
                        <li>
                            <b>Employee First Name:</b>
                            {firstName}
                        </li>
                        <li>
                            <b>Employee Last Name:</b>
                            {lastName}
                        </li>
                        <li>
                            <b>Employee Email ID:</b>
                            {email}
                        </li>
                    </ul>
                </div>
            </Card>
            <Link className="back-link" to={API_ROOT_URL}> Go Back To Home</Link>
        </main>
    );
};

export default ViewEmployPage;