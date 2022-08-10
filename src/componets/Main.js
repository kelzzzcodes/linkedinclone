import Styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/profile.jpg" alt=" " />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/picture_icon.svg" alt=" " />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video_icon.svg" alt=" " />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event_icon.svg" alt=" " />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article_icon.svg" alt=" " />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
      <SharedActor>
        <a>
            <img src="/images/profile.jpg" />
            <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
            
            </div>
        
        </a>
        <button>
            <img src="images/ellipsis_h.png"/>
        </button>
      </SharedActor>
      <Description>
        Description
      </Description>
      <SharedImg>
      <img src="/images/walking-on-water.jpg" alt="" />
       
      </SharedImg>
      <SocialCounts>
      
        <li>
        <button>
          <img src="/images/clap.png " alt=""/>
          <img src="/images/chat.png " alt=""/>
         
        <span>75</span>
        </button>
        </li>
        <li>
          <a>2 comments</a>
        </li>
      
      
       
      </SocialCounts>
      <SocialActions>
      <button>
        <img src=" /images/like.png"  alt=""/>
        <span>Like</span>
      </button>
      <button>
        <img src="/images/comment.png" alt="" />
        <span>Comments</span>
      </button>
      <button>
        <img src="/images/share.png" alt="" />
        <span>Share</span>
      </button>
      <button>
        <img src="/images/send.png" alt="" />
        <span>Send</span>
      </button>
      </SocialActions>
      </Article>
    </Container>
  );
};

const Container = Styled.div` 
    grid-area:main;

`;

const CommonCard = Styled.div` 
    text-align:center;
    overflow:hidden;
    margin-bottom:0px;
    background-color:#ffff;
    border-radius:5px;
    position:relative;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0/15%),0 0 0 rgb(0 0 0/20%);
    padding:12px;

`;

const ShareBox = Styled(CommonCard)` 
    display:flex;
    flex-direction:column;
    color:#95bb7b;
    margin: 0 0 8px;
    background:white;
    div{
        button{
        outline:none;
        color:rgba(0,0,0,0.6);
        font-size:14px;
        line-height:1.33;
        min-height:48px;
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;
        
        }
       &:first-child{
           display:flex;
           align-items:center;
           padding:8px 16px 0px 16px;
           img{
               width:48px;
               height:48px;
               border-radius:50%;
               margin-right:8px;
               
               
               
           }
           button{
               margin:4px 0px;
               flex-grow:1;
               border-radius:35px;
               padding-left:16px;
               border:2px solid rgba(0,0,0,0.15);
               background-color:white;
               text-align:left;
               
               
           }
       }
       &:nth-child(2){
           display:flex; 
           
           justify-content:space-around;
           padding-bottom:4px; 
           button{
               img{
                   margin:0 4px 0 4px;
                   width:48px;
                   height:48px;
               }
               span{
                   color:#78b5f9;
               }
           }
       }
    }
`;

const Article=Styled(CommonCard)`
    padding:0;
    margin:0 0 8px;
    overflow:visible;
`
const SharedActor=Styled.div` 

    padding-right:40px;
    flex-wrap:nowrap;
    padding:12px 16px 0 ;
    margin-bottom:8px;
    align-items:center;
    display:flex;
    a{
        margin-right:12px;
        flex-grow:1;
        overflow:hidden;
        display:flex;
        text-decoration:none;
        img{
            width:48px;
            height:48px;
        }
        
        & > div{
            display:flex;
            flex-direction:column;
            flex-grow:1;
            flex-basis:0;
            margin-left:8px;
            overflow:hidden;
            span{
               text-align:left;
                &:first-child{
                    font-size:14px;
                    font-weight:700px;
                    color:rgba(0,0,0,1);
                    
                }
            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6);
                
            }
        }
    }
    button{
        position:absolute;
        right:12px;
        top:0px;
        background:transparent;
        border:none;
        outline:none;
       
        
    }
`

const Description=Styled.div` 
  padding: 0 16px;
  overflow:hidden;
  color:rgba(0,0,0,0.9);
  font-size:14px;
  text-align:left;
  
`
const SharedImg=Styled.div` 
display:block;
position:relative;
background-color:#f9fafb;
width:100%;
margin-top:8px;
img{
  width:100%;
  height:100%;
  object-fit:contain;
}


`

const SocialCounts=Styled.ul` 
  line-height:1.3;
  display:flex;
  align-items:center;
  overflow:auto;
  margin:0 16px;
  padding:8px  0px;
  border-bottom:1px solid #c9e5df;
  list-style:none;
  li{
    margin-right:5px;
    font-size:18px;
    button{
      display:flex;
      align-items:center;
      
      
      img{
        width:30px;
        height:30px;
        display:block;
        align:left;
        
      }
      span{
        margin-left:5px;
      }
    
    
    }
    
    
  }
`
const SocialActions=Styled.div` 
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin:0;
  min-height:40px;
  padding:4px 8px;
  button{
    display:inline-flex;
    align-items:center;
    padding:8px;
    color:#78b5f9;
    img{
      width:30px;
    }
    @media(min-width:768px){
      span{
        margin-left:8px;
      }
    }
  }
`
export default Main;
