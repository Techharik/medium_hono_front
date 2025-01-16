import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurl } from '../../config/dbconfig';
import { useNavigate } from 'react-router-dom';


interface BlogData {
    id: number;
    title: string;
    content: string;
    user: {
        email: string;
        name: string;
    };
}

interface FetchResponse {
    success: boolean;
    data: BlogData[];
}

const Blog = () => {
    const [blog, setBlog] = useState<BlogData[]>([]);
    const naivagte = useNavigate();


    const fetchBlogs = async () => {
        try {
            const { data }: { data: FetchResponse } = await axios.get(`${apiurl}/m/blog`);
            console.log(data);
            if (data.success) {
                setBlog(data?.data);
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className='max-w-screen-lg mx-auto pt-5 px-2'>
            <div className='w-full h-[200px] overflow-hidden rounded-xl border bg-blend-color-burn bg-gradient-to-br from-green-300 to-red-300'>

            </div>
            <div className='flex  gap-4'>

                <div className='flex flex-1 flex-col gap-3 py-5'>
                    {blog.map((d) => (
                        <div key={d.id} className='flex  gap-5 border cursor-pointer hover:shadow-md hover:shadow-green-50 rounded-xl p-4' onClick={()=>naivagte(`/blog/${d.id}`)}>
                            <div className='w-[100px] h-[100px] rounded-lg '>
                                <img
                                    src="https://images.unsplash.com/photo-1736773794202-d5db39910d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D"
                                    alt="Blog header"
                                    className='object-cover h-full w-full object-center  rounded-lg hover:scale-105 transition-all duration-200 '
                                />
                            </div>
                            <div className='text-xl '>
                                <h1 className='font-medium'>{d.title}</h1>
                                <p className='text-base text-slate-600'>{d.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='h-[500px] w-[200px] bg-green-100 rounded-lg mt-10 hidden md:block'>

                </div>
            </div>
        </div>
    );
};

export default Blog;
