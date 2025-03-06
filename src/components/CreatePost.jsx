import React from 'react'

const CreatePost = () => {
  return (
    <div className='p-4'>
        <h2 className='text-lg'>Create Post</h2>
        <div className="image h-[200px] w-full bg-stone-300 bg-cover cursor-pointer bg-no-repeat rounded-xl bg-[url('https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg')]">
            <input className='opacity-0 h-full w-full' type="file" />
        </div>
        <textarea type="text" className='h-min-[70px] p-2 w-full outline-0 border-[1px] border-stone-400 rounded-lg mt-4' ></textarea>
        <button className='btnBg text-white w-full h-[45px] rounded-2xl cursor-pointer'>Post</button>
    </div>
  )
}

export default CreatePost