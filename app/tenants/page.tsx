"use client"

import Link from "next/link";
import { useState } from "react"

export default function Home() {
  const [id, setID] = useState(0);

  return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", border: "1px solid black", backgroundColor: "tan", borderRadius:"3px" }}>
    <span style={{fontSize:"24px", margin:"20px"}}>Enter ID: </span>
    <input style={{padding: "10px", fontSize:"20px", margin:"20px"}} onChange={(event) => setID(() => Number(event.target.value))}></input>
    <Link style={{fontSize: "30px", margin:"20px"}} href={`/tenants/${id}`}>Then Click Here</Link>
  </div>)
}
