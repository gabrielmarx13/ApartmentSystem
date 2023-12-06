"use client"

export default function MaintenenceRequest({doc}: any) {
    return (<li className="request" style={{display: "flex", margin:"10px"}}>
        {doc.id}
        {doc.data().apt}
        {doc.data().area}
        {doc.data().description}
        {doc.data().image}
        {doc.data().status}
        {doc.data().timestamp}
    </li>)
}