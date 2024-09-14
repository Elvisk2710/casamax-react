/* eslint-disable react/prop-types */
import './AnimatedButton.css'
const AnimatedButton = (props) => {
    const title =  props.title
  return (
    <div id="animatedButton">
      <button>
        {title}
      </button>
    </div>
  )
}

export default AnimatedButton
