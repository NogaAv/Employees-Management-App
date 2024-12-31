import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home-page.styles.css';
import axios from 'axios';
import { API_ROOT_URL } from '../../App';

//import environments from '../../environments/environments';

//const API_URL = environments.API_URL;
export const SERVER_FULL_URL = "http://localhost:8080/api/v1/employees";

const HomePage = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);  //adding this empty array so that this useEffect execute only once when the page is loaded, and not all the time.

    const loadEmployees = async () => {

        try {
            const result = await axios.get(SERVER_FULL_URL);
            setEmployees(result.data);

        } catch (err) {
            alert("Something went wrong!");
        }

    };


    const deleteEmployee = async (id) => {
        await axios.delete(`${SERVER_FULL_URL}/${id}`);
        loadEmployees(); //I want to refresh the home page and see the employer deleted
    }

    const getEmpName = (namePartNo, fullName) => {

        return fullName.split(" ")[namePartNo];
    }

    return (
        <main className="main-page">
            <h1>Employees List</h1>
            <Link className='add-link' to={`${API_ROOT_URL}/addemployee`}>
                <div>Add Employee</div>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="colF">#</th>
                        <th scope="col">Employee First Name</th>
                        <th scope="col">Employee Last Name</th>
                        <th scope="col">Employee Email id</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (

                            < tr >
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{getEmpName(0, employee.name)}</td>
                                <td>{getEmpName(1, employee.name)}</td>
                                {/* <td>{employee.company}</td> */}
                                < td > {employee.email}</td>
                                <td>
                                    <div>
                                        <Link className="link link-update"
                                            to={`${API_ROOT_URL}/updateemployee/${employee.id}`}
                                        >Update</Link>
                                        <button className="delete-btn"
                                            onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        <Link className="link link-view"
                                            to={`${API_ROOT_URL}/viewemployee/${employee.id}`}>View</Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table >

        </main >
    );
};

export default HomePage;