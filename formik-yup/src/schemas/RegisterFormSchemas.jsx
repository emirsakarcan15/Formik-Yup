import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Entrez un e-mail valid s'il vous plaît").required("Entrez un e-mail valid s'il vous plaît"),
    age: yup.number().positive("Entrez un âge valid s'il vous plaît").integer("Entrez un âge valid s'il vous plaît").required("Entrez un âge valid s'il vous plaît"),
    motDePasse: yup.string().required("Entrez un mot de passe valid s'il vous plaît"),
    motDePasse2: yup.string().oneOf([yup.ref('motDePasse', yup.motDePasse)]).required("Les mots de passe ne sont pas les mêmes")
})