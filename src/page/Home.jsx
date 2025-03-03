import React, { useEffect, useState } from 'react';
import PhotoCard from '../components/PhotoCard';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import homeBackground from "../assets/bg.jpg";
import { getRandomPhotos, searchPhotos } from '../redux/action';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {
    const [query, setQuery] = useState("");

    // Dispatcher 
    const dispatch = useDispatch();

    // Getting data from store 
    const { loading, data } = useSelector(state => state.photos);

    useEffect(() => {
        if (query != "") {
            dispatch(searchPhotos(query));
        } else {
            dispatch(getRandomPhotos());
        }
    }, [query]);

    // Header Background Inline Style 
    const headerBackgroundStyle = {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };

    return (
        <div className='overflow-hidden'>

            <div style={headerBackgroundStyle} className='min-h-[60vh] sm:min-h-[75vh] flex items-center justify-center shadow-xl'>

                {/* Header Content  */}
                <div className='p-4 md:p-16 sm:w-[80%] space-y-4 md:space-y-4 lg:space-y-6'>

                    {/* Heading  */}
                    <p className='text-xl font-semibold text-black animate-slideLeft'>Welcome To</p>

                    {/* Logo Title  */}
                    <div className='animate-bounceUpDown'>
                        <h1 className='text-4xl sm:text-6xl font-extrabold text-white tracking-wider'>Image</h1>
                        <h1 className='text-4xl sm:text-6xl font-extrabold text-white tracking-wider'>Traverse</h1>
                    </div>

                    {/* Search Input  */}
                    <div className='w-[90%] sm:w-[60%] animate-slideUp relative flex items-center text-gray-400 focus-within:text-gray-600'>
                        <figure className='text-2xl absolute ml-3 pointer-events-none '><AiOutlineSearch /></figure>
                        <input type="text" name='serach' placeholder='Search Now...' autoComplete='off'
                            className='w-full pr-4 pl-12  py-2 placeholder-gray-500 text-black rounded-lg outline-none ring-1 ring-gray-300 focus:shadow-lg '
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                </div>

            </div>

            {/* List of Random Photos */}
            <div>
                {
                    loading ? <Loader /> :
                        data && data.length > 0 ?
                            <div className='px-2 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 '>
                                {
                                    data.map((item, index) => (

                                        <PhotoCard key={index} item={item} />
                                    ))
                                }
                            </div>
                            : <div className='min-h-[25vh] flex items-center justify-center '>
                                <p className=' text-xl sm:text-3xl font-extrabold text-center'>REGRET NO PHOTO FOUND</p>

                            </div>
                }
            </div>

        </div>
    );
};

export default Home;