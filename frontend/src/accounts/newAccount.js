import { create } from 'zustand';

export const createNewAccount = create((set) => ({
    accounts: [],
    setAccounts: (accounts) => set({accounts}),
    createAccount: async(newAccount) => {
        if(!newAccount.name || !newAccount.userName || !newAccount.email || !newAccount.password){
            return {success: false, message:"Make sure all fields are filled!"}
        } 

        const res = await fetch("/api/account/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newAccount)
        });

        const data = await res.json();
        set((state) => ({accounts:[...state.accounts, data.data]}))
        return {success: true, message:"Account created"}
    }

}));