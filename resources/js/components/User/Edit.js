import React, { useEffect, useState } from 'react';
import userServices from "../../services/Users"

function Edit(props) {

  const [ id, setId ] = useState(null);
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [adress, setAdress] = useState(null);
  const [email, setEmail] = useState(null);

  // const [id, setId] = useState(null);
  // const [name, setName] = useState("ppp");
  // const [email, setEmail] = useState(null);
  // const [city, setCity] = useState(null);
  // const [address, setAddress] = useState(null);
  // const [phone, setPhone] = useState(null);
  // const [rol, setRol] = useState(null);
  // const [selectedRol, setSelectRol] = useState(null);
  // const [listRol, setListRol] = useState([]);

  useEffect(() => {

    async function fetchDataUser() {
      let id = props.match.params.id;
      const res = await userServices.get(id);

      if (res.success) {
        console.log(res);
        const data = res.data
        setId(data.id)
        setName(data.name)
        setEmail(data.email)
        setLastname(data.lastname)
        setAdress(data.adress)
        setPhone(data.phone)
      }
      else {
        alert(res.message)
      }
    }
    fetchDataUser();

  }, [])

  const updateUser = async () => {

    const data = {
      name, lastname, phone, adress, email
    }

    const res = await userServices.update(data);

    if (res.success) {
      alert(res.message)
    }
    else {
      alert(res.message)
    }

  }

  return (
    <div>
      <h4>Edit User {id}</h4>
      <hr />
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nombre</label>
          <input type="text" class="form-control" value={name} 
          onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="lastName">Apellido</label>
          <input type="text" class="form-control" placeholder="Apellido" value={lastname} 
          onChange={(event)=>setLastname(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">Telefono </label>
          <input type="text" class="form-control" placeholder="123467890" value={phone}
          onChange={(event)=>setPhone(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Direccion</label>
          <input type="text" class="form-control" placeholder="Cra 145 # 145 a 66" value={adress}
          onChange={(event)=>setAdress(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com" value={email}
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button onClick={()=>updateUser()}
          class="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;