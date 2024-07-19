import { Formik } from "formik"
import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as yup from "yup"
import profileImage from "../../../assets/mini_profil_img.png"

import Input from "../../input/input"
import PriButton from "../../primary-button/priButton"
import Selectinput from "../../seelect-input"
import TextArea from "../../textarea"
import "./styles.css"
const Managerewards = ({ recall }) => {
  const data = ["Add points", "Deduct point"]
  const transatype = ["Bill payment", "Loans", "Investment"]

  const initSchema = yup.object().shape({
    pointAmount: yup.string().required("Please enter user last name"),
    description: yup.string().required("Email is required"),
  })
  const initialValues = {
    addDeductPoint: "",
    pointAmount: "",
    transactionType: "",
    description: "",
  }
  // const [
  //   addPoint,
  //   {
  //     data: addPointData,
  //     isLoading: addPointLoad,
  //     isSuccess: addPointSuccess,
  //     isError: addPointFalse,
  //     error: addPointErr,
  //   },
  // ] = useAddPointMutation()
  // useEffect(() => {
  //   if (addPointSuccess) {
  //     showToastSuccessMessage()
  //     recall()
  //   } else if (addPointErr) {
  //     showToastErrorMessage()
  //   }
  // }, [addPointSuccess, addPointErr])

  const showToastErrorMessage = () => {
    toast.error("Rewards failed", {
      position: "top-right",
    })
  }
  const showToastSuccessMessage = () => {
    toast.success("Rewards added successfully", {
      position: "top-right",
    })
  }
  return (
    <Formik
      validationSchema={initSchema}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const contdata = {
          action: values?.addDeductPoint,
          pointType: values?.transactionType,
          description: values?.description,
          point: values?.pointAmount,
        }
        // addPoint(contdata)
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
          <ToastContainer />
          <div className="allInfo">
            <h1>Manage Rewards</h1>
            <div className="AllInfoimgDiv">
              <img width={178} height={178} src={profileImage} />
            </div>
            <div className="info-cover">
              <h1>Rewards Points Overview</h1>
              <div className="info-flex">
                <div>
                  <h2>Total Points earned</h2>
                  <h2>Points expiry date</h2>
                </div>
                <div>
                  <h2>10,000</h2>
                  <h2>July 2023</h2>
                </div>
              </div>
            </div>
            <div className="info-cover">
              <Selectinput
                placeholder="Points Amount"
                text={true}
                action={(e) => setFieldValue("addDeductPoint", e.target.value)}
                values={data}
              />
            </div>
            <div className="info-cover">
              <Input
                type="text"
                placeholder="Point amount"
                text={false}
                iconChange={true}
                edit={false}
                value={values?.pointAmount}
                action={(e) => setFieldValue("pointAmount", e.target.value)}
              />
            </div>

            <div className="info-cover">
              <Selectinput
                placeholder="Points Amount"
                text={true}
                action={(e) => setFieldValue("transactionType", e.target.value)}
                values={transatype}
              />
            </div>
            <div>
              <TextArea
                placeholder="Type description"
                action={(e) => setFieldValue("description", e.target.value)}
                col={8}
                row={8}
              />
            </div>

            <PriButton
              text="Proceed"
              action={null}
              type="submit"
              active={true}
              load={null}
            />
          </div>
        </form>
      )}
    </Formik>
  )
}

export default Managerewards
