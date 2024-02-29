import React, { useEffect, useState } from "react"
import AddNewAgent from "../../../components/add-new-agent"
import EditForm from "../../../components/edit-admin"
import PriButton from "../../../components/primary-button/priButton"
import TableTwo from "../../../components/tables/table-two"
import { useGetAdminManagmentQuery } from "../../../redux/api/query"
import "./styles.css"
const AdminUserManagement = () => {
  const [active, setActive] = useState(true)
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const [right3, setRight3] = useState("-700px")
  const [right4, setRight4] = useState("-700px")
  const tableHeaders = ["S/N", "Name", "User ID", "Role", "Status", "Admin"]
  const { data, isLoading, isSuccess, isError, error, refetch } =
    useGetAdminManagmentQuery() // Use the query hook
  useEffect(() => {
    refetch()
  }, [refetch])

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
        data={data}
        load={isLoading}
        tableHeaders={tableHeaders}
        edit={() => setRight3("0px")}
      />
      <AddNewAgent
        right={right}
        messageAction={() => {
          setRight2("0px")
        }}
        closeAction={() => {
          setRight("-700px")
        }}
      />
      <EditForm
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
