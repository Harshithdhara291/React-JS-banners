// Write your code here.
import './index.css'

const Banners = props => {
  const {bannerDetails, key} = props
  const {headerText, description, className} = bannerDetails
  console.log(key)

  return (
    <li className="main-cont">
      <li className={className}>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </li>
    </li>
  )
}

export default Banners
