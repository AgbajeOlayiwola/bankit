import React from "react"
import Loader from "../../loader/loader"
import MiniProfile from "../../min-profile"
import "./styles.css"
const TableTwo = ({ tableHeaders, data, load, edit }) => {
  console.log(data)
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {tableHeaders.map((item, index) => {
              return <th key={index}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {load ? (
              <Loader />
            ) : (
              <>
                <td>{1}</td>
                <td>
                  <MiniProfile
                    name={data?.firstName}
                    last={data?.lastName}
                    email={data?.email}
                  />{" "}
                </td>
                <td>{data.lastName}</td>
                <td>{data.role}</td>
                <td>{data.status}</td>
                <td>
                  <div className="editDelete">
                    <div onClick={() => edit()}>Edit</div>
                    <div>Delete</div>
                  </div>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableTwo
