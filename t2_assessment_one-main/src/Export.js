import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Export = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);

        axios.post('http://localhost:8888/api/addPet', inputs)
        .then(function(response){
            console.log(response);

        });


    }

    return (
        <div>
          <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="names" type="text" placeholder='Name of Pet' onChange={handleChange}/>
            <select>
              <option selected disabled hidden name="species" onChange={handleChange}>Species of Pet</option>
              <option >Canine</option>
              <option >Feline</option>
              <option >Equine</option>
              <option >Rodent</option>
              <option >Avian</option>
              <option >Reptile</option>
            </select>
            <select>
              <option selected disabled hiddenname="gender"onChange={handleChange}>Gender/Sex of Pet</option>
              <option  >Male</option>
              <option >Female</option>
            </select>
            <input name="age" type="text" placeholder='Age of Pet (years)' onChange={handleChange}/>
            <input name="MicroChip " type="number" placeholder='Pet MicroChip Id' onChange={handleChange}/>
            <input name="petOwner" type="text" placeholder='Pet Owner Name' onChange={handleChange}/>
            <input name="ownerId" type="number" placeholder='Pet Owner ID Number' onChange={handleChange}/>
            <input type="origin" type="export" placeholder='Export Origin' onChange={handleChange}/>
            <input type="destination" type="export" placeholder='Export Destination' onChange={handleChange}/>

            <button type='submit'onClick={handleSubmit}>Lets Export That Pet!</button>

            

          </form>

        </div>

        </div>
    )
}

export default Export