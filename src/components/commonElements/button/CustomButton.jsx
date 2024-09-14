/* eslint-disable react/prop-types */
import './Button.css'
const CustomButton = (props) => {
    const title =  props.title
  return (
    <div className="button">
      <button>
        {title}
      </button>
    </div>
  )
}

export default CustomButton
