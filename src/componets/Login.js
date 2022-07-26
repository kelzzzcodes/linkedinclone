import  Styled  from "styled-components";
import {connect} from "react-redux" ;
import {signInAPI} from "../actions" ;
import {Navigate} from "react-router-dom";


const Login =(props) =>{
    return (
        <Container>
        ( props.user && <Navigate to='/home' />)
            <Nav>
                <a href='#'>
                    <img src='/images/login-logo.svg'/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign In </SignIn>
                </div>  
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional comunity</h1>
                    <img src='/images/login-hero.svg' alt=''/>
                </Hero>
                <Form>
                    <Button onClick= {()=> props.signIn()} >
                        <img src='images/google.svg'  alt='' />
                        Sign in with Google
                    </Button>
                
                
                </Form>
                
            </Section>

        </Container> 
       
       )
    
    
    
}
   
    


const Container = Styled.div`
    padding:0px;
`
const Nav =Styled.nav` 
    max-width:1128px;
    margin:auto;
    padding:12px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap:nowrap;
    /* & > a this means anything inside the a tag should get the styling given to it  */
    & > a{
        width:135px;
        height:34px;
        @media(max-width:768px){
            padding:0 5px; 
        }
    }
`

const Join=Styled.a` 
    font-size:16px;
    padding:10px 12px;
    text-decoration:none;
    border-radius:4px;
    color:rgba(0,0,0,0.8);
    margin-right:12px;
    &:hover{
        background-color:rgba(0,0,0,0.08);
        color:rgba(0,0,0,0.9);
        text-decoration:none;
    }

`

const SignIn=Styled.a` 
 box-shadow: inset 0 0 0 1px #B1D4E0;
 color: #145DA0;
 border-radius:24px;
 transition-duration:167ms;
 font-size:16px;
 font-weight:600px;
 line-height:40px;
 padding:10px 24px;
 text-align:center;
 background-color: rgba (0,0,0,0);
 &:hover {
     background-color: rgba(112,101,249,0.15) ;
     color:#0a66c2;
     text-decoration:none;
 }


`

const Section= Styled.section` 
    display:flex;
    align-content:start;
    min-height:700px;
    padding-bottom:138px;
    padding-top:40px;
    padding:60px 0;
    position: relative ;
    flex-wrap:wrap; 
    width:100%;
    max-width:1128px;
    align-items:center;
    margin:auto;
    @media(max-width:768px){
        margin:auto;
        min-height:0px;
    }
`
const Hero=Styled.div` 
    width:100%%;
    h1{
        padding-bottom:0;
        width:55%;
        font-size:56px;
        color:#2977c9;
        font-weight:200;
        line-height:70px;
        @media(max-width:768px){
            text-align:center;
            font-size:20px;
            width:100%;
            line-height:2;
        }
    }
    img{
        /* z-index:-1; */
        width:700px;
        height:670px;
        position:absolute;
        bottom:-2px;
        right:-150px;
        @media(max-width:768px){
            top:230px;
            width:initial;
            position:initial;
            height:initial;
        }
        
        
        
    }
` 

const Form =Styled.div` 
    margin-top:100px;
    width:408px;
    @media(max-width:768px){
        margin-top:20px;
    }
` 

const Button= Styled.button` 
    display:flex;
    justify-content:center;
    background-color:#ffff;
    align-items:center;
    height:56px;
    width:100%;
    border-radius:28px;
    box-shadow:inset 0 0 0 1px rgb(0 0 0/60%),
    inset 0 0 0 2px rgb(0 0 0/0%), inset 0 0 0 1px rgb(0 0 0/0%);
    vertical-align:middle;
    z-index:0;
    transition-duration:17ms;
    font-size:20px;
    color:rgba(0,0,0,0.6);
    &:hover{
        background-color:rgba(207,207,207,0.25);
        color:rgba(0,0,0,0.75);
        
    }
    

`

const mapStateToProps=(state) => {
    return {}
};
const mapDispatchToProps=(dispatch) => ({
    signIn:()=>dispatch(signInAPI())
    
});


export default connect(mapStateToProps,mapDispatchToProps)(Login)
 