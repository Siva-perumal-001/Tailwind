import React from 'react'

const App = () => {
  return (
    <>
     {/* <div>
       <p className='text-xs'>xtra small text</p>
       <p className='text-sm'>small text</p>
       <p className='text-base'>base text</p>
       <p className='text-lg'>large text</p>
       <p className='text-xl'>xtra large</p>

       <p className="text-2xl">extra large text 2</p>
       <p className="text-3xl">extra large text 3</p>
       <p className="text-4xl">extra large text 4</p>
       <p className="text-5xl">extra large text 5</p>
       <p className="text-6xl">extra large text 6</p>
       <p className="text-7xl">extra large text 7</p>
       <p className="text-8xl">extra large text 8</p>
       <p className="text-9xl">extra large text 9</p>

       /*for custom size*/
      //  <p className='text-custom'>Custom size - 140px</p>

       /*for responsive font size*/ 
      //  <p className='text-sm md:text-base lg:text-lg'>responsive text</p>
    //  </div> 
     }
    
    <div className='bg-primary'>
      <h1 className='text-3xl font-bold leading-loose'>heading of passage</h1>
      <span className='font-bold'>Lorem ipsum dolor sit,</span> amet consectetur adipisicing elit. <span className='font-extrabold'>Autem omnis eveniet suscipit. </span>
      <span className='leading-relaxed'>Repellendus quo sit, labore nisi quasi, ratione sapiente dolorem deserunt eum id reprehenderit 
      harum neque voluptate aut. Repudiandae, at? Molestiae eum mollitia numquam. Quae fugiat id atque, 
      quis iusto neque aperiam laborum sit odit consequatur quod culpa nihil! Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Repellendus ipsum, facilis aliquid fugit quis fugiat eos laborum laboriosam esse, 
      recusandae dignissimos ex facere harum impedit accusamus nobis? Corporis eaque in dignissimos fugiat eius nisi 
      earum odit aperiam libero doloribus deleniti, sequi voluptatum vitae quae ea voluptas dolores alias illo laborum.</span>
    </div>
    
    <div className='h-8 w-8 m-3 bg-pure-red rounded-full'></div>
    <h2 className='bg-purple-400 text-pink-900'>text color</h2>

    <button className='bg-amber-700 text-white p-3 m-10 border-3 border-slate-900 rounded-4xl hover:bg-amber-400 hover:text-black cursor-pointer'>
      Click here
      </button>
    </>
  )
}

export default App