import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const user = useSelector(state => state.user.value)

    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(user).length == 0) {
            navigate('login')
        } 
    }, [])

    return children
}

export default PrivateRoute