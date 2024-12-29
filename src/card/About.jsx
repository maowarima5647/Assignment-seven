import React from 'react';

const About = ({ selectPrice , handledelete}) => {
    return (
        <div>
            <div>
       
 
       {selectPrice.map((price) => {
  console.log(price.img);  
  console.log(price.name); 
  return (
    <div className='flex m-7 mx-5' key={price.id}>
      <img className='w-32' src={price.img} alt={price.name} />
      <p className='mt-7 mx-5'>{price.name}</p>
      <button onClick={()=>handledelete(price.id)} className='btn'> Delete</button>
    </div>
  );
})}
</div>
        </div>
    );
};

export default About;