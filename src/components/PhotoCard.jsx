import React, { useRef } from 'react';
import { FcLike } from 'react-icons/fc';
import { BsDownload } from 'react-icons/bs';
import { FaShare, FaCloudDownloadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toBlob } from "html-to-image";
import toast from 'react-hot-toast';

const ImageCard = ({ item }) => {
    const imageRef = useRef(null);

    // Share Photo Functionality 
    const sharePhotoHandler = async (name) => {
        const imgUrl = await toBlob(imageRef.current);
        console.log(imageRef.current);
        const file = {
            files: [
                new File([imgUrl], `${name}.jpg`, {
                    type: imgUrl.type,
                }),
            ],
            title: `${name}`,
            text: 'Check out this image!',
        };

        try {
            if (navigator.share) {
                await navigator.share(file);
            } else {
                toast.error("Can't share");
            }
        } catch (err) {
            toast.error('Error sharing image:', err);
        }

    };

    return (
        <div className=' bg-gray-100 p-2 rounded-xl hover:shadow-xl transition-all duration-300'>

            {/* Photo */}
            <div className='w-full h-[20rem] shadow-lg group overflow-hidden rounded-xl'>
                <Link to={`/photo/${item.id}`}><img ref={imageRef} src={item.urls.small} alt={item.alt_description} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' /></Link>
            </div>

            {/* Description, Likes, and Download  */}
            <div className='flex flex-col  gap-4 text-gray-500 justify-between text-xl px-2 py-4'>

                <div className='flex items-center justify-between gap-3'>
                    {/* Discription  */}
                    <h1 className=' line-clamp-1 capitalize'>{item.alt_description}</h1>

                    {/* No of likes */}
                    <span className='flex items-center gap-1 '>
                        <figure className='text-2xl'>
                            <FcLike />
                        </figure>
                        <p>{item.likes}</p>
                    </span>
                </div>

                <div className='flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-2'>
                        {/* Download Count  */}
                        <span className='flex items-center gap-1 '>
                            <figure className='text-2xl'>
                                <FaCloudDownloadAlt />
                            </figure>
                            <p>{item.downloads}</p>
                        </span>

                        {/* Share Button  */}
                        <button className='text-sm w-max flex items-center gap-1 border-2 p-2 rounded-sm hover:border-gray-500 transition-all duration-300' onClick={() => sharePhotoHandler(item.alt_description)}>
                            <FaShare />
                            <span> Share</span>
                        </button>

                    </div>

                    {/* Download Button  */}
                    <button className='text-lg  w-max text-white border-2 border-green-500 p-1 rounded-sm hover:text-black font-semibold bg-green-500 hover:bg-transparent transition-all duration-300'>
                        <a href={`${item.links.download}&amp;force=true`}>
                            <span> <BsDownload /></span>
                        </a>
                    </button>
                </div>
            </div>

        </div >
    );
};

export default ImageCard;