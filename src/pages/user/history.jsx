import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Submit from '../../components/ui/submit';

const App = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        logo: '',
        image: '',
        metal: '',
        color: '',
        karat: '',
        size: '',
        mainDiamond: '',
        sideStone: '',
        productCost: '',
        remark: '',
    });

    const [productID, setProductID] = useState(''); // For updating/deleting

    // Fetch all products
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };



    // Update a product
    const updateProduct = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/products/${productID}`, product);
            alert('Product updated successfully');
            fetchProducts(); // Refresh the list
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Delete a product
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            alert('Product deleted successfully');
            fetchProducts(); // Refresh the list
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Input handler for form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-10">
            <div className="w-full bg-white rounded-md shadow-md my-7 ">
                <div className="px-5 pt-6 overflow-hidden pb-2.5 sm:px-7 xl:pb-1 ">
                    <div className="flex flex-col gap-2 mb-8 sm:flex-row sm:items-center sm:justify-between">
                        <div className="">
                            <h2 className="text-[22px] mb-1.5 capitalize  font-bold text-[rgb(28,36,52)]">
                                Top channels
                            </h2>

                        </div>
                        {/* <div className="flex items-center">
                                    <div className="relative cursor-pointer ">
                                        <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={handleonclick} />
                                        {isopen && (
                                            <div className="absolute right-0 z-40 w-40 p-1 space-y-1 bg-white border rounded-sm shadow-sm top-full border-stroke">
                                                <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                                    <FaRegEdit /> edit
                                                </button>
                                                <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                                    <RiDeleteBin6Line />  delete</button>
                                            </div>
                                        )}
                                    </div>
                                </div> */}
                    </div>
                    <table className="w-full text-left table-auto ">
                        <thead>
                            <tr className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 *:text-center ">
                                <th className="p-2.5 xl:p-4">metal</th>
                                <th className="p-2.5 xl:p-4">color</th>
                                <th className="p-2.5 xl:p-4">karat</th>
                                <th className="p-2.5 xl:p-4">size</th>
                                <th className="p-2.5 xl:p-4">main diamond</th>
                                <th className="p-2.5 xl:p-4">side stone</th>
                                <th className="p-2.5 xl:p-4">product cost</th>
                                <th className="p-2.5 xl:p-4">remark</th>
                                <th className="p-2.5 xl:p-4">action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {products.map((prod, index) => (
                                <tr
                                    key={prod.productID}
                                    className="transition duration-150 border-t hover:bg-gray-50"
                                >
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.productID}</td>
                                    <td className="flex items-center p-2.5 xl:p-4">
                                        <img
                                            src={prod.image}
                                            alt={prod.name}
                                            className="w-10 h-10 mr-3 rounded-full"
                                        />
                                        <span className="hidden md:block" >
                                            {prod.name}
                                        </span>
                                    </td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.metal}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.color}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.karat}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.size}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.mainDiamond}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.sideStone}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">${prod.productCost}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700">{prod.remark}</td>
                                    <td className="p-2.5 text-center xl:p-4 text-gray-700 flex gap-4 ">
                                        <Submit onClick={() => setProductID(prod.productID)}>edit</Submit>
                                        <Submit label={'Delete'} onClick={() => setProductID(prod.productID)}></Submit>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default App;
