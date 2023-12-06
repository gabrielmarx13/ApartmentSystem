"use client"

import TenantForm from "@/components/TenantForm";
import TenantRequest from "@/components/TenantRequest";
import { initializeApp } from "firebase/app";
import { doc, collection, getDocs, addDoc, getFirestore, QuerySnapshot, DocumentData } from "firebase/firestore";

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
    <TenantForm tenantAmount={tenantsQuery.docs.length}></TenantForm>
    {tenantsQuery.docs.map((doc: any) => <TenantRequest doc={doc}></TenantRequest>)}
    </>)
}
