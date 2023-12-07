"use client"

import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react";

export default function MaintenenceRequest({ doc: docu, isStaff: isStaff }: any) {
    const [docuState, setDocuState] = useState(docu.data().status);

    const database = getFirestore();

    return (<li className="request" style={{
        display: "flex", justifyContent: "space-around", alignItems: "center",
        margin: "10px", border: "1px solid black", height: "100px", backgroundColor: "gray"
    }}>
        <div>{"Apt #" + docu.data().apt}</div>
        <div>{docu.data().area}</div>
        <div>{docu.data().description}</div>
        <img src={docu.data().image} width={75} height={75} alt="No Image"></img>
        <div style={{
            padding: "10px", border: "1px solid black",
            backgroundColor: docuState == "pending" ? "yellow" : "green"
        }}>{docuState}
            {isStaff && docuState == "pending" ?
                <button onClick={() => {
                    updateDoc(doc(database, "requests", docu.id), { status: "completed" });
                    setDocuState("completed");
                }}>
                    Complete
                </button> : <></>}</div>
        <div>{docu.data().timestamp.toDate().toString()}</div>
    </li>)
}