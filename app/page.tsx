"use client"

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { doc, collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzhrEb9IT3V-Q0jyb-jaYg5sdQSHAVJww",
  authDomain: "apartmentsystem-63dcf.firebaseapp.com",
  projectId: "apartmentsystem-63dcf",
  storageBucket: "apartmentsystem-63dcf.appspot.com",
  messagingSenderId: "500465745032",
  appId: "1:500465745032:web:f46376630bdd62363d733d"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default async function Home() {
  const tenantsQuery = await getDocs(collection(database, "tenants"))

  const [tenantID, setTenantID] = useState(0);
  const [problemArea, setProblemArea] = useState("");
  const [problemDesc, setProblemDesc] = useState("");
  const [image, setImage] = useState("");

  return (<>
    <div className={"tenant"}>
      <div className={"maintenenceRequestForm"}>
      <span>  Tenant ID:</span>
        <input onChange={(event) => {
          setTenantID(() => Number(event.target.value))
        }}></input>
      <span>  Problem Area:</span>
        <input onChange={(event) => {
          setProblemArea(() => event.target.value)
        }}></input>
      <span>  Problem Description:</span>
        <input onChange={(event) => {
          setProblemDesc(() => event.target.value)
        }}></input>
      <span>  Image:</span>
        <input onChange={(event) => {
          setImage(() => event.target.value)
        }}></input>
      <span>  Submit:</span>
      <button onClick={() => {
        if (tenantID !== 0 && problemArea !== "" && problemDesc !== "") {

          let thisTenant = null;
          tenantsQuery.docs.forEach((doc) => {
            if (tenantID == doc.data().id) {
              thisTenant = doc;
            }
          })

          if (thisTenant) {
            addDoc(collection(database, "requests"), {
              apt: thisTenant.data().aptID
            })
          }

          
        }
      }}></button>
        

      </div>
    </div>
    <div className={"maintenenceStaff"}>
      <div className={"maintenenceRequestList"}>

      </div>
    </div>
    <div className={"manager"}>
      <div className={"managerTenantList"}>

      </div>


    </div>









  </>)
}
