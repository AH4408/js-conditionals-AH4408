/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let level = 0;
  let isString = false ;
  let criteria = "";

  if(typeof password !== "string" || password.length == 0) return "weak";
  if(password.length >= 8) level++;
  if(password !== password.toLowerCase()){ level++ ; isString = true ;}
  if(password !== password.toUpperCase()){ level++ ; isString = true ;}
  if(/\d/.test(password)) level++;
  if(/[^a-zA-Z0-9 ]/.test(password)) level++;
  
  if(!isString) criteria = "weak";

  if (level <= 1) criteria = "weak";
  else if (level <= 3) criteria =  "medium";
  else if (level === 4) criteria = "strong";
  else criteria = "very strong"; // all 5

  return criteria;
}

