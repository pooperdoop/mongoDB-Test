
export const loginCheck = async(e, email, password) => {

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
        if(!res.ok){
        }
    } catch (error) {
        return {success: false, message:"Account does not Existssss"};  
    }

};