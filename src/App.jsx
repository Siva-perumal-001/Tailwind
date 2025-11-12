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

    <button className='bg-amber-700 text-white p-3 m-5 border-3 border-slate-900 rounded-4xl hover:bg-amber-400 hover:text-black cursor-pointer'>
      Click here
    </button>

    <div className='container bg-gray-400 mx-auto p-3 rounded-xl relative border-2 border-red-400'>
      <p className='mb-5 '>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus illum laudantium, 
        molestiae expedita culpa animi dolorum ex iste eveniet possimus fugiat consequatur deleniti 
        facilis doloremque voluptatum ratione perspiciatis quam officia nostrum maiores, reprehenderit 
        sapiente excepturi? Hic eligendi dolorum excepturi libero maiores ducimus molestiae unde rerum ab 
        laudantium eius, enim provident eaque eveniet, sapiente nobis fuga quidem accusamus iure dolores
      </p>
      <div className='absolute bottom-0  transform translate-y-5'>
      <button className='bg-pink-500 text-white rounded-lg p-2 '>
          I_am_btn
        </button>
      </div>
    </div>

      <div className='text-center mt-8 bg-red-300 md:bg-blue-300 lg:bg-green-400'>
        responsive color bg changes
      </div>

      <div className='mt-4 bg-amber-600 flex justify-around items-center h-20'>
        <div className="bg-emerald-300">div 1</div>
        <div className="bg-emerald-300">div 2</div>
        <div className="bg-emerald-300">div 3</div>
      </div>

      <div className='grid grid-cols-3 gap-1 container mx-auto my-3 text-white'>
        <div className="bg-pink-600 text-center">content 1</div>
        <div className="bg-pink-600 text-center">content 2</div>
        <div className="bg-pink-600 text-center">content 3</div>
        <div className="bg-pink-600 text-center">content 4</div>
        <div className="bg-pink-600 text-center">content 5</div>
        <div className="bg-pink-600 text-center">content </div>
      </div>

     <div className='flex gap-5 mb-5'>
      <button className='my-btn'>click me</button>
      <button className='my-btn'>submit</button>
      <button className='my-btn'>button</button>
     </div>

     <div className='mb-5'>
      <p className='bg-green-200 leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat qui reprehenderit ipsa.</p>
      <p className='bg-red-200 leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eveniet laborum natus dignissimos accusamus temporibus incidunt modi soluta sunt ullam.</p>
      <p className='bg-yellow-200 leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat qui reprehenderit ipsa.</p>
     </div>

     <div className='ml-5 mb-5'>
      <p className='tracking-tighter'>This is the Tighter Text</p>
      <p className='tracking-tight'>This is the Tight Text</p>
      <p className='tracking-wide'>This is the Wide Text</p>
      <p className='tracking-wider'>This is the wider Text</p>
      <p className='tracking-widest'>This is the Widest Text</p>
     </div>

     <div className='w-3xl mx-auto mb-5'>
      <p className='text-left'>Left</p>
      <p className='text-center'>Center</p>
      <p className='text-right'>Right</p>
     </div>

     <div className='mb-5'> 
      <p className='truncate w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam expedita assumenda, corrupti, ut saepe aliquam enim velit perspiciatis </p>
      <p className='line-clamp-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quis rerum ipsa! Dolore, optio laudantium! Cum enim quis facere perferendis, aliquid mollitia alias nemo fugiat, consectetur dignissimos ex accusamus, facilis odio? Iste, fuga deserunt! Perspiciatis labore, ratione at dolorem nemo veritatis dicta temporibus animi, optio asperiores eveniet deserunt, iure explicabo?</p>
     </div>


    </>
  )
  }

export default App;