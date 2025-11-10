import React, { useEffect, useState } from 'react'
import '../style.css'
import { useFetching } from '../hooks/useFetching'
import SingleToken from './SingleToken';


export default function TokenList({ reloadTrigger }) {
  const { sendRequest, loading, error } = useFetching();
  const [response ,SetResponse] = useState({})

  const getTokens = async () => {
    const response = await sendRequest("http://localhost:8080/api/analyze", "GET")
    SetResponse(response)
    console.log(response);
  }

  // const [URL , steURL] = useState("http://localhost:3000/code")
  useEffect(() => {
    const timer = setTimeout(() => {
      getTokens();
    }, 5000);
  
    return () => clearTimeout(timer);
    // getTokens()
  }, [reloadTrigger])

  return (
    <aside className="tokens-panel" aria-labelledby="tokens-title">
      <h3 id="tokens-title">توکن‌ها</h3>
      <div className="tokens-list" id="tokensList">
        {/* {response} */}
        {/* <!-- token badges injected here --> */}
        {Object.entries(response) && Object.entries(response).map((res) => {
          <SingleToken key={Math.random() * 100} tokenName={res.name} Attribiute={res.attribute} />
        })}

      </div>

      <div id='asd'>

        <div id='countToken'>تعداد توکن: <span id="tokenCount">0</span></div>
      </div>
    </aside>
  )
}
