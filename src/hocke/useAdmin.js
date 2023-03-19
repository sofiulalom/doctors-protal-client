import { useEffect, useState } from "react"

const  useAdmin=email=>{
     const [isAdmin, setIsAdmin]=useState(false)
     const [isAdminLowading, setIsAdminlowading]=useState(true)
     useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setIsAdmin(data.isAdmin)
                setIsAdminlowading(false)
            })
            
        }
    
     }, [email])
     return [isAdmin, isAdminLowading]
}
export default useAdmin;