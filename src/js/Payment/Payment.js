import React, { useState } from "react";
import { TextField, Button, Typography, FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const styles = {
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
        maxWidth: "500px",
        margin: "0 auto",
    },
    formTitle: {
        margin: "1rem 0",
        fontWeight: "bold",
        fontSize: "1.2rem",
    },
    formInput: {
        margin: "0.5rem 0",
        width: "100%",
    },
    formControl: {
        width: "100%",
    },
    formButton: {
        marginTop: "1rem",
    },
};

const Payment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors["name"] = "Please enter your name";
        }

        if (!email) {
            formIsValid = false;
            errors["email"] = "Please enter your email";
        }

        if (typeof email !== "undefined") {
            let pattern = new RegExp(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
            );
            if (!pattern.test(email)) {
                formIsValid = false;
                errors["email"] = "Please enter a valid email address";
            }
        }

        if (!address) {
            formIsValid = false;
            errors["address"] = "Please enter your address";
        }

        if (!cardNumber) {
            formIsValid = false;
            errors["cardNumber"] = "Please enter your card number";
        }

        if (!expiryDate) {
            formIsValid = false;
            errors["expiryDate"] = "Please enter your expiry date";
        }

        if (!cvv) {
            formIsValid = false;
            errors["cvv"] = "Please enter your CVV";
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Payment submitted");
        }
    };

    return (
        <div style={styles.formContainer}>
            <Typography variant="h4" style={styles.formTitle}>
                Payment Form
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <TextField
                    label="Name"
                    style={styles.formInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors["name"]}
                    helperText={errors["name"]}
                />
                <TextField
                    label="Email"
                    style={styles.formInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors["email"]}
                    helperText={errors["email"]}
                />
                <TextField
                    label="Address"
                    style={styles.formInput}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    error={errors["address"]}
                    helperText={errors["address"]}
                />
                <FormControl style={styles.formControl} error={errors["cardNumber"]}>
                    <InputLabel htmlFor="cardNumber">Card Number</InputLabel>
                    <Input
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <FormHelperText>{errors["cardNumber"]}</FormHelperText>
                </FormControl>
                <FormControl style={styles.formControl} error={errors["expiryDate"]}>
                    <InputLabel htmlFor="expiryDate">Expiry Date</InputLabel>
                    <Input
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                    <FormHelperText>{errors["expiryDate"]}</FormHelperText>
                </FormControl>
                <FormControl style={styles.formControl} error={errors["cvv"]}>
                    <InputLabel htmlFor="cvv">CVV</InputLabel>
                    <Input
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                    />
                    <FormHelperText>{errors["cvv"]}</FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={styles.formButton}
                >
                    Pay Now
                </Button>
            </form>
        </div>
    );
};

export default Payment;
