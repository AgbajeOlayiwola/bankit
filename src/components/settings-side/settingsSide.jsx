import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import { useSetUserPinMutation } from "../../redux/api/mutationApi"
import Right from "../../svg-component/right"
import { settingsData } from "../../utils/data"
import AccountInfo from "../account-info/accountInfo"
import Chat from "../chat/chat"
import ConfirmOtp from "../confirm-otp/confirmOtp"
import Statements from "../statements/statements"
import Support from "../support/support"
import UpdatePassword from "../update-password/updatePassword"
import Verification from "../verification/verification"
import "./settingsSide.css"
const SettingsSide = () => {
  const dispatch = useDispatch()
  const [kobo, setKobo] = useState(false)
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const [right3, setRight3] = useState("-700px")
  const [right4, setRight4] = useState("-700px")
  const [right5, setRight5] = useState("-700px")
  const [right6, setRight6] = useState("-700px")
  const [right7, setRight7] = useState("-700px")

  // const [
  //   userPin,
  //   {
  //     data: userPinData,
  //     isLoading: userPinLoad,
  //     isSuccess: userPinSuccess,
  //     isError: userPinFalse,
  //     error: userPinErr,
  //   },
  // ] = useSetUserPinMutation()
  const setPin = (value) => {
    const pinData = {
      pin: value,
      verifyPin: value,
    }
    // userPin(pinData)
  }
  // useEffect(() => {
  //   if (userPinErr) {
  //     showToastErrorMessage()
  //   } else if (userPinSuccess) {
  //     showToastSuccsss()
  //   }
  // }, [userPinSuccess, userPinErr])
  const showToastSuccsss = () => {
    toast.success("Pin Set SUccessfully", {
      position: "top-right",
    })
  }
  // const showToastErrorMessage = () => {
  //   toast.error(userPinErr?.data?.errorMessage, {
  //     position: "top-right",
  //   })
  // }
  return settingsData?.map((item, index) => {
    return (
      <div className="settings-cont" key={index}>
        <ToastContainer />
        <h2>{item.title}</h2>
        <div className="settings-sub">
          {item.body?.map((items, index2) => {
            return (
              <div
                className="settings-single"
                key={index2}
                onClick={() => {
                  if (items.title === "Account information") {
                    setRight("0px")
                  } else if (items.title === "Verification") {
                    setRight2("0px")
                  } else if (items.title === "Statement and reports") {
                    setRight3("0px")
                  } else if (items.title === "Password") {
                    setRight4("0px")
                  } else if (items.title === "Reset PIN") {
                    setRight5("0px")
                  } else if (items.title === "Help & FAQs") {
                    setRight6("0px")
                  } else if (items.title === "View badges") {
                    setRight7("0px")
                  }
                }}
              >
                <div>
                  {items.icon}
                  <h2>{items.title}</h2>
                </div>
                {items.title === "Display kobo" ? (
                  <div className="display-kobo">
                    <label className={kobo ? "beneChecked" : "beneCheck"}>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setKobo(!kobo)
                        }}
                      />
                      <span>
                        <i></i>
                      </span>
                    </label>
                  </div>
                ) : (
                  <Right color="#999999" />
                )}
              </div>
            )
          })}
        </div>

        <Support
          right={right6}
          messageAction={() => {
            setRight7("0px")
          }}
          closeAction={() => {
            setRight6("-700px")
          }}
        />
        <UpdatePassword
          right={right4}
          closeAction={() => {
            setRight4("-700px")
          }}
        />
        <Chat
          right={right7}
          closeAction={() => {
            setRight7("-700px")
          }}
        />
        <AccountInfo
          right={right}
          closeAction={() => {
            setRight("-700px")
          }}
        />
        <Verification
          right={right2}
          closeAction={() => {
            setRight2("-700px")
          }}
        />
        <Statements
          right={right3}
          closeAction={() => {
            setRight3("-700px")
          }}
        />
        <ConfirmOtp
          load={null}
          click={(value) => setPin(value)}
          title="Reset PIN"
          text="Create PIN"
          subText="Input your password to reset your transaction PIN"
          right={right5}
          closeAction={() => {
            setRight5("-700px")
          }}
        />
      </div>
    )
  })
}

export default SettingsSide
