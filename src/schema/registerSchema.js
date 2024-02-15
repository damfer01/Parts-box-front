import * as yup from 'yup'

const message = 'required'

const registerSchema = yup.object({
    cnpj: yup.string().required(message).min(14,'CNPJ contem 14 digitos').max(14,'CNPJ contem 14 digitos'),
    empresa: yup.string().required(message).min(5,'Minimo 5 caracteres'),
    password: yup.string().required(message).min(6,'minimo  8 caracteres'),
    confirmPassword: yup.string().required(message).min(6,'minimo 8 caracteres').oneOf([yup.ref('password') , null], 'Password must match'),
});

export default registerSchema;

