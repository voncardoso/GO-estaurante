import { useState } from 'react';
import  Modal  from 'react-modal';
import {Conatiner, Content} from './styles';
import { FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';




export function Header(){
    const [isNewTransactionModalOpen, setIsisNewTransactionModalOpen] = useState(false);
  
    function HandleOpenNewTransactionModal(){
        setIsisNewTransactionModalOpen(true);
    }

    function HandleCloseNewTransactionModal(){
        setIsisNewTransactionModalOpen(false);
    }
    
    return(
        <Conatiner>
            <Content>
                
                <img src={Logo} alt="GoRestaurante"/>
                <nav>
                    <div>
                        <button 
                        type="button"
                        onClick={HandleOpenNewTransactionModal}
                        >
                        <div className="text">Novo Prato</div>
                        <div className="icon">
                            <FiPlusSquare size={24} />
                        </div>
                        </button>
                    </div>
                </nav>

                <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={HandleCloseNewTransactionModal}
                >
                    <h2>Ola Pega porra</h2>
                </Modal>
            </Content>
        </Conatiner>  
    );
}