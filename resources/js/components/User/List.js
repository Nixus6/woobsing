import React, { useEffect, useState } from 'react';

import userServices from "../../services/Users"

import { Link } from "react-router-dom";

function List() {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {

        async function fetchDataUser() {
            const res = await userServices.listUser();
            console.log(res.data);
            setListUser(res.data)
        }

        fetchDataUser();

    }, [])
    return (
        <section>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listUser.map((item) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.adress}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link class="btn btn-outline-info" to={"/user/edit/" + item.id}>Edit</Link>
                                        <a href="#" class="btn btn-danger"> Delete </a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </section>
    )
}

export default List;