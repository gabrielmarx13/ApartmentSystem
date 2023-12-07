"use client"

import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function TenantForm({ tenantAmount }: any) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [aptNumber, setAptNumber] = useState(0)
    const database = getFirestore();

    return (
        <div className={"tenantAddForm"} style={{ display: "flex", justifyContent: "space-between", border: "1px solid black", 
                                                  padding: "10px", backgroundColor: "tan", fontSize: "20px", marginBottom:"30px" }}>

            <div>
                <span>  Tenant Name: </span>
                <input onChange={(event) => {
                    setName(() => event.target.value)
                }}></input>
            </div>

            <div>
                <span>  Phone Number: </span>
                <input onChange={(event) => {
                    setPhoneNumber(() => event.target.value)
                }}></input>
            </div>

            <div>
                <span>  Email: </span>
                <input onChange={(event) => {
                    setEmail(() => event.target.value)
                }}></input>
            </div>

            <div>
                <span>  Check In: </span>
                <input type="date" onChange={(event) => {
                    setCheckIn(() => event.target.value)
                }}></input>
            </div>

            <div>
                <span>  Check Out: </span>
                <input type="date" onChange={(event) => {
                    setCheckOut(() => event.target.value)
                }}></input>
            </div>

            <div>
                <span>  Apt Number: </span>
                <input onChange={(event) => {
                    setAptNumber(() => Number(event.target.value))
                }}></input>
            </div>

            <div>
                <button onClick={() => {
                    if (name !== "" && email !== "" && checkIn !== "" && checkOut !== "" && aptNumber !== 0) {
                        addDoc(collection(database, "tenants"), {
                            id: tenantAmount + 1,
                            name: name,
                            phoneNumber: phoneNumber,
                            email: email,
                            checkIn: Timestamp.fromDate(new Date(checkIn)),
                            checkOut: Timestamp.fromDate(new Date(checkOut)),
                            apt: aptNumber,
                        });
                        tenantAmount += 1;
                        setTimeout(() => window.location.reload(), 1000)
                    }
                }}>Add Tenant</button>
            </div>
        </div>)
}