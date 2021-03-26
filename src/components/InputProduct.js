import React from 'react';
import ModalInput from "./ModalInput";


const InputProduct = ({header}) => {

    return (
        <div>
            <div className='products_header'>
                <div>
                    <img className="logo"/>
                    <ModalInput />
                </div>

            </div>
        </div>
    );
};

export default InputProduct;