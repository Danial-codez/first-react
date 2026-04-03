import React from 'react'

const Cards = (props) => {
  return (
    <div className='parent'>
      <div className="upper">
        <div className="tasweer">
            <img src={props.logo} alt={props.comp} />
        </div>
        <div className='save'>
            <button>
                Save
            </button>
        </div>

      </div>
      <div className="middle">
        <div className="head">
            <div>{props.comp}</div>
        <div className="small">{props.date}</div>
        </div>
        <div className="designer">{props.role}</div>
        <div className="neech">
            <button>{props.time}</button>
            <button>{props.exp}</button>
        </div>
      </div>
      <div className="line">

      </div>
      <div className="down">
        <div className="textneeche">
        <div className='rate'>{props.salary}</div>
        <div className='loca'>{props.loc}</div>
        </div>
        <div className="apply">
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
