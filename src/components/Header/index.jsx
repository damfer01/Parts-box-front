import PartsBox from '../../assets/PartsBox.svg'
import { Logo } from "../logo"

import { HeaderView } from "./style"

export  const Header = () =>{
    return (
         <HeaderView>
            <Logo src={PartsBox}/>
         </HeaderView>
    )
}