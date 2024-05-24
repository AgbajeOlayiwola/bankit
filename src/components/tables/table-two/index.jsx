import React from "react"
import Loader from "../../loader/loader"
import MiniProfile from "../../min-profile"
import "./styles.css"
const TableTwo = ({ tableHeaders, data, load, edit, openDelModal }) => {
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
          {load ? (
            <Loader />
          ) : (
            data?.user?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <MiniProfile
                      name={item.firstName}
                      last={item?.lastName}
                      email={item?.email}
                    />{" "}
                  </td>
                  <td>{item.lastName}</td>
                  <td>{item.role}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className="editDelete">
                      <div onClick={() => edit(item)}>Edit</div>
                      <div onClick={() => openDelModal(item?.id)}>Delete</div>
                    </div>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableTwo
