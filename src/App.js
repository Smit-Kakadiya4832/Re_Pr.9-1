import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
  //   fetch(`https://dummyjson.com/products`)
  //     .then(res => res.json())
  //     .then(data => setRecord(data.products))
  //     .catch(err => console.log(err));
  axios.get(`https://dummyjson.com/products`)
  .then((res)=>{
    setRecord(res.data.products)
  })
  .catch((err)=>{
    console.log(err);
    return false;
  })
  },[])
  console.log(record);
  
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>description</td>
            <td>price</td>
            <td>stock</td>
            <td>discountPercentage</td>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val) => {
              const { id, title, description,price, stock, discountPercentage } = val
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td>{discountPercentage}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
