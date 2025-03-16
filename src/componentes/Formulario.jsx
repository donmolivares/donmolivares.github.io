import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

export default function Formulario() {
 const[Email,setEmail] = useState('')
 const[RepPassword,setRepPassword] = useState('') 
 const[Password,setPassword] = useState('') 
 const[Error,setError] = useState('') 

 



 const handleSubmit = (evento)=> {
    evento.preventDefault()
    if (Email === ''){
        alert('El Campo Email no puede estar Vacio !')
        setError(true)
        return
     }
     if (RepPassword === ''){
        alert('El Campo Repetir Email no puede estar Vacio !')
        setError(true)
        return
     }
     if (Password === ''){
        alert('El Campo Password no puede estar Vacio !')
        setError(true)
        return
     }
 
     {/* validacion largo input*/}
     if (Password.length < 6) {
        alert("La password Ingresada debe tener por lo menos 6 Caracteres");
        setError(true)
        return
      } 

      if (RepPassword.length < 6) {
        alert("La password re Ingresada debe tener por lo menos 6 Caracteres");
        setError(true)
        return
      } 

      if (Password != RepPassword) {
        alert("La password y la Ingresada nuevamente no concuerdan, favor revisar");
        setError(true)
        return
      } 



      setError(false)
      setRepPassword('')
      setPassword('')
      setEmail('')
      console.log('Se han enviado los Datos en forma Exitosa !!')
      return
      


    }

 const handleChange = (evento, elemento, setelemeto) => {
    setelemeto(evento.target.value)
    console.log(elemento)
 }

 
  return (
    <div className="Formulario_Datos">
        <Form className="formato" action="submit" onSubmit={(evento)=>handleSubmit(evento)}>

        <Form.Group className="mb-3" controlId="formmail">
                <h3>Ingrese su email</h3>
                <input className="text-muted w-2" id = "Email" value = {Email} type="email" placeholder="nombre@gmail.com" onChange= {(evento)=>handleChange(evento,Email,setEmail)}/>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formpassword">
                <h3>Ingrese su Contraseña</h3>
                <input className="text-muted" id = "Password" value = {Password} type="password" placeholder="Ingrese Contraseña" onChange= {(evento)=>handleChange(evento,Password,setPassword)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formreppassword">
                <h3>Confirme su Contraseña</h3>
                <input className="text-muted" id = "RepPassword" value = {RepPassword} type="password" placeholder="Ingrese Contraseña" onChange= {(evento)=>handleChange(evento,RepPassword, setRepPassword)}/>
        </Form.Group>

        <Button className= "btn btn-primary mt-3"type="submit">Enviar</Button>
        
        {Error === false? <p className='text-primary'>Se enviado los datos exitosa mente !!</p>:null}
        
        
        </Form>
    </div>
)}
