import React, { useEffect, useState } from 'react';

import userServices from "../../services/Users"

import { Link } from "react-router-dom";

function List() {
    const [listUser, setListUser] = useState([]);



    const fetchDataUser = async () => {
        const res = await userServices.listUser();
        console.log(res.data);
        setListUser(res.data)
    }
    
    useEffect(() => {
        fetchDataUser();

    }, [])

    const onClickDelete = async (i, id) => {

        var yes = confirm("are you sure to delete this item?");
        if (yes === true) {

            const res = await userServices.delete(id)

            if (res.success) {
                alert(res.message)
                const newList = listEmployee
                newList.splice(i, 1)
                setListUser(newList);
                await fetchDataUser();
            }
            else {
                alert(res.message);
            }
        }
    }
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
                        listUser.map((item, i) => {
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
                                        <a href="#" onClick={() => onClickDelete(i, item.id)} class="btn btn-danger"> Delete </a>
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