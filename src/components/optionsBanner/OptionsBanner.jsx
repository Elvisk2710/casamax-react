/* eslint-disable react/prop-types */
import './OptionsBanner.css'
import { Player } from "@lottiefiles/react-lottie-player";
const OptionsBanner = ({animationData,title}) => {
  return (
    <>
    <a href="" className='optionsContainer'>
        <div className="image">
        <Player 
             autoplay
             loop
             src={animationData}
             style={{ height: "70%", width: "70%" }}
        />
        </div>
        <hr />
        <div className="title">
          <h2>
            {title}
          </h2>
        </div>
    </a>
    </>
  )
}

export default OptionsBanner
