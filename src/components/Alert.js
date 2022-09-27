import React from 'react'

export default function Alert(props) {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
          
          <button type='Button' className='btn-close float-end'  data-bs-dismiss="alert"  aria-label='close'/>
     </div>
    </div>
  )
}
