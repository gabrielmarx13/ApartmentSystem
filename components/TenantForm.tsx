"use client"

import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function TenantForm({size}: any) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [aptNumber, setAptNumber] = useState(0)
    const database = getFirestore();

    return (
        <div className={"tenantAddForm"}>
            <span>  Tenant Name:</span>
            <input onChange={(event) => {
                setName(() => event.target.value)
            }}></input>
            <span>{name}</span>

            <span>  Phone Number:</span>
            <input onChange={(event) => {
                setPhoneNumber(() => event.target.value)
            }}></input>
            <span>{phoneNumber}</span>

            <span>  Email:</span>
            <input onChange={(event) => {
                setEmail(() => event.target.value)
            }}></input>
            <span>{email}</span>

            <span>  Check In:</span>
            <input type="datetime-local" onChange={(event) => {
                setCheckIn(() => event.target.value)
            }}></input>
            <span>{checkIn}</span>

            <span>  Check Out:</span>
            <input type="datetime-local" onChange={(event) => {
                setCheckOut(() => event.target.value)
            }}></input>
            <span>{checkOut}</span>

            <span>  Apt Number:</span>
            <input onChange={(event) => {
                setAptNumber(() => Number(event.target.value))
            }}></input>
            <span>{aptNumber}</span>

            <span>  Submit:</span>
            <button onClick={() => {
                if (name !== "" && email !== "" && checkIn !== "" && checkOut !== "" && aptNumber !== 0) {

                    addDoc(collection(database, "tenants"), {
                        id: size + 1,
                        name: name,
                        phoneNumber: phoneNumber,
                        email: email,
                        checkIn: ,
                        checkOut: checkOut,
                        apt: aptNumber,
                    });
                    size += 1;
                }
            }}>Add Tenant</button>


        </div>)
}