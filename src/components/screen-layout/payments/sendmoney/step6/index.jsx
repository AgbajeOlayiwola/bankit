import { useFormik } from "formik"
import React, { useEffect, useState } from "react"
import * as yup from "yup"
import { useGetBanksListQuery } from "../../../../../redux/api/queryApi"
import PriButton from "../../../../primary-button/priButton"
import "./step2.css"
const SendMoneyStepSix = ({ nextPage }) => {
  const [fileredBanks, setFilteredBanks] = useState([])
  const [bankCode, setBankCode] = useState()
  const formik = useFormik({
    initialValues: {
      bankCode: "",
      accountNumber: "",
    },
    validationSchema: yup.object({
      bankCode: yup.string().trim().required("Old password is required"),
      accountNumber: yup.string().required("Please add accpount number"),
    }),
    onSubmit: (values) => {
      const data = {
        bankCode: bankCode,
        accountNumber: values?.accountNumber,
      }
    },
  })
  const {
    data: fetchBanks,
    isLoading: fetchBanksLoad,
    isSuccess: fetchBanksSuccess,
    isError: fetchBanksFalse,
    error: fetchBanksErr,
    refetch: fetchBanksReset,
  } = useGetBanksListQuery(null)
  const handleBankInputChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, "")
    formik.setFieldValue("bankCode", value)

    setFilteredBanks(
      fetchBanks.data.filter((banks) =>
        banks.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }
  const handleBankClick = (banks) => {
    formik.setFieldValue("bankCode", banks.name)
    setBankCode(banks.code)
    setFilteredBanks([])
  }
  useEffect(() => {
    console.log(fetchBanks)
  }, [])

  return (
    <div className="payment_outer">
      <h2>Adekule ayo</h2>
      <br />
      <div className="payment_inner">
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input
                type="text"
                placeholder="Recipient Account Number"
                required="required"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="countryCover">
          {fetchBanksLoad ? (
            <h1>Loading</h1>
          ) : (
            <div className="step-one-groups" style={{ width: "100%" }}>
              <div className="step-one-single">
                <div>
                  <input
                    type="text"
                    onChange={handleBankInputChange}
                    value={formik.values.bankCode}
                    placeholder="Select Bank"
                    required="required"
                  />
                </div>
              </div>
            </div>
          )}
          {fileredBanks.length > 0 && (
            <ul className="list">
              {fileredBanks.map((bank) => (
                <li key={bank.id} onClick={() => handleBankClick(bank)}>
                  {bank.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <br />
        <br />
        <div className="payment_bene_viewAll">
          <h5>Beneficiaries </h5>
          <h6>View All</h6>
        </div>
        <div className="payment_send_top_outer">
          <div className="payment_send_top">
            <div className="payment_send_money">
              <div className="payment_bene_init">A</div>
              <div>
                <h2>Abraham James</h2>
                <h3>@Abrahamjames</h3>
              </div>
            </div>
          </div>

          <div className="payment_send_top">
            <div className="payment_send_money">
              <div className="payment_bene_init">A</div>
              <div>
                <h2>Abraham James</h2>
                <h3>@Abrahamjames</h3>
              </div>
            </div>
          </div>

          <div className="payment_send_top">
            <div className="payment_send_money">
              <div className="payment_bene_init">A</div>
              <div>
                <h2>Abraham James</h2>
                <h3>@Abrahamjames</h3>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <PriButton text="Next" active={true} load={null} action={nextPage} />
      </div>
    </div>
  )
}

export default SendMoneyStepSix
