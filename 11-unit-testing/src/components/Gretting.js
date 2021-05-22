import { useState } from "react"

export function Gretting(){
  const [changedText, setChangedText] = useState(false)
  const clickHandler = () => {
    setChangedText(true)
  }
  return <>
    <h2>Hello world!</h2>
    {!changedText && <p>good to see you!</p>}
    {changedText && <p>good bye!</p>}
    <button onClick={clickHandler}>Change text</button>
  </>
}