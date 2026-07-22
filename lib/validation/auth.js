export function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

export function normalizeName(value) {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "");
}

export function validateEmail(value) {
  const email = normalizeEmail(value);

  if (!email) {
    return "Email is required.";
  }

  if (email.length > 254) {
    return "Email address is too long.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return "Enter a valid email address.";
  }

  return "";
}

export function validateName(value) {
  const name = normalizeName(value);

  if (!name) {
    return "Full name is required.";
  }

  if (name.length < 2) {
    return "Enter your full name.";
  }

  if (name.length > 80) {
    return "Name must be 80 characters or fewer.";
  }

  return "";
}

export function validatePhone(value) {
  const phone = normalizePhone(value);
  const digits = phone.replace(/\D/g, "");

  if (!digits) {
    return "Mobile number is required.";
  }

  if (digits.length < 7 || digits.length > 15) {
    return "Enter a valid mobile number.";
  }

  return "";
}

export function validatePassword(value, { signup = false } = {}) {
  if (!value) {
    return "Password is required.";
  }

  if (value.length > 128) {
    return "Password must be 128 characters or fewer.";
  }

  // Login should not impose signup rules on an existing password.
  if (!signup) {
    return "";
  }

  if (value.length < 8) {
    return "Use at least 8 characters.";
  }

  if (!/[A-Z]/.test(value)) {
    return "Include at least one uppercase letter.";
  }

  if (!/[a-z]/.test(value)) {
    return "Include at least one lowercase letter.";
  }

  if (!/\d/.test(value)) {
    return "Include at least one number.";
  }

  return "";
}

export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return "Confirm your password.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return "";
}