import api  from "../config/api";

export async function login (empresa , password){
    try{
        const{data} = await api.post('/auth/login',{
            empresa,
            password,
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

export async function register(cnpj , empresa, password , confirmPassword){
    try {
        const {data} = await api.post('/auth/register' , {
            cnpj,
            empresa,
            password,
            confirmPassword,
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