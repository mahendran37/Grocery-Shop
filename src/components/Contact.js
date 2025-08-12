import React from 'react'
import '../components/Benifits.css';
import Cucumber from '../Asesst/cucumber.jpeg';
import Guava from '../Asesst/Guava.jpg';
import Honey from '../Asesst/Honey.jpeg';
import papaya from '../Asesst/papaya.jpg';
import watermelon from '../Asesst/watermelon.jpg';
import Tomato from '../Asesst/tomato.jpg';
import Apple from '../Asesst/Apple.jpg';


const Products = [
  {id:1,name:'Cucumber',h2:'DID YOU KNOW?',p:"Cucumber are made of about 96% water. Eating Cucumber can hlp keep you hydrated, it contains antioxidants that protect your body",h3:"mahendranmech@gamil.com",bg:Cucumber,},
  {id:2,name:'Apple',h2:'DID YOU KNOW?',p:"Honey never spoils even after thousand years it has natural  antibactiral properties",h3:"mahendranmech@gamil.com",bg:Honey},
  {id:5,name:'Papaya',h2:'DID YOU KNOW?',p:"Apple float beacaues they are 25% air.Eating apple improve heart health,apple skin contains most of its nutrients ",h3:"mahendranmech@gamil.com",bg:Apple},
  
]

const Contact = () => {
  return (
    <>
     <div className='containers'>
      <div className='row'>
        {Products.map((product)=>(
          <div className='potato-car'style={{backgroundImage:`url(${product.bg})`,maxWidth:"300px",height:'400px',}}>
            <div className='overlay'>
            <div className='content-box'>
              <h2>{product.name}</h2>
              <h1>{product.h2}</h1>
              <p>{product.label}</p>
              <p>{product.p}</p>
              <h3 className='footer fw-bold'>{product.h3}</h3>
            </div>
            </div>
          </div>
        ))}
      </div>
     </div>
    </>
  )
}

export default Contact
