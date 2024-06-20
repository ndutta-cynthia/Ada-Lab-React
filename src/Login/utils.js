const baseUrl = process.env.REACT_BASE_URL;
    console.log({baseUrl});
    export const login = async({username, password})=>{
        try{
            const response = await fetch(`${baseUrl}/auth/login`,{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },
                body:JSON.stringify({username,password})
                    
            })
            return response.json()
        }
        catch(error){
            return `Error during login: ${error.message}`
        }
    }