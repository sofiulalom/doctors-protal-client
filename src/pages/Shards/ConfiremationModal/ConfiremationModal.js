import React from 'react';

const ConfiremationModal = ({title, message, closedModal,modalData,successAction, successDelete}) => {
    return (
        <div>
       

        <input type="checkbox" id="Confiremation-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{message}</p>
            <div className="modal-action">
            <label 

            onClick={()=> successAction(modalData)}
             htmlFor="Confiremation-modal" className="btn btn-primary">{successDelete}</label>
            <button onClick={closedModal}  className='btn btn-outline'>cancel</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ConfiremationModal;