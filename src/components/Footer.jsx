import React from 'react'


<box>hii</box>
const Footer = () => {
    return (
        <div style={styles.box}>
            <h1 style={styles.head}>@copyRight</h1>,
        </div>
    )
};

const styles ={
    box: {
       // padding: '80px 60px',
      // padding: '80px 60px',
      display:'flex',
      justifyContent:'center',
       background: 'black',
       bottom: '0',
       width: '100%',
       position: 'fixed',
    
    },
    head:{
        color:'#808080',   
    }

};

export default Footer