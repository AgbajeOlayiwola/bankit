import ScreenLoading from "@/component/animations/screan_loading"
import Image from "next/image"
import styles from "./styles.module.css"
const SideTable = ({
  sign,
  jsonData,
  load,
}: {
  sign: string
  jsonData: any
  load: any
}) => {
  console.log(jsonData)
  return (
    <div className={styles.side}>
      {sign}
      <div className={styles.sideFlexstr}>
        {load ? (
          <ScreenLoading />
        ) : (
          jsonData.map((item: any, index: any) => (
            <div className={styles.sideFlex} key={index}>
              <div className={styles.imageFlex}>
                <Image src={item.imageSrc} height={49} width={49} alt="image" />
                <div className={styles.date}>
                  <h4>{item.title}</h4>
                  <h5>{item.subtitle}</h5>
                </div>
              </div>

              <div className={styles.date}>
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
