import React, { Fragment, useState } from "react"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import styles from "./Contact.module.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [submittedMessage, setSubmittedMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedMessage(`Thank you ${formData.name}! We have received your message.`)
        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <h2>Contact Form</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button name="submit" className={styles.submitButton} type="submit">Submit</button>
                    {submittedMessage && (
                        <p name="succes" className={styles.successMessage}>{submittedMessage}</p>
                    )}
                </form>
            </div>
            <Footer />
        </Fragment>

    )
}

export default Contact