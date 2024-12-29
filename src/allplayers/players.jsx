

const Players = ({player, handleRemove, handleprice}) => {
//    console.log(handleprice)
   const {name,nationality,price,img} = player;


   const handleButtonClick = () => {
  
    handleRemove(price);
    handleprice(player); 
  };
    return (
        <div className='border p-3 m-7 w-10/12' >
       <h5>  <img src={img} alt="" /> </h5> 
        <div className='flex mb-5'>
            <img src="https://img.icons8.com/?size=30&id=98957&format=png" alt="" />
            <h1 className='text-2xl font-bold'>{name}</h1>
        </div>
        <div className='flex border-b justify-between mb-5' > 
            <h5 className='flex'><img className='w-4'  src="https://img.icons8.com/?size=50&id=2755&format=png" alt="" />{nationality}</h5>
            <button>All-Rounder</button>
        </div>
          <h5>Rating</h5>
         
         <div className='flex justify-between'>
            <h5>Let-Hand-Bat</h5>
            <h4>Let-Hand-Bat</h4>
         </div>
         <div className='flex justify-between items-center m-5'>
            <h5>{price}</h5>
            <button onClick={handleButtonClick} className='btn bg-lime-500'>Choose Player</button>
         </div>
        </div>
    );
};

export default Players;