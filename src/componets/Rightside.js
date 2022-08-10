import Styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your Feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all Recommendations
          <img src="/images/right-icon.svg" alt=" " />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg " />
      </BannerCard>
    </Container>
  );
};

const Container = Styled.div` 
    grid-area:rightside;

`;
const FollowCard = Styled.div` 
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

const Title = Styled.div` 
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:16px;
    width:100%;
    color:rgba(0,0,0,0.6);
    
 
 `;

const FeedList = Styled.ul` 
    margin-top:16px;
    li{
        display:flex;
        align-items:center;
        margin:12px;
        position:relative;
        font-size:14px;
        
        & > div{
            display:flex;
            flex-direction:column;
        }
        button{
            background-color:transparent;
            color:rgba(0,0,0,0.6);
            box-shadow:inset 0 0 0 1px solid rgba(0,0,0,0.6);
            padding:16px;
            align-items:center;
            border-radius:15px;
            box-sizing:border-box;
            font-weight:600;
            display:inline-flex;
            max-height:32px;
            max-width:480px;
            text-align:center;
            outline:none;
            
            
            
            
            
            
            
        }
    }
 `;

const Avatar = Styled.div` 
    background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
    background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
 
` ;
const Recommendation = Styled.a` 
    color:#0a66c2;
    display:flex;
    align-items:center;
    font-size:14px;
    
 ` ;
const BannerCard = Styled(FollowCard)`  
 
 img {
    width: 100%;
    height: 100%;
  }
 
 `;

export default Rightside;
