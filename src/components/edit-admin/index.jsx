import { Formik } from "formik"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as yup from "yup"
// import { useUpdateAdminMutation } from "../../redux/api/mutationApi"
import Input from "../input/input"
import PriButton from "../primary-button/priButton"
import SidePopup from "../side-popup/sidePopup"
const EditForm = ({ right, closeAction, messageAction, refresh }) => {
  const [active, setActive] = useState(true)
  const { editAdmin } = useSelector((store) => store)
  console.log(editAdmin?.firstName)
  const initSchema = yup.object().shape({
    firstName: yup.string().required("Please Enter user first name"),
    lastName: yup.string().required("Please enter user last name"),
    role: yup.string().required("Please enter user role"),
    email: yup
      .string()
      .trim()
      .email("Enter a valid email")
      .required("Email is required"),
  })
  const initialValues = {
    firstName: editAdmin?.firstName,
    lastName: editAdmin?.lastName,
    email: editAdmin?.email,
    role: editAdmin?.role,
  }
  // const [
  //   updateAdmin,
  //   {
  //     data: updateAdminData,
  //     isLoading: updateAdminLoad,
  //     isSuccess: updateAdminSuccess,
  //     isError: updateAdminFalse,
  //     error: updateAdminErr,
  //   },
  // ] = useUpdateAdminMutation()
  // useEffect(() => {
  //   if (updateAdminErr) {
  //     showToastErrorMessage()
  //   } else if (updateAdminSuccess) {
  //     showToastSuccessMessage()
  //     refresh()
  //   }
  // }, [updateAdminErr, updateAdminSuccess])
  const showToastErrorMessage = () => {
    toast.error("User Edit Failed", {
      position: "top-right",
    })
  }
  const showToastSuccessMessage = () => {
    toast.success("User Edited successfully", {
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
              role: values?.role,
            }
            // updateAdmin(data)
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
              <h1>Edit User</h1>
              <div>
                <Input
                  type="text"
                  placeholder="Enter First Name"
                  text={true}
                  value={values?.firstName}
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
                  value={values?.lastName}
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
                  value={values?.email}
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
                  placeholder="Enter role"
                  value={values?.role}
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

export default EditForm
