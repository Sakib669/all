import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => { 
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire(
                            'YOLO!',
                            'Item Added Successfully',
                            'success'
                        )
                    }
                })
            }
        })
     };


    return (
        <section className="w-full px-10">
            <SectionTitle subHeading="What's new"
                heading='Add an Item'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register('name', { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <article className="flex flex-col justify-between md:flex-row gap-10 my-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category *</span>
                        </label>
                        <select defaultValue='Pick one' {...register('category', { required: true, maxLength: 120 })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price *</span>
                        </label>
                        <input type="number" placeholder="Price"
                        {...register('price', { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                    </div>
                </article>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea
                        {...register('recipe', { required: true, maxLength: 120 })}
                        className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text">Item Image *</span>
                    </label>
                    <input
                    {...register('image', { required: true, maxLength: 120 })}
                    type="file" className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-warning btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </section>
    );
};

export default AddItems;