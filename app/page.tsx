import RequestForm from "@/components/RequestForm";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { doc, collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

export default async function Home() {
  return (<div className="links" style={{display: "flex", justifyContent: "space-evenly", fontSize: "48px"}}>
  <Link href="/tenants">Tenants</Link>
  <Link href="/maintenence">Maintenence Staff</Link>
  <Link href="/manager">Manager</Link>
  </div>)
}
