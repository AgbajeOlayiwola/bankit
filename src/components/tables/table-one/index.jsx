import React from "react"
import Loader from "../../loader/loader"
import MiniProfile from "../../min-profile"
import "./styles.css"
const TableOne = ({ head, body, action, load }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {head.map((item, index) => {
              return <th key={index}>{item}</th>
            })}
          </tr>
        </thead>
        {load ? (
          <Loader />
        ) : (
          <tbody>
            {body.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td onClick={() => action(item)}>
                    {" "}
                    <MiniProfile
                      name={item?.User?.firstName}
                      last={item?.User?.lastName}
                      email={item?.User?.email}
                    />
                  </td>
                  <td>{item?.point}</td>
                  <td>{item?.pointType}</td>
                  <td>{item?.createdAt.split("T")[0]}</td>
                  <td>
                    <div className={item?.status}>{item?.status}</div>
                  </td>
                  <td className="more">{item?.titleSeven}</td>
                </tr>
              )
            })}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default TableOne
