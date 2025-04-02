# Manual & Automated Testing Report

## Project Name:  
**SpinWise Testing Assessment**

## Tester Name:  
**Kristians Abolins**

## Test Date:  
**01.04.2025**

---

## Test Summary  
**An exploritary test of a authentification registry form**

---

## Test Environment  
- **Operating System:** MacOS M3 Sonoma
- **Browser/Version: Chromium 132 / Opera 117.0.5408.53** 
- **Other Tools/Dependencies:** [Insert additional tools or dependencies]  

---

## System Under Test Requirements
- **Registration Form Fields:**
Username (required, alphanumeric, 3-20 characters)
Email (required, valid email format)
Password (required, minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 number)
Confirm Password (required, must match the Password field)
Submit Button (to submit the form)
- **Validation Feedback:**
Display clear error messages for each field if validation fails.
Highlight the fields with errors.
Form Submission:
If all validations pass:
Redirect the user to the Home Page.
Display a success message: "You have registered successfully!"


---

## Test Cases  

| Test Case ID | Test Case Description | Steps to Reproduce | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|------------------------|---------------------|-----------------|---------------|--------------------|----------|
| TC-001       | Happy Path Registration form | Meet all the Registration form field requirements and submit the form | Expect to return code 200 with a success message  | System returns code 200 with a message "You have registered successfully!" | Pass | |
| TC-002       | Trigger input validation error on every input field  | Username using 2 chars, email doesnt meet the format, password length < 8, Email field Invalid email format, password confirm does not match | Input field validation errors triggered | Username: "Username must be 3-20 alphanumeric characters.", Password: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.", Confirm password "Passwords do not match." | Pass | Front-end validated email field first, and only after repeated form submission the other fields were validated |
| TC-003       | Boundary tests on username and password fields | Username <3 & >20, Password <8 & infinite | Username and Passford fields accept values within their stated range | Username only accepts 3 - 20 incl., Password only 8 - infinite | Pass |
| TC-004       | Username & Password special character / absence of requiements test | user_name, user:name, uѕer123(contains cirylic 's'),  password1, PASSWORD1, Password, Pass1, 12345678, A1b2C3d4, Password1, ValidPass9, SecureP4ss, Test1234A, P4sswørd, P@ssword1, P4$$W0rd, P a s s w o r d 1 | expect the system to behave according to the error description of the use of characters | System does behave according to the error description of the use of characters | Pass | |

---

## Bugs/Issues Found  

| Bug ID | Description | Steps to Reproduce | Severity (1-5) | Comments |
|--------|-------------|---------------------|---------------|----------|
| BUG-001 | The registration form appears to simulate successful registration without sending any data to a backend service | Fill a error-free registration form and monitor network trafic - the page only validated the fields and sends a GET instead of POST request to the backend to display the success messagge | 5/5 | Should send a POST request with a encrypted data to the BE and then it should validate and return the success page |
| BUG-002 | Registration form security risk - Password is NOT hidden in the input element in page script | Enter a password, open dev tools and locate password input element | 5/5 | Value should be hidden |


---

## Room for improvement
1. System to show log in button after the registration, instead of Go To Registration.
2. Use strong password suggestion google plugin.
3. Password strength meter for better UX.
4. Before successfull registration, make the user to confirm the email.
5. Success message baloon for better UX.
