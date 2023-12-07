"use client"

import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function RequestForm({ tenantID: tenantID, tenantApt: tenantApt }: any) {
    const [problemArea, setProblemArea] = useState("");
    const [problemDesc, setProblemDesc] = useState("");
    const [image, setImage] = useState("");
    const database = getFirestore();

    return (<div className={"tenantAddForm"} style={{
        display: "flex", justifyContent: "space-between", border: "1px solid black",
        padding: "10px", backgroundColor: "tan", fontSize: "20px", marginBottom: "30px"
    }}>

        <div>
            <span>  Problem Area: </span>
            <input onChange={(event) => {
                setProblemArea(() => event.target.value)
            }}></input>

        </div>

        <div>
            <span>  Problem Description: </span>
            <input onChange={(event) => {
                setProblemDesc(() => event.target.value)
            }}></input>
        </div>

        <div>
            <span>  Image: </span>
            <input onChange={(event) => {
                setImage(() => event.target.value)
            }}></input>
        </div>

        <div>
            <button onClick={() => {
                if (problemArea !== "" && problemDesc !== "") {
                    addDoc(collection(database, "requests"), {
                        id: tenantID,
                        apt: tenantApt,
                        area: problemArea,
                        description: problemDesc,
                        image: image,
                        status: "pending",
                        timestamp: Timestamp.now()
                    })
                    setTimeout(() => window.location.reload(), 1000)
                }
            }}>Submit Request</button>
        </div>
    </div>)
}