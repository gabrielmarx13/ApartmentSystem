
"use client"

import RequestForm from "@/components/RequestForm";
import { initializeApp } from "firebase/app";
import { doc, collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

export default async function Home() {
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

  const tenantsQuery = await getDocs(collection(database, "tenants"))

  return (<>
    <RequestForm tenantsQuery={tenantsQuery.docs}></RequestForm>
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
