import React, { useState } from 'react'
import SubHero from '../components/SubHero'
import { useAuth } from '../context/auth'
import { toast } from 'react-toastify'

function AddProperty() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [rooms, setRooms] = useState('')
    const [size, setSize] = useState('')
    const [about, setAbout] = useState('')
    const [image, setImage] = useState(null);
    const [gallery, setGallery] = useState([]);
    const [preview, setPreview] = useState(null);
    const [auth, setAuth] = useAuth();
    const handelImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    // const handleGallery = (e) => {
    //     const files = Array.from(e.target.value);
    //     setGallery(files);
    // }


    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('price', price);
        formData.append('rooms', rooms);
        formData.append('size', size);
        formData.append('author', auth.user._id);
        formData.append('about', about);
        if (!image) {
    alert("Please select an image.");
    return;
    }
    formData.append('image', image);

        try {
            const res = await fetch('https://dwello-backend-tau.vercel.app/api/property/create', {method :'post', body: formData});
            const data = await res.json();
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };
  return (
    <div>

        <SubHero title={'ADD PROPRTY'}/>
        <div className='px-10 py-10 '>
            <form action="" onSubmit={handleSubmit} method='POST' className='flex flex-col gap-2 w-1/2 border-2 border-black p-2 rounded-xl bg-white '>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Name' className='p-2 border-2 border-gray-400 rounded-lg'/>
                <input onChange={(e) => setAbout(e.target.value)} value={about} type="text" placeholder='Enter About' className='p-2 border-2 border-gray-400 rounded-lg'/>
                <input onChange={(e) => setLocation(e.target.value)} value={location} type="text" placeholder='Enter loaction' className='p-2 border-2 border-gray-400 rounded-lg'/>
                <input onChange={(e) => setPrice(e.target.value)} value={price} type="text" placeholder='Enter price' className='p-2 border-2 border-gray-400 rounded-lg'/>
                <input onChange={(e) => setRooms(e.target.value)} value={rooms} type="text" placeholder='Enter rooms' className='p-2 border-2 border-gray-400 rounded-lg'/>
                <input onChange={(e) => setSize(e.target.value)} value={size} type="text" placeholder='Enter size' className='p-2 border-2 border-gray-400 rounded-lg'/>
                <input onChange={handelImage} name="image" type="file" accept='image/*'  className='p-2 border-2 border-gray-400 rounded-lg'/>
                {
                    preview && <img src={preview} width={100} height={100}/>
                }
                {/* <input onChange={(e) => handleGallery(e)} multiple type="file" accept="image/*"  className='p-2 border-2 border-gray-400 rounded-lg'/> */}
                <input type="submit" value={'Submit'}  className='p-2 border-2 border-gray-400 rounded-lg'/>
            </form>
        </div>
    </div>
  )
}

export default AddProperty