import Styled from "styled-components"
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) =>{
    return (
        <Container>
        <Section>
            <h5>
                <a>Hiring in a hurry ? -</a>
            </h5>
            <p>
                Find talented pros in recent time with Upwork and keep business moving
            
            </p>
        </Section>
            <Layout>
                <Leftside/>
                <Main/>
                <Rightside/>
            
            
            </Layout>
        
        </Container>
    )
    
};

const Container=Styled.div` 
padding-top:60px;
max-width:100%;

`
const Content=Styled.div`
    max-width:1128px;
    margin-left:auto;
    margin-right:auto;
   
    
`
const Section=Styled.section`
    min-height: 50px;
    padding:16px 0;
    box-sizing:content-box;
    text-align:center;
    text-decoration:underline;
    display:flex;
    justify-content:center;
    h5{
        color:#8a56c2;
        a{
            font-weight:700;
        }
    }
    p{
        font-size:14px;
        color:#43454f;
        font-weight:600;
        
    }
    @media(max-width:768px){
        flex-direction:column;
        padding:0 5px; 
        p{
            color:red;
        }
    }

 `
 const Layout = Styled.div` 
 display:grid;
 grid-template-areas: "leftside main rightside";
 grid-template-column:minmax(0, 5fr)minmax(0,12fr)minmax(300px,7fr);
 column-gap:25px;
 row-gap:25px;
 grid-template-row:auto;
 margin:25px;
 @media(max-width:768px){
     display:flex;
     flex-direction:column;
     padding:0 5px;
 }
 
 `
export default Home;