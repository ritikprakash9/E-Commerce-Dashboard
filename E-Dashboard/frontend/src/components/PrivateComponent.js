import { Outlet, Navigate } from 'react-router-dom';

function PrivateComponent() {

    const auth = localStorage.getItem("user");

    function val(){
        if(auth){
             return <Outlet />
        }

        else{
            return <Navigate to='/signup'></Navigate>
        }
    }
    return val();
}

export default PrivateComponent;