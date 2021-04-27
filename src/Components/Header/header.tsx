import {Conatiner, Content} from './styles';
import { FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
export function Header(){
    return(
        <Conatiner>
            <Content>
                <img src={Logo} alt="GoRestaurante"/>
                <nav>
                    <div>
                        <button 
                        type="button"
                        //onClick={}
                        >
                        <div className="text">Novo Prato</div>
                        <div className="icon">
                            <FiPlusSquare size={24} />
                        </div>
                        </button>
                    </div>
                </nav>
            </Content>
        </Conatiner>  
    );
}