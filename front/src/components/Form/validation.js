const validation = (userData, errors, setErrors) => {
    if (!userData.username) {
      setErrors({...errors, username: "Campo Incompleto"});
    } else if (userData.username.length > 35) {
      setErrors({...errors, username: "Limite de caracteres"});
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
      setErrors({...errors, username: "Email inválido"});
    } else {
      setErrors({...errors, username: ""});
    }
  
    if (userData.password.length) {
      if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({...errors, password: "Longitud de password inválida"});
      } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(userData.password)) {
        setErrors({...errors, password: "Debe contener al menos un número"});
      } else {
        setErrors({...errors, password: ""});
      }
    } else {
      setErrors({...errors, password: ""});
    }
  
    // retorna un valor de acuerdo a como se esté utilizando la función
  
  };
  
  export default validation;
  