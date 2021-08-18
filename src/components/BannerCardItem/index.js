import './index.css'

const BannerCard = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <div className={`${className} bannerOutline`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>Show More</button>
      </div>
    </div>
  )
}
export default BannerCard
