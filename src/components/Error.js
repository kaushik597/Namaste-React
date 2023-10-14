import {useRouteError} from "react-router-dom"
const Error =()=>{
    const err= useRouteError();
    return (<div>
        <h1>Ayyaaaa!!</h1>
        <h2>Emo ayyindi.... below is the reason</h2>
        <h3>{err.data}</h3>

    </div>)
}
export default Error;