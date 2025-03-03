import React from 'react';

const Loader = () => {
    return (

        <div className='w-full min-h-[30vh] flex items-center justify-center flex-col text-white'>
            {/* Spinner  */}
            <div className='w-[2rem] h-[2rem] border-2 rounded-full border-b-blue-400 animate-spin'>fgd</div>
            <p className='text-black text-sm'>Loading...</p>
        </div>
    );
};

export default Loader;