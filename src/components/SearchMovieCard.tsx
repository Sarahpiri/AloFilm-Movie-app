import cartPic from '../assets/series-1.png'

const SearchMovieCard = () => {
  return (
    <div className='bg-[#070021] hover:scale-95 transform-content transition-all cursor-pointer hover: flex flex-col items-center justify-center p-2  rounded-lg shadow-lg hover:shadow-xl duration-300'>
    <div><img src={cartPic} alt="search-image" style={{width:200, borderRadius:"10px"}}/></div>
    <p className='text-white p-4'>Moon Knight</p>
    </div>
  )
}

export default SearchMovieCard