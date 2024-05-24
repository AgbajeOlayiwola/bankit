import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useBuyAirtimeMutation } from "../../redux/api/mutationApi"
import Airtime from "../../svg-component/airtime"
import Cable from "../../svg-component/cable"
import Data from "../../svg-component/data"
import Nepa from "../../svg-component/nepa"
import GetAirtime from "../get-airtime/getAirtime"
import SaveContact from "../save-contact/saveContact"
import TransactionPin from "../transaction-pin/transactionPin"
import TransactionSuccess from "../transaction-success/transactionSuccess"
import "./services.css"
const Services = () => {
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const [right3, setRight3] = useState("-700px")
  const [right4, setRight4] = useState("-700px")
  const { airtime } = useSelector((store) => store)
  const [
    buyAirtime,
    {
      data: buyAirtimeData,
      isLoading: buyAirtimeLoad,
      isSuccess: buyAirtimeSuccess,
      isError: buyAirtimeFalse,
      error: buyAirtimeErr,
    },
  ] = useBuyAirtimeMutation()
  useEffect(() => {
    if (buyAirtimeErr) {
      showToastErrorMessage()
      console.log(buyAirtimeErr)
    } else if (buyAirtimeSuccess) {
      showToastSuccessMessage()
      setRight3("0px")
    }
  }, [buyAirtimeErr, buyAirtimeSuccess])
  const showToastErrorMessage = () => {
    toast.error(buyAirtimeErr?.data?.errorMessage || "Try again", {
      position: "top-right",
    })
  }
  const showToastSuccessMessage = () => {
    toast.success("Airtime purchased successfully", {
      position: "top-right",
    })
  }
  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="services-wrapper">
        <div
          className="services-single"
          onClick={() => {
            setRight("0px")
          }}
        >
          <div>
            <Airtime />
          </div>
          <p>Buy airtime</p>
        </div>
        <div className="services-single">
          <div>
            <Data />
          </div>
          <p>Buy data</p>
        </div>
        <div className="services-single">
          <div>
            <Nepa />
          </div>
          <p>Pay for electricity</p>
        </div>
        <div className="services-single">
          <div>
            <Cable />
          </div>
          <p>Pay for cable</p>
        </div>
      </div>
      <GetAirtime
        right={right}
        closeAction={() => {
          setRight("-700px")
        }}
        action={() => {
          setRight2("0px")
        }}
      />
      <TransactionPin
        right={right2}
        closeAction={() => {
          setRight2("-700px")
        }}
        action={(data) => {
          buyAirtime(data)
        }}
        load={buyAirtimeLoad}
      />
      <TransactionSuccess
        right={right3}
        closeAction={() => {
          setRight3("-700px")
          setRight2("-700px")
          setRight("-700px")
        }}
        amount={airtime?.amount}
        first="You have purchased"
        second="airtime for"
        recipient="08098765432"
        save={() => {
          setRight4("0px")
        }}
        action={() => {
          setRight3("-700px")
          setRight2("-700px")
          setRight("-700px")
        }}
      />
      <SaveContact
        right={right4}
        buttonAction={() => {
          setRight4("-700px")
          setRight3("-700px")
          setRight2("-700px")
          setRight("-700px")
        }}
        closeAction={() => {
          setRight4("-700px")
          setRight3("-700px")
          setRight2("-700px")
          setRight("-700px")
        }}
      />
    </div>
  )
}

export default Services
