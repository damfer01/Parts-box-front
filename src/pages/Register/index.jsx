
import PartsBox from '../../assets/PartsBox.svg';
import { Input } from "../../components/Input";
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import registerSchema from "../../schema/registerSchema";
import { Spacing } from "../../components/Spacing";
import { Logo } from '../../components/logo';
import { Actions, Form } from '../../components/Form';
import { Main } from '../../components/Main/main';
import { Button } from "../../components/Button";
import {  useNavigate } from 'react-router-dom';
import { register } from '../../service/authServices';
import { useStore } from '../../store';




export default function Register() {
    const navigate = useNavigate();

    const {
        user,

    } = useStore();
   
   

    const {
        handleSubmit,
        control,
        formState:{
            isValid,
        }
        

    } = useForm({
        resolver: yupResolver(registerSchema),
       mode: 'onChange',
    });

    const onSubmit = async (data) =>{
        const{
            cnpj,
            empresa,
            password,
            confirmPassword,
        } = data;
        
        const {success, message , result } = await register(cnpj, empresa , password, confirmPassword);

        alert(message);


        if(success) {
            user.setUserData(result);

         navigate('/');
        }
    };
    
    return(
        <Main>
            <Logo src={PartsBox} />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Spacing $bottom={16}>
                <Input
                control={control}
                name='cnpj'
                label='cnpj'
                
                />
                 </Spacing>
                <Spacing $bottom={16}>
                <Input
                control={control}
                name='empresa'
                label='empresa'
                
                />
                </Spacing>

                <Spacing $bottom={36}>
                <Input
                control={control}
                name='password'
                label='password'
                type='password'
                
                />
                </Spacing>
                <Spacing $bottom={36}>
                <Input
                control={control}
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                
                />
                </Spacing>
                <Actions>
                    <Spacing $bottom={24}>
                        <Button disabled={!isValid} $color="secondary" type='subnit'>SALVAR</Button>
                    </Spacing>

                    <Spacing>
                        <Button  onClick={() => navigate(-1)} type='button' $color="primaryDark">VOLTAR</Button>
                    </Spacing>
                </Actions>
                
            </Form>
        </Main>
    );
};

