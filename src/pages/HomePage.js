import React from 'react'
import Layout from '../components/Layout'
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
function HomePage() {

    async function addData() {
        try {
            await addDoc(collection(fireDB, "users"), { name: 'tuba', age: 18 })
        } catch (error) {
            console.log(error)
        }
    }
    async function getData() {
        try {
            const users = await getDocs(collection(fireDB, "users"), { name: 'Ullash', age: 27 })
            const usersArray = [];
            users.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }

                usersArray.push(obj)
            });
            console.log(usersArray)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <h1>Home</h1>
            <button onClick={addData}>Add Data to Firebase</button>
            <button onClick={getData}>get Data from Firebase</button>
        </Layout>
    )
}

export default HomePage
