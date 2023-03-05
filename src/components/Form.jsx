import React from 'react'

function Form({submitHandler, setPokemon, image, cardColor, info}) {
  return (
    <>
    <div className='h-44 flex place-content-center relative' >
       {image && (
         <div style={{backgroundColor: cardColor}} className='rounded w-96 h-44 justify-self-center'>
            <p className='bg-white p-2 m-2 font-semibold rounded-full absolute '>HP: {info.stats[0].base_stat} </p>
            <img src={image} className='m-auto '  alt='Will Appear Here' />

           <div className='flex font-semibold align-items-center justify-around text-align-center m-5'>
           <p>Attack <br></br>{info.stats[1].base_stat} </p>
           <p>Defense <br></br>{info.stats[2].base_stat}</p>
           <p>Speed <br></br>{info.stats[5].base_stat} </p>
            </div>
         
            </div>
       )}

    </div>
        
    
    <form onSubmit={submitHandler} className='p-5 '>
        <input className='bg-gray-500 hover:bg-gray-800 text-xs p-4 rounded text-white' placeholder={`Your Favorite Pokemon`} type='text' onChange={(e) => setPokemon(e.target.value)} />
        <br></br>
        <input className='m-3 bg-gray-200 hover:bg-gray-800 hover:cursor-pointer p-2 rounded' type='submit' />
    </form>
    
    </>
  )
}

export default Form