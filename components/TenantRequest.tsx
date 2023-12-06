"use client"

export default function TenantRequest({doc}: any) {
    return (<li className="request" style={{display: "flex"}}>
        <div>{doc.data().id}</div>
        <div>{doc.data().name}</div>
        <div>{doc.data().phoneNumber}</div>
        <div>{doc.data().email}</div>
        <div>{doc.data().checkIn.toString()}</div>
        <div>{doc.data().checkOut.toString()}</div>
        <div>{doc.data().apt}</div>
    </li>)
}