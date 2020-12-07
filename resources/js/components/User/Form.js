import React, { useEffect, useState } from 'react';
import userServices from "../../services/Users"

function Form() {
    const [name, setName] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [adress, setAdress] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        async function fetchDataRol() {
            // load data from API
            const res = await userServices.list();
            setListUser(res.data)
        }
        fetchDataRol();
    }, []);

    const saveUser = async () => {

        const data = {
          name, lastname, phone, adress, email
        }
        const res = await userServices.save(data);
    
        if (res.success) {
          alert(res.message)
        }
        else {
          alert(res.message)
        }
      }
    return (
        <div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" 
                    onChange={(event)=>setName(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="lastName">Apellido</label>
                    <input type="text" class="form-control" placeholder="Apellido" 
                    onChange={(event)=>setLastname(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="phone">Telefono </label>
                    <input type="text" class="form-control" placeholder="123467890" 
                    onChange={(event)=>setPhone(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="address">Direccion</label>
                    <input type="text" class="form-control" placeholder="Cra 145 # 145 a 66" 
                    onChange={(event)=>setAdress(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="you@example.com" 
                    onChange={(event)=>setEmail(event.target.value)}/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-block" type="submit"
                    onClick={()=>saveUser()}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Form;