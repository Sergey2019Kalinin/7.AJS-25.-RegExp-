class Validator {
  constructor() {
  }

  validateUsername(name) {
  	if (/\w|-/.test(name))
    return /^[^-_\d]((?!\d{3}).)*[^-_\d]$/.test(name)
  }
}

export default Validator;