'use client'
import { useState } from 'react';
import { Cont } from '../components/cont/Cont';
import { Popup } from '../components/popup/Popup';
import { Fahkwang } from 'next/font/google';

function State() {
    const [showPopup, setShowPopup] = useState(false);
    const [showMesage, setShowMessage] = useState('');
    const [showType, setShowType] = useState('');


    function handleShowPopup(message, type, time) {
        setShowPopup(true);
        setShowMessage(message);
        setShowType(type);

        setTimeout(() => {
            setShowPopup(false) } , 
            time);
        }
    

    return (
        <div>
            <button onClick={() => handleShowPopup('erro ao processar', 'error', 4000)}>Teste</button>
            {
                showPopup && (
                    <Popup
                        msg={showMesage}
                        type={showType}
                    />
                )
            }
        </div>
    );
}

export default State;