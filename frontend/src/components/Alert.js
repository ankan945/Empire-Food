import React from 'react';

function Alert(props) {
  return (
    props.alert && 
    <div className={`position-absolute top-20 start-50 translate-middle-x px-2 py-8 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{ zIndex: 9999 ,width: '40%', top: '20px'}}>
      <center><strong>{props.alert.msg}</strong></center>
    </div>
  )
}

export default Alert;
