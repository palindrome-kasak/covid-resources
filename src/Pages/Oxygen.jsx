import React from 'react';
import firebase from 'firebase';
import {useEffect , useState} from 'react';
import OutlinedCard from '../components/OutlinedCard'


const db = firebase.database();
const Oxygen= (props) => {
const [data, setdata] = useState([]);

//filter(element => element.city === "Patna" )
//filter(element => element.city !== "0" && element.city >="Patna" )


useEffect(() => {
  const dataref =db.ref(props.stateName+"Data")
  dataref.once('value',async(snapshot)=>{
    let data = await snapshot.val()
     setdata(data == null ? [] : data)
    console.log(data);
  })
}, [])

return (
  <>
<h1>Oxygen facility</h1>
{data.filter(element => element.nameOfResource == "Oxygen" ).map( (element,index) => <div style={styles.items}>
<OutlinedCard City={element.City}
nameOfResource={element.nameOfResource}
          Address={element.Address}
          Contact={element.Contact}
          Price={element.Price}
          Comments={element.Comments}
          verficationDataTime={element.verficationDataTime}
          vendorName={element.vendorName}
      />
</div>)}
</>
)
}

const styles = {
  items: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0ffff',
      paddingBottom:'3%',
  }

};

export default Oxygen