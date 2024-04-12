
import PartsBox from '../../assets/PartsBox.svg';
import { Input } from "../../components/Input";
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import loginSchema from "../../schema/loginSchema";
import { Spacing } from "../../components/Spacing";
import { Logo } from '../../components/logo';
import { Actions, Form } from '../../components/Form';
import { Main } from '../../components/Main/main';
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/index';
 import { login } from '../../service/authServices';



export default function Login() {
    const navigate = useNavigate();

    const {
        user,

    }=useStore();

    const {
        handleSubmit,
        control,
        formState:{
            isValid,
        }
        

    } = useForm({
        resolver: yupResolver(loginSchema),
       mode: 'onChange', 
       defaultValues:{
        empresa : "",
        password : "",
       }
    });

    const onSubmit = async (data) =>{
        const{
            empresa,
            password,
        }= data;

        const {success , message, result} = await login(empresa, password);

        alert(message);

        if(success){
            user.setUserData({
                name: result.empresa,
                token: result.token,
            });

            navigate('/caixa');
        } 
        
    };
    
    return(
        <Main>
            <Logo src={PartsBox} />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Spacing $bottom={20}>
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
                label='senha'
                type='password'
                
                />
                </Spacing>
                <Actions>
                    <Spacing $bottom={24}>
                        <Button disabled={!isValid} $color="secondary" type='subnit'>ENTRAR</Button>
                    </Spacing>

                    <Spacing>
                        <Button  onClick={() => navigate('/register')} type='button' $color="primaryDark">CADASTRA</Button>
                    </Spacing>
                </Actions>
                
            </Form>
        </Main>
    );
};