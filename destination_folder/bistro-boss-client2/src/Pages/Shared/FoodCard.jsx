/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCarts";

const FoodCard = ({ item }) => {
    const {user} = useContext(AuthContext);
    const { name, image, price, _id } = item;
    const location = useLocation();
    const navigate = useNavigate();
    const [cart , refetch] = useCart();
    const handleAddToCart = item => {
        // console.log('item from item' , item);
        if(user && user.email){
            const orderItem = {menuItemId: _id, name, price, image, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {

                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Want to Login'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}} );
                }
              })
        }
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl" />
            </figure>
            <p className='bg-slate-900 text-yellow-500 rounded-xl absolute right-0 mt-12 mr-14 px-2 py-1'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 bg-slate-100 border-b-4 my-10 border-orange-400 block mx-auto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;