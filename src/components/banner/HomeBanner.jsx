import './HomeBanner.css';
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/animations/student-sitting.json";
import SearchCard from '../searchCard/SearchCard';
import AnimatedButton from '../commonElements/button/AnimatedButton';
import OptionsBanner from '../optionsBanner/OptionsBanner';
import studentAnimation from '../../assets/animations/student.json';
import houseAnimation from '../../assets/animations/house.json';
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="left-banner">
        <div className="heading">
        <h1>
            Find The Best Accommodation For Your Needs
        </h1>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <p>
            Discover Your Ideal Study Haven: We Connect Students with Top-Tier Accommodation Nationwide.
            </p>
            <div className="know-more">
            <AnimatedButton title={'Get To Know Us!'} />
            </div>
            <div className="services">
              <OptionsBanner title={'Advertise With Us!'} animationData={houseAnimation}/>
              <OptionsBanner title={'Explore Homes!'} animationData={studentAnimation}/>
            </div>
          </div>
          <div className="bottom-right">
            <SearchCard />
          </div>
        </div>
      </div>
      <div className="right-banner">
        <Player 
             autoplay
             loop
             src={animationData}
             style={{ height: "160%", width: "160%" }}
        />
      </div>
    </div>
  )
}

export default HomeBanner
