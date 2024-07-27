import { useFormik } from "formik"
import React from "react"
import * as yup from "yup"
import {
  useGetBillerCatsQuery,
  useGetBillersQuery,
} from "../../../../../redux/api/queryApi"
import PriButton from "../../../../primary-button/priButton"
import "./step1.css"
const AirtimeStepOne = ({ nextPage }) => {
  const formik = useFormik({
    initialValues: {
      nework: "",
      phonenumber: "",
      amount: "",
    },
    validationSchema: yup.object({
      network: yup.string().trim().required("Old password is required"),
      phonenumber: yup.string().trim().required("Old password is required"),
      amount: yup.string().required("Please add accpount number"),
    }),
    onSubmit: (values) => {
      const data = {
        accountNumber: values?.accountNumber,
      }
    },
  })
  const {
    data: getBillerCats,
    isLoading: getBillerCatsLoad,
    isSuccess: getBillerCatsSuccess,
    isError: getBillerCatsFalse,
    error: getBillerCatsErr,
    refetch: getBillerCatsReset,
  } = useGetBillerCatsQuery(null)

  const {
    data: getBillers,
    isLoading: getBillersLoad,
    isSuccess: getBillersSuccess,
    isError: getBillersFalse,
    error: getBillersErr,
    refetch: getBillersReset,
  } = useGetBillersQuery(null)
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
        <h2>Airtime</h2>
        <h6>Recharge your phone directly with Bankit</h6>
      </div>
      <br />
      <br />
      <form
        onSubmit={formik.handleSubmit}
        className="form"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="payment_inner">
          <div className="step-one-groups" style={{ width: "100%" }}>
            <div className="step-one-single">
              <div>
                <input
                  type="text"
                  placeholder="Select Network"
                  required="required"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="step-one-groups" style={{ width: "100%" }}>
            <div className="step-one-single">
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  required="required"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="step-one-groups" style={{ width: "100%" }}>
            <div className="step-one-single">
              <div>
                <input type="text" placeholder="Amount" required="required" />
              </div>
            </div>
          </div>
          <br />
          <PriButton
            text="Proceed"
            action={nextPage}
            type={null}
            active={true}
            load={null}
          />
        </div>
      </form>
    </div>
  )
}

export default AirtimeStepOne
