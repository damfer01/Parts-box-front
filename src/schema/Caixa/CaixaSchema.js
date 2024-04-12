import * as yup from 'yup'

const message = 'campo obrigatorio'

const CaixaSchema = yup.object({
    dono: yup.string().required(message),
    marca: yup.string().required(message),
    motor: yup.string().required(message),
});

export default CaixaSchema;