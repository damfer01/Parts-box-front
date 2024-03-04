import api  from "../config/api";

export async function criarCaixa (dono, marca, motor, _data,pecas){
    try{
        const{data} = await api.post('/caixa',{
            dono,
            marca,
            motor,
            data: _data,
            pecas
        });
        return data;
    } catch (err){
        if(err.response){
            const {data} = err.response;

            return{
                success: data.success,
                message: data.message,
            };
        }else{
            return{
                success: false ,
                message: "falha ao se comunicar com o servidor !!",
            }
        }
    }
}

export async function registerCaixa(dono, marca, motor, _data,pecas){
    try {
        const {data} = await api.post('/caixa' , {
            dono,
            marca,
            motor,
            data: _data,
            pecas,

        });
        return data;
    }catch (err){
        if(err.response) {
            const {data} = err.response;

            return{
                success:data.success,
                message: data.message,

            };
        }else{
            return {
                success:false,
                message:"Falha ao se comunicar com o servidor!"
            };
        }
    }
};
export{};