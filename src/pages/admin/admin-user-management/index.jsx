import React, { useState } from "react"
import { useDispatch } from "react-redux"
// import {
//   useDeleteAdminManagmentByIDQuery,
//   useGetAdminManagmentQuery,
// } from "../../../redux/api/queryApi"
import PriButton from "../../../components/primary-button/priButton"
import "./styles.css"
const AdminUserManagement = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(true)
  const options = ["option1", "option2", "option3"]

  return (
    <div className="payment_outer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "17px",
          flexDirection: "column",
        }}
      >
        <h2>Account Statement</h2>
        <h6>Generate your account statement here </h6>
      </div>
      <br />
      <div className="payment_inner">
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <select>
                <option>Select account type</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div className="step-one-groups" style={{ width: "100%" }}>
            <div className="step-one-single">
              <div>
                <input
                  type="date"
                  placeholder="Start date"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div className="step-one-groups" style={{ width: "100%" }}>
            <div className="step-one-single">
              <div>
                <input type="date" placeholder="End date" required="required" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <div className="step-one-groups" style={{ width: "100%" }}>
            <div className="step-one-single">
              <div>
                <div>
                  <select>
                    <option>Select format type</option>
                    <option>DOCX</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div style={{ display: "flex", gap: "30px" }} className="buttons_flex">
          <PriButton
            text="Cancel"
            secondaryButton={true}
            active={true}
            action={null}
            load={null}
          />

          <PriButton text="Proceed" active={true} action={null} load={null} />
        </div>
      </div>
    </div>
  )
}

export default AdminUserManagement
