import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})
    async function signIn({email, password}){
        try{
            const response = await api.post(
                "/sessions",
                {email, password}
            )
            const {user, token} = response.data
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token})

            localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodExplorer:token", JSON.stringify(token))

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o login")
            }
        }
    }

    useEffect(()=>{
        const user =  localStorage.getItem("@foodExplorer:user")
        const token =  localStorage.getItem("@foodExplorer:token")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    async function updateProfile({user, avatarFile}){
        try{
            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar

            }
            await api.put("/users", user)
            localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
            setData({user, token: data.token})
            alert("Perfil atualizado")

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@foodExplorer:user")
        localStorage.removeItem("@foodExplorer:token")

        setData({})
    }

    async function sendNewMenu(title, description, tags, price, category, avatarFile){
        try{ 
            const response = await api.post("/menus", {
                title,
                description,
                tags,
                price, 
                category
            })

            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                await api.patch(`/menus/${response.data}`, fileUploadForm)
            }

            alert("Prato criado com sucesso")

        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Prato não cadastrado")
            }

        }
    }
    async function sendEditMenu(title, description, tags, price, category, id, avatarFile){
        try{ 
            await api.put(`/menus/${id}`, {
                title,
                description,
                tags,
                price, 
                category
            })

            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                await api.patch(`/menus/${id}`, fileUploadForm)
            }

            alert("Prato atualizado com sucesso")

        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Prato não atualizado")
            }

        }
    }

    return(
        <AuthContext.Provider value={{signIn, user: data.user, signOut, updateProfile, sendNewMenu, sendEditMenu}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export {AuthProvider, useAuth}