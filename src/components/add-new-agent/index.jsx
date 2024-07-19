import { Formik } from "formik"
import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as yup from "yup"

import Input from "../input/input"
import PriButton from "../primary-button/priButton"
import SidePopup from "../side-popup/sidePopup"
import "./styles.css"
const AddNewAgent = ({ right, closeAction, messageAction, refresh }) => {
  const [active, setActive] = useState(true)
  const initSchema = yup.object().shape({
    firstName: yup.string().required("Please Enter user first name"),
    lastName: yup.string().required("Please enter user last name"),
    role: yup
      .string()
      .required("Please enter user role 'admin' or 'super admin'"),
    email: yup
      .string()
      .trim()
      .email("Enter a valid email")
      .required("Email is required"),
  })
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    userid: "",
    role: "",
  }
  // const [
  //   createAdmin,
  //   {
  //     data: createAdminData,
  //     isLoading: createAdminLoad,
  //     isSuccess: createAdminSuccess,
  //     isError: createAdminFalse,
  //     error: createAdminErr,
  //   },
  // ] = useCreateAdminMutation()
  // useEffect(() => {
  //   if (createAdminErr) {
  //     showToastErrorMessage()
  //   } else if (createAdminSuccess) {
  //     showToastSuccessMessage()
  //     refresh()
  //   }
  // }, [createAdminErr, createAdminSuccess])
  const showToastErrorMessage = () => {
    toast.error("Identifier or Password Incorrect", {
      position: "top-right",
    })
  }
  const showToastSuccessMessage = () => {
    toast.success("Identifier or Password Incorrect", {
      position: "top-right",
    })
  }

  return (
    <SidePopup right={right} closeAction={closeAction}>
      <ToastContainer />
      <div className="AddNewAgent">
        <Formik
          validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const data = {
              firstName: values?.firstName,
              lastName: values?.lastName,
              email: values?.email,
              userId: `BN${values?.userId}`,
              role: values?.role,
            }
            // createAdmin(data)
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
              <h1>Add New User</h1>
              <div>
                <Input
                  type="text"
                  placeholder="Enter First Name"
                  text={true}
                  action={(e) => setFieldValue("firstName", e.target.value)}
                  iconChange={null}
                  edit={false}
                />

                {errors ? <p className="error">{errors?.firstName}</p> : null}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  text={true}
                  action={(e) => setFieldValue("lastName", e.target.value)}
                  iconChange={null}
                  edit={false}
                />
                {errors ? <p className="error">{errors?.lastName}</p> : null}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Enter Email Address"
                  text={true}
                  action={(e) => setFieldValue("email", e.target.value)}
                  iconChange={null}
                  edit={false}
                />
                {errors ? <p className="error">{errors?.email}</p> : null}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Enter User Id"
                  text={true}
                  action={(e) => setFieldValue("userId", e.target.value)}
                  iconChange={null}
                  edit={false}
                />
                {errors ? <p className="error">{errors?.useerId}</p> : null}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Enter Role"
                  text={true}
                  action={(e) => setFieldValue("role", e.target.value)}
                  iconChange={null}
                  edit={false}
                />
                {errors ? <p className="error">{errors?.role}</p> : null}
              </div>
              <PriButton
                text="Create User"
                load={null}
                active={active}
                action={null}
                type="submit"
              />
            </form>
          )}
        </Formik>
      </div>
    </SidePopup>
  )
}

export default AddNewAgent
