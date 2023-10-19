export const SlideImg = ({ photoId, handleClickArrowMinus, handleClickArrowPlus, handleClickBar}) => {
  return (
    <div className="slide-show" style={{ backgroundImage: `url('https://raw.githubusercontent.com/Leo5233/source/master/capstone-starter/cover${photoId}.png')` }}>
      <div className="previous-slide" onClick={handleClickArrowMinus}>《</div>
      <div className="next-slide" onClick={handleClickArrowPlus}>》</div>
      <div className="slide-bars" onClick={handleClickBar}>
        <div className="slide-bar" data-id='1'></div>
        <div className="slide-bar" data-id='2'></div>
        <div className="slide-bar" data-id='3'></div>
      </div>
    </div>
  )
}