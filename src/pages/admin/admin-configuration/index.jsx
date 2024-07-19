import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Rewards from "../../../components/rewards"
import TableOne from "../../../components/tables/table-one"
// import { useGetAllPointsQuery } from "../../../redux/api/queryApi"
import { setConfigdata } from "../../../redux/slices/configurationDataSlice"
import "./styles.css"
const AdminConfiguration = () => {
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const dispatch = useDispatch()
  // const { data, isLoading, isSuccess, isError, error, refetch } =
  // useGetAllPointsQuery()  // Use the query hook
  // useEffect(() => {
  //   refetch()
  // }, [refetch])
  // const recall = () => {
  //   refetch()
  // }

  const table_header = [
    "S/N",
    "Name",
    "Total points earned",
    "Transaction type",
    "Date/Time",
    "Status",
  ]
  const actionIteem = (item) => {
    setRight("0px")
    dispatch(setConfigdata(item))
  }
  return (
    <div className="config">
      <h1>Point Management</h1>
      <TableOne
        head={table_header}
        // body={data?.user}
        // load={isLoading}
        action={(item) => actionIteem(item)}
      />

      <Rewards
        // recall={recall}
        right={right}
        messageAction={() => {
          setRight2("0px")
        }}
        closeAction={() => {
          setRight("-700px")
        }}
      />
    </div>
  )
}

export default AdminConfiguration
