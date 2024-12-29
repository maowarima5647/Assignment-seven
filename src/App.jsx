

import Navbar from './navbar'
import Allplayers from './allplayers/allplayer'
import Card from './card/card'
import footerbg from './assets/logo-footer.png'
import { useEffect, useState } from 'react'
import bgi from './assets/bg-shadow.png'

import Swal from 'sweetalert2';
function App() {
const bgimg = {
  backgroundImage:`url(${bgi})`
}
 const [isactive,setisActive] = useState({
  cart:true,
  status:'active'
 })

const[selectPrice,setSelectprice] = useState([]);

const handledelete = (id) =>{
const newp = selectPrice.filter((p) => p.id != id);
setSelectprice(newp)
}






const handleprice = (price) =>{
  const isexist = selectPrice.find((p) =>p.id == price.id);


  if(isexist){
   alert('already Added')
      
  }
  else{
   
    const newPrice = [...selectPrice,price]
    setSelectprice(newPrice)}
 
}
console.log(selectPrice);
 
const [addcoin, setAddcoin] = useState(0);
const handleAdd = () => {
  setAddcoin(addcoin + 60000); 
  if (addcoin ) {
    Swal.fire({
      icon:  'success',
      title: 'Your balance is sufficient!',
     
    })}
};

const handleRemove = (price) => {
  

  if (addcoin  <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'You do not have sufficient balance!',
      text: 'Please check your balance and take necessary actions.',
    }).then(() => {
      
      setAddcoin(0);
    });
  } else {
  
    setAddcoin(addcoin - price);
  }


};
 


/*
 const [selectedplayers,setSelectedplayers] = useState([])


const handleselectedplayers = (playrs) =>{
  console.log(playrs)
}
*/
const handleisactive = (status) =>{
if(status == 'cart'){
  setisActive({
     cart:true,
  status:'cart'
  })
}
else{
  setisActive({
    cart:false,
 status:'about'
 })
}
}


console.log(isactive)




  return (
    <>
    
    
    <Navbar selectPrice={selectPrice.length}  addcoin={addcoin} handleAdd={handleAdd} handleRemove={handleRemove} ></Navbar>
<div className='flex justify-between w-10/12 mx-auto'>
<Allplayers  handleprice={ handleprice}  handleRemove={ handleRemove}></Allplayers>

<Card selectPrice ={selectPrice} isactive ={isactive} handleisactive={handleisactive} handledelete={handledelete}></Card>
</div>


<div style={bgimg}
 className='w-8/12 mx-auto items-center
  flex justify-center bg-slate-200 p-7 
  rounded '>

<form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Subscribe to our newsletter 
          for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
   
</div>








<div className='bg-black '>
<div className='flex justify-center items-center py-5' > <img src={footerbg}alt="" /></div>
  
<footer className="footer bg-black text-white p-10  mx-auto">

  <nav>
    <h6 className="footer-title">About us</h6>
    <h5> We are a passionate team <br /> dedicated to 
      providing the best <br /> services to our customers.</h5>
  </nav>
  <nav>
    <h6 className="footer-title">Quiek Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Survics</a>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Subscribe to our newsletter 
          for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

</div>
<hr />

<div>
<footer className="footer footer-center bg-black text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} -Your company All right reserved </p>
  </aside>
</footer>

</div>



    </>
  )
}

export default App
