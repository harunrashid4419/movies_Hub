import { useEffect, useState } from "react"

const useAdmin = (email: any) =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
    useEffect(() =>{
        if(email){
            fetch(`https://movie-hub-server.vercel.app/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsLoader(false);
                })
        }
    }, [email])
    return [isAdmin, isLoader];
}

export default useAdmin;