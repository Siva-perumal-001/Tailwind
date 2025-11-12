
const Advanced = () => {
  return (
    <div className='mx-15 my-4 flex flex-col gap-5'>
    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg
                   hover:scale-105 active:scale-95 transition-transform duration-300">
        Click Me
    </button>

    <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-blue-500 border-gray-300"></div>

    <span className="relative flex h-10 w-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
    </span>

    <div className="animate-pulse space-y-4 p-4 max-w-sm">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
    </div>

    <div className="animate-bounce text-5xl ">
        👇
    </div>

    <div className="max-w-sm bg-violet-300 shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
        <img src="/turf.jpg" className="rounded-lg mb-4" alt="Turf" />
        <h2 className="text-xl font-semibold mb-2">Greenfield Turf</h2>
        <p className="text-gray-600 mb-4">Best spot for evening matches.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Book Now</button>
    </div>

    <button className="bg-green-600 w-xs hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">Success</button>
    <button className="bg-red-600 w-xs hover:bg-red-700 text-white px-4 py-2 rounded-lg transition ml-3">Danger</button>

    </div>
  )
}

export default Advanced