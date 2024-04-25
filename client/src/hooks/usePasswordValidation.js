import { useContext } from "react"
import PasswordValidationContext from "../context/PasswordValidationContext"

export function usePasswordValidation() {
    return useContext(PasswordValidationContext)
}


