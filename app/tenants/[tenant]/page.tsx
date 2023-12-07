"use client"

import MaintenenceRequest from "@/components/MaintenenceRequest";
import RequestForm from "@/components/RequestForm";
import { initializeApp } from "firebase/app";
import { doc, collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

export default async function Home({ params }: { params: { tenant: number } }) {
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
  const tenantDoc = tenantsQuery.docs.find((docu) => docu.data().id == params.tenant);
  const tenantApt = tenantDoc?.data().apt;
  const requestsQuery = await getDocs(collection(database, "requests"))
  const filteredQuery = requestsQuery.docs.filter((docu) => docu.data().apt == tenantApt);

  return (tenantDoc ? <>
    <RequestForm tenantID={tenantDoc?.data().id} tenantApt={tenantApt}></RequestForm>
    {filteredQuery.length > 0 ?
      filteredQuery.map((doc) => <MaintenenceRequest key={doc.id} doc={doc} isStaff={false}></MaintenenceRequest>)
      : "No Requests"}
  </> : <>Invalid Tenant</>)
}
