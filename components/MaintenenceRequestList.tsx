"use client"

import { useState } from "react";
import MaintenenceRequest from "./MaintenenceRequest";

export default function MaintenenceRequestList({ requestsQuery: requestsQuery }: any) {
    const [filter, setFilter] = useState(0);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    var reqs = requestsQuery.docs.sort((doca: any, docb: any) => {
        switch (filter) {
            case 0:
                return doca.data().apt < docb.data().apt ? -1 : 1;
            case 1:
                return doca.data().apt > docb.data().apt ? -1 : 1;
            case 2:
                return doca.data().area < docb.data().area ? -1 : 1;
            case 3:
                return doca.data().area > docb.data().area ? -1 : 1;
            case 5:
                return doca.data().status < docb.data().status ? -1 : 1;
            case 6:
                return doca.data().status > docb.data().status ? -1 : 1;
        }
    })

    if (filter == 4 && start ) {
        reqs = requestsQuery.docs.filter((docu: any) => {
            let dateStart = new Date(start)
            let dateEnd = new Date(end)

            if (!isNaN(dateStart.getTime()) && !isNaN(dateEnd.getTime())) {
                return docu.data().timestamp.toDate() > dateStart && docu.data().timestamp.toDate() < dateEnd
            }
        })
    }

    return (<>
        <div style={{
            display: "flex", justifyContent: "space-between", border: "1px solid black",
            padding: "10px", backgroundColor: "tan", fontSize: "20px", marginBottom: "30px"
        }}>
            <button onClick={() => setFilter(0)}>Apt# Ascending</button>
            <button onClick={() => setFilter(1)}>Apt# Descending</button>
            <button onClick={() => setFilter(2)}>Area Ascending</button>
            <button onClick={() => setFilter(3)}>Area Descending</button>
            <div>
                <input type="datetime-local" onChange={(event) => { setStart(() => event.target.value) }}></input>
                <input type="datetime-local" onChange={(event) => { setEnd(() => event.target.value) }}></input>
                <button onClick={() => setFilter(4)}>Date Range</button>
            </div>
            <button onClick={() => setFilter(5)}>Completed First</button>
            <button onClick={() => setFilter(6)}>Pending First</button>
        </div>
        {reqs.map((docu: any) => <MaintenenceRequest key={docu.id} doc={docu} isStaff={true}></MaintenenceRequest>)}
    </>)
}