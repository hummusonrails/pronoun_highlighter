const FormErrors = ({urlErrors}) =>
  <div className='formErrors'>
    {Object.keys(urlErrors).map((fieldName, i) => {
      if(urlErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {urlErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
  export default FormErrors;