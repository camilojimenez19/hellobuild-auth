
/* Error codes of firabase */
const errorCodes = {
    "auth/email-already-in-use": "Email already in use",
    "auth/weak-password": "Password should be at least 6 characters",
    "auth/invalid-email": "Email is invalid",
    "auth/wrong-password": "Wrong credentials",
    "auth/user-not-found": "User not exist"
}

/* Handle error for firabase */
export const firabaseError = (code) => {
    if(code in errorCodes)
        return errorCodes[code]
    
    return "Error with firabase"
}