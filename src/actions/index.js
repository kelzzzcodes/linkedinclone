import { auth,provider } from "../firebase";
export function signInAPI (){
    return (dispatch) =>{
        auth.signInwithPopup(provider).then((payload)=>{
            console.log(payload);
        })
        .catch((error) => alert(error.message));
    };
    
}