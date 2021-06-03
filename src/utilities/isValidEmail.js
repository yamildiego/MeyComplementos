const isValidEmail = mail => {
    // eslint-disable-next-line
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

export default isValidEmail;