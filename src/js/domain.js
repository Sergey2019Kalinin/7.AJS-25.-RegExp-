class Validator {
  constructor() {
  }

  validateUsername(name) {
    return /^[^-_\d]((?!\d{4}).)*[^-_\d]$/.test(name)
  }
}

export default Validator;