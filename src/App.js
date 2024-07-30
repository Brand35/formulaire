import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"

const App =()=>{
const {register, handleSubmit , formState: {errors}} = useForm();
const dispatch= useDispatch();


const onSubmit= (data)=>{
 console.log(data);
 dispatch({type: 'REGISTER_USER', payload: data});
};
return(
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Nom :</label>
      <input {...register('Nom', { required: true})}/>
      {errors.Nom && <span>Ce champ est requis</span>}
    </div>
    <div>
      <label>Prenom :</label>
      <input {...register('Prenom', { required: true})}/>
      {errors.Prenom && <span>Ce champ est requis</span>}
    </div>
    <div>
      <label>Âge</label>
      <input type='number' { ...register ('age', {required: true, validate: value  => value>18 || "Vous devez avoir plus de 18 ans"})}/>
      {errors.age && <span>{errors.age.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type='email' { ...register ('email', {required: true})}/>
      {errors.email && <span>{errors.age.email}</span>}
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Ce champ est requis</span>}
      </div>
      <button type='submit'>"S'inscrire</button>
  </form>
);
};

export default App;