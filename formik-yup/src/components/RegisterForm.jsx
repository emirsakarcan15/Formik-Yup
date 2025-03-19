import React from 'react'
import { useFormik } from 'formik';
import '/Users/emirsakarcan/Desktop/Formik and Yup/Formik and Yup/src/css/RegisterForm.css'
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(()=> {
            action.resetForm();
        }, 2000)
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
          email: "",
          age: "",
          motDePasse: "",
          motDePasse2: ""
        },
        validationSchema : registerFormSchemas,
        onSubmit : submit
    });
    
  return (
    <div>
        <div className='flex-column'>
            <form className='flex-column' onSubmit={handleSubmit} id="wrapper">

                <div className="form-elements">
                    <label>Email : </label>
                    <input name="email" /* name propertysi ile valuesdaki keyler aynı olmalıdır yoksa inputa hiçbirşey yazılamaz */ className="form-element-inputs" value={values.email} onChange={handleChange} type="text" id="form-email" placeholder='Entrez votre e-mail'/>    
                </div>
                {errors.email && <p className='input-error'>{errors.email}</p>}

                <div className="form-elements">
                    <label>Age : </label>
                    <input name="age" type="number" className="form-element-inputs" value={values.age} onChange={handleChange} id="form-age" placeholder='Entrez votre age'/>
                </div>
                {errors.age && <p className='input-error'>{errors.age}</p>}

                <div className="form-elements">
                    <label>Mot de Passe : </label>
                    <input name="motDePasse" className="form-element-inputs" value={values.motDePasse} onChange={handleChange} type="password" id="form-mot-de-passe" placeholder='Entrez votre mot de passe'/>
                </div>
                {errors.motDePasse && <p className='input-error'>{errors.motDePasse}</p>}

                <div className="form-elements">
                    <label>Mot de Passe (confirmation) : </label>
                    <input name="motDePasse2" className="form-element-inputs" value={values.motDePasse2} onChange={handleChange} type="password" id="form-mot-de-passe-2" placeholder='Confirmez votre mot de passe'/>
                </div>
                {errors.motDePasse2 && <p className='input-error'>{errors.motDePasse2}</p>}
                <div id="button-div" >
                    <button type="submit" id="inscrire-button">S'INSCRIRE</button>
                </div>
            </form>
    
        </div>
    </div>
  )
}

export default RegisterForm