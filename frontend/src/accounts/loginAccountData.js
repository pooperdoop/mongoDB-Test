import { useNavigate } from 'react-router-dom';

export const loginCheck = async(e, email, password, navigate) => {

    e.preventDefault();
    if(!email || !password){
        return {success: false, message:"Account does not Existssss"};
    }

    try {
        const res = await fetch("/api/account/Login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await res.json();
        console.log(data)

        if(res.status === 200){
            navigate('/Home');
        }
    } catch (error) {
        return {success: false, message:"Account does not Existssss"};  
    }

};