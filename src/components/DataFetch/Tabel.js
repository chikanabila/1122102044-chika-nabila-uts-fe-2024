import React,{ useState, useEffect } from "react";
import {Container} from "react-bootstrap"
import "./tabelStyle.css";

const Tabel = () => {
  const [data, setdata] = useState([]);
  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
        const results = await response.json();
        setdata(results)
        } catch (error) {
          console.error("Error Menampilkan Data", error)
        }
      }
      fetchData()
},[])

return (
      <div className="table-container" id="data">
        <Container>
        <div className="table-card">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map ((user) =>(
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.phone}</td>
                </tr>
               ))}
            </tbody>
          </table>
        </div></Container></div>
    );
};

export default Tabel;