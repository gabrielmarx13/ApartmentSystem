"use client"

import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function RequestForm({tenantsQuery}: any) {
    const [tenantID, setTenantID] = useState(0);
    const [problemArea, setProblemArea] = useState("");
    const [problemDesc, setProblemDesc] = useState("");
    const [image, setImage] = useState("");
    const database = getFirestore();

    return (<div className={"tenant"}>
        <div className={"maintenenceRequestForm"}>
            <span>  Tenant ID:</span>
            <input onChange={(event) => {
                setTenantID(() => Number(event.target.value))
            }}></input>
            <span>{tenantID}</span>
            <span>  Problem Area:</span>
            <input onChange={(event) => {
                setProblemArea(() => event.target.value)
            }}></input>
            <span>{problemArea}</span>
            <span>  Problem Description:</span>
            <input onChange={(event) => {
                setProblemDesc(() => event.target.value)
            }}></input>
            <span>{problemDesc}</span>
            <span>  Image:</span>
            <input onChange={(event) => {
                setImage(() => event.target.value)
            }}></input>
            <span>{image}</span>
            <span>  Submit:</span>
            <button onClick={() => {
                if (tenantID !== 0 && problemArea !== "" && problemDesc !== "") {

                    let thisTenant = tenantsQuery.find((doc: any) => tenantID == doc.data().id);

                    if (thisTenant) {
                        addDoc(collection(database, "requests"), {
                            apt: thisTenant.data().aptID,
                            area: problemArea,
                            description: problemDesc,
                            image: image,
                            status: "pending",
                            timestamp: Timestamp.now()
                        })
                    }
                }
            }}>Submit Request</button>
        </div>
    </div>)
}