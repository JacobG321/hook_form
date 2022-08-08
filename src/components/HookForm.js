import React, { useState } from  'react';
    
const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // error section
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    
    const createUser = (e) => {
        e.preventDefault();
        
        if(formValidation() === true){
            
            const newUser = { firstName, lastName, email, password, confirmPassword };
    
            // resets submission to empty string
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setHasBeenSubmitted(true);
            console.log("Welcome", newUser);
        }
    };

    const formValidation = () =>{
        let isValid = true
        if(firstName.length < 3){
            setFirstNameError("First name is too short");
            isValid = false;
        }
        if(lastName.length < 3){
            setLastNameError("Last name is too short");
            isValid = false;
        }
        if(email.length < 5){
            setEmailError("Email is too short");
            isValid = false;
        }
        if(password.length < 8){
            setPasswordError("Password is too short");
            isValid = false;
        }
        if(password !== confirmPassword){
            setConfirmPasswordError("Passwords do not match")
            isValid = false;
        }
        return isValid
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return(
        <div>
            <h1>{ formMessage() }</h1>
            <form onSubmit={createUser}>
                <div>
                    <label> First Name: </label> 
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                    
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

        </div>
    );
};
    
export default HookForm;