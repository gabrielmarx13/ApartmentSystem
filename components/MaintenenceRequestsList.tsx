"use client"

import { DocumentData, QuerySnapshot, getFirestore } from "firebase/firestore";
import MaintenenceRequest from "./MaintenenceRequest";

export default function MaintenenceRequestsList(requestQuery: any) {

    const database = getFirestore();
    var newRequestQuery = requestQuery

    return (<ul>
        {
            newRequestQuery.docs.map((doc: any) => {
                return <MaintenenceRequest doc={doc}></MaintenenceRequest>
            })
        }
    </ul>)
}