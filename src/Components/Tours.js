import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
    const Remove = (a)=>{
        console.log(a);
        props.Delfun(a)
    }
  return (
    <section>
        <div className='title'>
            <h2>
                Our Tours
            </h2>
            <div className='underline'></div>
        </div>
        <div style={{textAlign:"center"}} className='tours'>
            {props.malumot.lengeth === 0 ? ( 
              <button onClick={()=>props.Ref()} className='btn'>Refresh</button>):
             (props.malumot.map((item) => {
                return (
                    <Tour
                       key={item.name} 
                        id={item.id}
                        name={item.name}
                        info={item.info}
                        price={item.price}
                        image={item.image}
                        Fun={Remove}
                    />
                )
            }))}

         
        </div>
    </section>
  )
}

export default Tours