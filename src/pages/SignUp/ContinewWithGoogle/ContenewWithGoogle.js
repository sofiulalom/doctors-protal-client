import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';

const ContenewWithGoogle = () => {
    const { ContenewWithGoogle}=useContext(AuthContext);
    const handleContenewWithGoogle=()=>{
         const gooogleProvider=new GoogleAuthProvider();
        ContenewWithGoogle(gooogleProvider)
         .then(result=> {
            const user=result.user;
            console.log(user);
         })
         .catch(e => console.log(e))
    }
    return (
        <div>
            <button onClick={handleContenewWithGoogle} className='btn btn-outline w-full text-xl'>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default ContenewWithGoogle;