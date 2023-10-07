import React from "react";
import {useState} from "react"

export default function Form() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log({firstName, lastName, fatherName, number, email})
        setFirstName('')
        setLastName('')
        setFatherName('')
        setNumber('')
        setEmail('')
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4> First Name:</h4>
                    <input value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           placeholder="First name"
                    />
                </label>
                <label>
                    <h4>Last Name:</h4>
                    <input value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           placeholder="Last name"
                    />
                </label>
                <label>
                    <h4>Father Name:</h4>
                    <input value={fatherName}
                           onChange={(e) => setFatherName(e.target.value)}
                           placeholder="Father name"
                    />
                </label>
                <label>
                    <h4> Phone Number:</h4>
                    <input value={number}
                           onChange={(e) => setNumber(e.target.value)}
                           type="tel"
                           placeholder="+996 *** *** ***"
                    />
                </label>
                <label>
                    <h4> E-mail Address:</h4>
                    <input value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           type="email"
                           placeholder="Qwerty12345@mail.com"
                    />
                </label>
                <button className="Button">Submit</button>
            </form>
        </>
    )
}