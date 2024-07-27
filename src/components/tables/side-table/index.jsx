import "./sidetable.css"
const SideTable = ({ sign, jsonData, load }) => {
  return (
    <div className={"side"}>
      {sign}
      <div className={"sideFlexstr"}>
        {jsonData?.lenght <= 0 ? (
          <h2>No transactions</h2>
        ) : (
          jsonData?.map((item, index) => (
            <div className={"sideFlex"} key={index}>
              <div className={"imageFlex"}>
                <div className="bankImageCover">
                  <img src={item.imageSrc} height={24} width={24} alt="image" />
                </div>
                <div className={"dates"}>
                  <h4>{item.title}</h4>
                  <h5>{item.subtitle}</h5>
                </div>
              </div>

              <div className={"date"}>
                <h6>{item.date}</h6>
                <p>{item.rate}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SideTable
