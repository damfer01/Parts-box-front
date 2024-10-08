import CaixaSchema from '../../../schema/Caixa/CaixaSchema';
import { registerCaixa } from '../../../service/authCaixa';
import { CardSttyle } from "./style";

import { X } from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from '../../../store';

export function CardAdicionar({ showCard, onClose }) {

    const {
        user,
    } = useStore();

    const [pecas, setPecas] = useState([]);


    const handleAddPeca = () => {
        setPecas((value) => [...value, value.length])
    };

    const {
        handleSubmit,
        reset,
        register,
        formState: {
            isValid,
        }

    } = useForm({
        resolver: yupResolver(CaixaSchema),
        mode: 'onChange',
    });

    const onSubmit = async (_data) => {
        const {
            dono,
            marca,
            motor,
            data,
            pecas
        } = _data;

        const { success, result } = await registerCaixa(user.token,
            dono, marca, motor, data, pecas);

        if (success) {

            onClose();
        }
    };

    useEffect(() => {
        if (!showCard) {

            setPecas([])
            reset();
        }
    }, [showCard]);

    return showCard ? (
        <CardSttyle open  >

            <form onSubmit={handleSubmit(onSubmit)}>

                <button id='excluir' onClick={onClose}><X /></button>

                <input type="text" placeholder="Dono:  Obrigatorio" {...register('dono')} />
                <input type="text" placeholder="Marca:  Obrigatorio" {...register('marca')} />
                <input type="text" placeholder="Motor:  Obrigatorio" {...register('motor')} />

                {
                    pecas.map((peca, index) => (
                        <div key={index}>
                            <div></div>
                            <input className='foco' type="text" placeholder="peça: " {...register(`pecas[${peca}].nome`)} />
                            <input type="text" placeholder="Codigo:" {...register(`pecas[${peca}].codigo`)} />
                            <input type="text" placeholder="Medida:" {...register(`pecas[${peca}].medida`)} />
                        </div>
                    ))
                }

                <button onClick={handleAddPeca}>Adicionar-Peças</button>

                <button disabled={!isValid} type='submit' className="comfirmar">confirma</button>
            </form>

        </CardSttyle>
    ) : <></>
}