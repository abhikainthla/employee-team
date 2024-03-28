import React from 'react';

function Employees({ employees, dispatch }) {
    return (
        <div className='employees'>
            <div className='heading'>
                <h1>Employees</h1>
            </div>
            <div className='content'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{`${employee.first_name} ${employee.last_name}`}</td>
                                <td>{employee.email}</td>
                                <td>{employee.age}</td>
                                <td><button  className={employee.flag?'disabled':'add'} onClick={()=>{
                                    dispatch({type: "add", payload: employee.id});
                                    employee.flag = true;
                                }}
                                disabled={employee.flag}
                                >Add</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Employees;
