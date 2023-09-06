import React from 'react'

const GreenButton = ({text = 'Login', icon, backgroundColor = '#10C843', color='#ffff', borderColor='#10C843', onClickHandler}) => {
  
  const style = {
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: "1rem",
    color: color,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    border: "solid",
    borderSize: "2px",
    padding: "15px 25px",
    cursor: 'pointer',
    borderRadius: "100px",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <button style={style} onClick={onClickHandler}>
      <a href='/' style={{textDecoration: 'none', display:'flex', gap: "10px", color, alignItems: 'center', justifyContent:'center'}}>{text} {icon}</a>
    </button>
  )
}

export default GreenButton