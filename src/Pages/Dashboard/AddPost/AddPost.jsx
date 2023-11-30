
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddPostComponent = () => {
    const { register, handleSubmit } = useForm();

    const tagOptions = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Python', label: 'Python' },
        { value: 'Web Development', label: 'Web Development' },
        // Add other tag options similarly
    ];

    const onSubmit = async (data) => {
        try {
            const currentTime = new Date().toISOString();
            const postData = { ...data, postTime: currentTime };

            const response = await axios.post('https://discuss-dive-server.vercel.app/addPost', postData);
            if (response.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Post added!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error adding post!',
                footer: `Error: ${error.response?.data?.error || error.message}`
            });
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add Post</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-between">
                <div className="w-full md:w-5/12 lg:w-6/12 mb-4 md:pr-4">
                    <input type="text" {...register('authorImage')} placeholder="Author Image" className="w-full mb-4 p-2 border border-gray-300" />
                    <input type="text" {...register('authorName')} placeholder="Author Name" className="w-full mb-4 p-2 border border-gray-300" />
                    <input type="text" {...register('authorEmail')} placeholder="Author Email" className="w-full mb-4 p-2 border border-gray-300" />
                    <input type="text" {...register('postTitle')} placeholder="Post Title" className="w-full mb-4 p-2 border border-gray-300" />
                    <textarea {...register('postDescription')} placeholder="Post Description" className="w-full mb-4 p-2 border border-gray-300"></textarea>
                </div>
                <div className="w-full md:w-5/12 lg:w-6/12">
                    <Select {...register('tag')} options={tagOptions} placeholder="Select Tag" className="w-full mb-4" />
                    <input type="datetime-local" {...register('postTime')} placeholder="Post Time" className="w-full mb-4 p-2 border border-gray-300" />
                    <input type="number" {...register('upVote', { valueAsNumber: true })} placeholder="UpVote" className="w-full mb-4 p-2 border border-gray-300" defaultValue={0} />
                    <input type="number" {...register('downVote', { valueAsNumber: true })} placeholder="DownVote" className="w-full mb-4 p-2 border border-gray-300" defaultValue={0} />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPostComponent;
