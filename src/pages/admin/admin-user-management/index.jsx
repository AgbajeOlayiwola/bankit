import React, { useState } from "react"
import { useDispatch } from "react-redux"
import AddNewAgent from "../../../components/add-new-agent"
import EditForm from "../../../components/edit-admin"
import { Modal } from "../../../components/modal"
import PriButton from "../../../components/primary-button/priButton"
import TableTwo from "../../../components/tables/table-two"
// import {
//   useDeleteAdminManagmentByIDQuery,
//   useGetAdminManagmentQuery,
// } from "../../../redux/api/queryApi"
import { setEditAdmin } from "../../../redux/slices/editAdminSlice"
import "./styles.css"
const AdminUserManagement = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(true)
  const [isPhone, setIsOpen] = useState(false)
  const [userId, setUserId] = useState()
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const [right3, setRight3] = useState("-700px")
  const [right4, setRight4] = useState("-700px")
  const tableHeaders = ["S/N", "Name", "User ID", "Role", "Status", "Admin"]
  // const { data, isLoading, isSuccess, isError, error, refetch } =
  //   useGetAdminManagmentQuery() // Use the query hook
  // useEffect(() => {
  //   refetch()
  // }, [refetch])
  // const refresh = () => {
  //   refetch()
  // }
  const openModal = (id) => {
    setIsOpen((prev) => !prev)
    setUserId(id)
  }
  const closeAction = () => {
    setIsOpen((prev) => !prev)
  }
  // const {
  //   data: deleteAdminData,
  //   isLoading: deleteAdminLoad,
  //   isSuccess: deleteAdminSuccess,
  //   isError: deleteAdminFalse,
  //   error: deleteAdmintErr,
  //   refetch: deleteAdmin,
  // } = useDeleteAdminManagmentByIDQuery()
  const openEdit = (item) => {
    setRight3("0px")
    dispatch(setEditAdmin(item))
  }
  return (
    <div className="management">
      <div className="user-management">
        <h1>User management</h1>
        <PriButton
          action={() => setRight("0px")}
          text="Add New User"
          active={active}
          load={null}
        />
      </div>
      <TableTwo
        // data={data}
        // load={isLoading}
        tableHeaders={tableHeaders}
        openDelModal={(id) => openModal(id)}
        edit={(item) => openEdit(item)}
      />
      {isPhone ? (
        <Modal closeAction={closeAction}>
          <div className="content">
            <h1>Are you sure?</h1>
            <div>
              <PriButton
                text={"Cancel"}
                action={closeAction}
                type={null}
                active={true}
                load={null}
              />
              <PriButton
                text={"Delete"}
                // action={() => deleteAdmin(userId)}
                type={null}
                active={true}
                // load={deleteAdminLoad}
              />
            </div>
          </div>
        </Modal>
      ) : null}
      <AddNewAgent
        // refresh={refresh}
        right={right}
        messageAction={() => {
          setRight2("0px")
        }}
        closeAction={() => {
          setRight("-700px")
        }}
      />
      <EditForm
        // refresh={refresh}
        right={right3}
        messageAction={() => {
          setRight4("0px")
        }}
        closeAction={() => {
          setRight3("-700px")
        }}
      />
    </div>
  )
}

export default AdminUserManagement
