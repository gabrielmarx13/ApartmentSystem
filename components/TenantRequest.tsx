"use client"

import { deleteDoc, getFirestore, doc, updateDoc } from "firebase/firestore"
import { useState } from "react";

export default function TenantRequest({ doc: docu }: any) {
    const [apt, setApt] = useState("");
    const [displayApt, setDisplayApt] = useState(docu.data().apt);
    const [deleted, setDeleted] = useState(false);
    const database = getFirestore();

    return (!deleted ? <li className="request" style={{
        display: "flex", justifyContent: "space-around", alignItems: "center",
        margin: "10px", border: "1px solid black", height: "100px", backgroundColor: "gray"
    }}>
        <div>{"ID #" + docu.data().id}</div>
        <div>{docu.data().name}</div>
        <div>{docu.data().phoneNumber}</div>
        <div>{docu.data().email}</div>
        <div>{docu.data().checkIn.toDate().toDateString()}</div>
        <div>{docu.data().checkOut.toDate().toDateString()}</div>
        <div>{"Apt #" + displayApt}</div>
        <div>
            <input onChange={(event) => { setApt(() => event.target.value) }}></input>
            <button onClick={() => { 
                updateDoc(doc(database, "tenants", docu.id), { apt: apt });
                setDisplayApt(Number(apt))
                setApt("");
                }}>Switch Apt</button>
        </div>
        <button onClick={() => {
            deleteDoc(doc(database, "tenants", docu.id));
            setDeleted(true);
        }}>Delete Tenant</button>
    </li> : <></>);
}