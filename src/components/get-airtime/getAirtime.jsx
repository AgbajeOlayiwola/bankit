import { Formik } from "formik"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as yup from "yup"
import { setAirtime } from "../../redux/slices/airtimeSlice"
import { airtimeList } from "../../utils/data"
import Beneficiaries from "../beneficiaries/beneficiaries"
import Input from "../input/input"
import PriButton from "../primary-button/priButton"
import Selectinput from "../seelect-input"
import SidePopup from "../side-popup/sidePopup"
import "./getAirtime.css"
const GetAirtime = ({ right, closeAction, action }) => {
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const array = [
    "08028310501",
    "08028310501",
    "08028310501",
    "08028310501",
    "08028310501",
  ]
  const initSchema = yup.object().shape({
    phoneNumber: yup.string().required("Please Enter phone number"),
    amount: yup.string().required("Please enter amount"),
    network: yup.string().required("Please enter user network"),
  })
  const initialValues = {
    phoneNumber: "",
    amount: "",
    network: "",
  }

  return (
    <SidePopup right={right} closeAction={closeAction}>
      <ToastContainer />
      <div className="get-airtime">
        <h2>Buy Airtime</h2>
        <div>
          <Beneficiaries
            page={true}
            array={array}
            title="Recent beneficiaries"
          />
          <Beneficiaries page={true} array={array} title="Saved contacts" />
        </div>

        <Formik
          validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const data = {
              serviceType: values?.network,
              plan: "prepaid",
              phone: values?.phoneNumber,
              amount: values?.amount,
            }
            console.log(data)
            dispatch(setAirtime(data))

            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleSubmit,
          }) => (
            <form className="addNewAgentForm" onSubmit={handleSubmit}>
              <div>
                <Selectinput
                  values={airtimeList}
                  title="Choose network"
                  action={(e) => setFieldValue("network", e.target.value)}
                />
                <br />
                <br />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  text={false}
                  action={(e) => setFieldValue("phoneNumber", e.target.value)}
                />
                <br />
                <br />
                <Input
                  type="number"
                  placeholder="Amount"
                  text={false}
                  action={(e) => {
                    setActive(true)
                    setFieldValue("amount", e.target.value)
                  }}
                />
                <br />
                <br />
              </div>
              <PriButton text="Buy" active={active} action={action} />
            </form>
          )}
        </Formik>
      </div>
    </SidePopup>
  )
}

export default GetAirtime
