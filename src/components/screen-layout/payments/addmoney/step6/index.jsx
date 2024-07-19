import React from "react"

const AddMoneyStepSix = () => {
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
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input
                type="text"
                placeholder="Select Bank"
                required="required"
              />
            </div>
          </div>
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
      </div>
    </div>
  )
}

export default AddMoneyStepSix
