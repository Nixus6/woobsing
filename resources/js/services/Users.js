const baseUrl = "http://localhost:8000/api/user"
import axios from "axios";
const user = {};

// user.list = async () => {
//   const urlList = baseUrl+"/role"
//   const res = await axios.get(urlList)
//   .then(response=> {return response.data })
//   .catch(error=>{ return error; })
//   return res;
// }

user.listUser = async () => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response=>{ return response.data; })
    .catch(error=>{ return error; })
    return res;
  }

user.save = async (data) => {
  const urlSave= baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

export default user