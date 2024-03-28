import React from 'react'

function Team({team, dispatch}) {
    
  return (
    <div className='team'>
        <div className='heading'>
            <h1>Team</h1>
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

                    {team.map((member) => (
                            <tr key={member.id}>
                                <td>{`${member.first_name} ${member.last_name}`}</td>
                                <td>{member.email}</td>
                                <td>{member.age}</td>
                                <td><button className='remove' onClick={()=>{
                                    dispatch({type:"remove", payload:member.id})
                                    member.flag = false;
                                }}>Remove</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td>Average Age</td>
                            <td>:</td>
                            <td>{(team.reduce((acc, curr) => acc += curr.age, 0) / team.length).toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table>
        </div>
    </div>
  )
}

export default Team