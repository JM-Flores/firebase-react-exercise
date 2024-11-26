import { useEffect, useState } from "react";
import "../App.css";
import { app, database } from "../firebaseConfig";
import {
  getAuth,
} from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore'

const CrudUser = () => {
  const [dataArray, setDataArray] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const auth = getAuth();
  const dBInstance = collection(database, 'users');
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  const addData = () => {
    addDoc(dBInstance, data)
    .then(() => {
      alert('Data Sent');
      getData();
    })
    .catch((err) => {
      alert(err.message);
    })
  };

  const getData = async () => {
    const data = await getDocs(dBInstance);
    setDataArray(data.docs.map(item => {
      return {...item.data(), id: item.id};
    }));
  }

  const updateData = (id) => {
    let dataToUpdate = doc(database, 'users', id);
    updateDoc(dataToUpdate, {
      name: 'updated',
      email: 'updated@gmail.com'
    })
    .then(() => {
      alert('Data Updated');
      getData();
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  const deleteData = (id) => {
    let dataToDelete = doc(database, 'users', id);
    deleteDoc(dataToDelete).then(() => {
      alert('Data Deleted');
      getData();
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  useEffect(() => {
    getData();
  }, [dataArray])

return (
<>
    <header>Add Data</header>
    <input
    placeholder="Name"
    name="name"
    type="text"
    className="input-fields"
    onChange={(event) => handleInputs(event)}
    />
    <input
    placeholder="Email"
    name="email"
    type="email"
    className="input-fields"
    onChange={(event) => handleInputs(event)}
    />
    <button onClick={addData}>Add Data</button>

    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {dataArray.map(item => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
          <button onClick={() => updateData(item.id)}>Update</button>
        </td>
        <td>
          <button onClick={() => deleteData(item.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</>
)
}

export default CrudUser