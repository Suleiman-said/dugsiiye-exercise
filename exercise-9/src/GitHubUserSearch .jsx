import { useState, useEffect } from "react";

const GitHubUserSearch = () =>{
    const [searchTerm, setSearchTerm] = useState('')
    const [userData, setUserDate] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=>{
        if(error){
            console.error('Error fetching github user.', error)
        }

    },[error])
    const handleSearch = async ()=>{
        if(!searchTerm) return
        setLoading(true)
        setError('')
        setUserDate(null)
        try{
            await new Promise((reselve)=>setTimeout(reselve,1000))
            const response = await fetch(`https://api.github.com/users/${searchTerm.toLowerCase()}`)
            if(!response.ok){
                throw new Error('gitHub user not found')
            }
            const data = await response.json()
            setUserDate(data)
        }catch(err){
            setError(err.message)
        } finally{
            setLoading(false)
        }
    }
    return(
        <div>
            <h2>Github User Search</h2>
            <input
                type="text"
                placeholder="Enter github username..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p> }
            {error && <p style={{color: 'red'}} >Error: {error}</p> }
            {userData && (
                <div style={{marginTop: '1rem'}} >
                    <h3>{userData.name || userData.login}</h3>
                    <img src={userData.avatar_url} alt={userData.login} width="100" style={{borderRadius: '50%'}} />
                    <p>Location: {userData.location || 'N/A'} </p>
                    <p>Public repos: {userData.public_repos} </p>
                </div>
            )}
        </div>
    )
}
export default GitHubUserSearch