import React, { useState, useEffect } from "react"
import StampTestOptions from "@/components/StampTest/StampTestOptions"
import StampTestStart from "@/components/StampTest/StampTestStart"
import StampTestLoading from "@/components/StampTest/StampTestLoading"
import "./StampTest.module.css"

const StampTest = () => {
  const [testMode, setTestMode] = useState("start")
  const [result, setResult] = useState("")

  const onTestModeHanlder = (e) => {
    setTestMode("test")
  }

  return (
    <div id="main-cotainer">
      {(function () {
        if (testMode === "start") {
          return <StampTestStart onTestModeHanlder={onTestModeHanlder} />
        } else if (testMode === "test") {
          return (
            <StampTestOptions setTestMode={setTestMode} setResult={setResult} />
          )
        } else {
          return <StampTestLoading result={result} />
        }
      })()}
    </div>
  )
}

export default StampTest
