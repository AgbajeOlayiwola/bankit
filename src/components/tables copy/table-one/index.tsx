"use client"
import ScreenLoading from "@/component/animations/screan_loading"
import { paginate } from "@/utils/paginate"
import { useEffect, useState } from "react"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa6"
import { MdMoreHoriz } from "react-icons/md"
import styles from "./styles.module.css"
const TableOne = ({
  head,
  body,
  action,
  load,
  hasmore,
  openWith,
  openDep,
  pickUp,
}: {
  head: any
  body: any
  action: any
  load: any
  hasmore?: any
  openWith?: any
  openDep?: any
  pickUp?: any
}) => {
  const [moreStates, setMoreStates] = useState(body.map(() => false))
  const [checkAll, setCheckAll] = useState(false)
  const [individualChecks, setIndividualChecks] = useState(
    body.map(() => false)
  )

  const handleCheckAll = () => {
    setCheckAll(!checkAll)
    setIndividualChecks(individualChecks.map(() => !checkAll))
  }

  const handleIndividualCheck = (index: any) => {
    const newIndividualChecks = [...individualChecks]
    newIndividualChecks[index] = !newIndividualChecks[index]
    setIndividualChecks(newIndividualChecks)
    setCheckAll(newIndividualChecks.every((check) => check))
  }

  useEffect(() => {
    setCheckAll(individualChecks.every((check: any) => check))
  }, [individualChecks])

  const openMore = (index: any) => {
    const newMoreStates = [...moreStates]
    newMoreStates[index] = !newMoreStates[index]
    setMoreStates(newMoreStates)
  }
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalItems = body.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  const currentPageItems = paginate(body, currentPage, itemsPerPage)

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableCovDiv}>
        <table className={styles.customTable}>
          <thead>
            <tr>
              <th>
                {/* <label className={styles.container}>
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={handleCheckAll}
                  />
                  <span className={styles.checkmark}></span>
                </label> */}
              </th>
              {head.map((item: any, index: any) => {
                return (
                  <>
                    <th key={index}>{item}</th>
                  </>
                )
              })}
            </tr>
          </thead>
          {load ? (
            <div>
              <ScreenLoading />
            </div>
          ) : (
            <tbody className={styles.tbody}>
              {currentPageItems.map((item: any, index: any) => (
                <tr
                  onClick={() => pickUp(item)}
                  key={index}
                  className={styles.tableRow}
                >
                  <td>
                    <div className={styles.checkMore}>
                      {/* <label className={styles.container}>
                <input
                  type="checkbox"
                  checked={individualChecks[index]} // Use individual checkbox state
                  onChange={() => handleIndividualCheck(index)}
                />
                <span className={styles.checkmark}></span>
              </label> */}
                      {hasmore && (
                        <div className={moreStates[index] ? styles.moreBg : ""}>
                          <MdMoreHoriz onClick={() => openMore(index)} />
                        </div>
                      )}
                      {moreStates[index] && (
                        <div className={styles.more}>
                          <h2 onClick={openWith}>Withdraw</h2>
                          <h2 onClick={openDep}>Deposit</h2>
                        </div>
                      )}
                    </div>
                  </td>

                  {item?.tableOne && (
                    <td className={styles.name}>{item?.tableOne}</td>
                  )}
                  {item?.tableTwo && <td>{item?.tableTwo}</td>}
                  {item?.tableThree && <td>{item?.tableThree}</td>}
                  {item?.tableFour && <td>{item?.tableFour}</td>}
                  {item?.tableFive && <td>{item?.tableFive}</td>}
                  {item?.tableSix && <td>{item.tableSix}</td>}
                  {item?.tableSeven && (
                    <td>
                      <div
                        className={
                          item.tableSeven === "active"
                            ? styles.active
                            : styles.inactive
                        }
                      >
                        {item.tableSeven}
                      </div>
                    </td>
                  )}
                  {item?.tableEight && <td>{item.tableEight}</td>}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <hr className={styles.hr} />
      <div className={styles.pagination}>
        <div className={styles.pag}>
          {" "}
          <div className={styles.items}>
            {/* <span className={styles.current}>5</span>
            <p>Items per page</p> */}
          </div>
        </div>
        <div className={styles.currentPage}>
          <div className={styles.current}>
            {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= body.length}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableOne
