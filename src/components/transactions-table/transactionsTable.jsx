import React, { useEffect, useState } from "react"
import Category from "../../svg-component/category"
import Export from "../../svg-component/export"
import Status from "../../svg-component/status"
import { categories, recentTransactions, statuses } from "../../utils/data"
import MoreAction from "../more-action/moreAction"
import OutsideClick from "../outside-click/outsideClick"
import "./transactionsTable.css"

const TransactionsTable = () => {
  const [status, setStatus] = useState(false)
  const [category, setCategory] = useState(false)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [width])
  return (
    <div className="transactionstable-container">
      <div className="transactionstable-head">
        <div className="transaction-period">
          <p>Period:</p>
          <div className="specify-period">
            <h2>Specify Period</h2>
          </div>
        </div>
        <div className="transaction-actions">
          <div className="transaction-single">
            <div
              onClick={() => {
                setStatus(true)
              }}
              className="transactions-single"
            >
              <p>All Status</p>
              <Status />
            </div>
            {status ? (
              <OutsideClick
                onClickOutside={() => {
                  setStatus(!status)
                }}
              >
                <div className="all-status-container">
                  {statuses?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        onClick={() => {
                          setStatus(false)
                        }}
                      >
                        {item}
                      </p>
                    )
                  })}
                </div>
              </OutsideClick>
            ) : null}
          </div>
          <div className="transaction-single">
            <div
              className="transactions-single"
              onClick={() => {
                setCategory(true)
              }}
            >
              <p>Category</p>
              <Category />
            </div>
            {category ? (
              <OutsideClick
                onClickOutside={() => {
                  setCategory(false)
                }}
              >
                <div className="all-status-container">
                  {categories?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        onClick={() => {
                          setCategory(false)
                        }}
                      >
                        {item}
                      </p>
                    )
                  })}
                </div>
              </OutsideClick>
            ) : null}
          </div>
          <div className="transaction-single">
            <div className="transactions-single">
              <p>Export</p>
              <Export />
            </div>
          </div>
        </div>
      </div>

      <div className="transactionstable-body">
        {width > 900 ? (
          <div className="transactionstable-header">
            <p>S/N</p>
            <p>Description</p>
            <p>Amount (N)</p>
            <p>Balance (N)</p>
            <p>Date/Time</p>
            <p>Status</p>
            <p>Action</p>
          </div>
        ) : null}
        {recentTransactions?.map((items, index) => {
          return (
            <>
              <div className="transactionstable-single">
                {width > 900 ? (
                  <>
                    <p>{index + 1}</p>
                    <p>{items.description}</p>
                    <p>{items.amount}</p>
                    <p>{items.balance}</p>
                    <p>{items.date}</p>
                    <p>
                      <span
                        className={
                          items.status === "Successful"
                            ? "successful"
                            : items.status === "Processing"
                            ? "processing"
                            : items.status === "Refunded"
                            ? "refunded"
                            : "failed"
                        }
                      >
                        {items.status}
                      </span>
                    </p>
                    <div>
                      <MoreAction />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div>
                        <p>{items.description}</p>
                        <p>{items.amount}</p>
                      </div>
                      <div>
                        <p>{items.balance}</p>
                        <p>{items.date}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <hr className="divider" />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TransactionsTable
