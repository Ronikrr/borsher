import React, { useEffect, useState } from 'react';
import BreadcrumbNav from '../../components/ui/breadcrumb';
import Input from '../../components/ui/input';
import Seconduray from '../../components/ui/seconduray';
import Primary from '../../components/ui/primary';
import { MdOutlineFileUpload } from 'react-icons/md';
const Profile = () => {

    const [totalShipping, setTotalShipping] = useState(0);
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const storedProductNumber = parseInt(localStorage.getItem('currentProductNumber')) || 1;

    const [products, setProducts] = useState(storedProducts);  // State to store the products
    const [currentProductNumber, setCurrentProductNumber] = useState(storedProductNumber);  // State to keep track of the product number
    useEffect(() => {
        const storedShipping = localStorage.getItem('totalShipping');
        if (storedShipping) {
            setTotalShipping(parseFloat(storedShipping));
        }
    }, []);

    const handleShippingChange = (event) => {
        const newShippingValue = event.target.value;
        setTotalShipping(newShippingValue);

        // Store updated shipping value in localStorage
        localStorage.setItem('totalShipping', newShippingValue);
    };
    const formatProductNumber = (number) => {
        return `OD${String(number).padStart(4, '0')}`;
    };

    const [formData, setFormData] = useState([
        {
            metal: "",
            color: "",
            karat: "",
            mainDiamond: "",
            sideStone: "",
            size: "",
            cost: "",
            remark: "",
            date: "",
            productTotal: "",
            shipping: "",
            totalCost: "",
            image: null,
        }
    ]);
    const [uploadedLogo, setUploadedLogo] = useState(null);

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newLogoUrl = URL.createObjectURL(file);
            setUploadedLogo(newLogoUrl);
        }
    };

    const getBackgroundColor = (color) => {
        switch (color) {
            case 'yellow':
                return 'bg-yellow-300';
            case 'white':
                return 'bg-white';
            case 'rose':
                return 'bg-rose-300';
            case 'gold':
                return 'bg-yellow-500';
            default:
                return 'bg-[rgb(239,244,251)]';
        }
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedFormData = [...formData];
        updatedFormData[index][name] = value;


        if (name === 'cost' || name === 'shipping') {
            const { cost, shipping } = updatedFormData[index];
            const productTotal = parseFloat(cost || 0);
            const totalCost = productTotal + parseFloat(shipping || 0);
            updatedFormData[index].productTotal = productTotal;
            updatedFormData[index].totalCost = totalCost;
        }

        setFormData(updatedFormData);
    };


    const handleImageChange = (index, event) => {
        const file = event.target?.files?.[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') && file.size <= 1024 * 1024) {
            const updatedFormData = [...formData];
            updatedFormData[index].image = URL.createObjectURL(file); // Create a URL for the uploaded image
            setFormData(updatedFormData);
        } else {
            alert('Invalid file type or file is too large. Only PNG, JPG, or GIF (max 1MB) are allowed.');
        }
    };

    const handleAddClick = (e) => {
        e.preventDefault();

        // Format the product number as ODXXXX
        const formattedNumber = formatProductNumber(currentProductNumber);

        // Add a new product with the formatted order number
        setFormData([
            ...formData,
            {
                orderNumber: formattedNumber, // Add the order number
                metal: "",
                color: "",
                karat: "",
                mainDiamond: "",
                sideStone: "",
                size: "",
                cost: "",
                remark: "",
                date: "",
                productTotal: "",
                shipping: "",
                totalCost: "",
                image: null,
            }
        ]);

        // Increment the currentProductNumber state and update in localStorage
        setCurrentProductNumber(currentProductNumber + 1);
        localStorage.setItem('currentProductNumber', currentProductNumber + 1);
    };

    // Retrieve shipping from localStorage



    const metalOptions = [
        { value: 'select', label: 'Select an option' },
        { value: 'Gold', label: 'Gold' },
        { value: 'platinum', label: 'Platinum' },
        { value: 'silver', label: 'Silver' },
    ];

    const goldColorOptions = [
        { value: 'yellow', label: 'Yellow' },
        { value: 'white', label: 'White' },
        { value: 'rose', label: 'Rose' },
    ];

    const goldKaratOptions = [
        { value: '9KT', label: '9KT' },
        { value: '10KT', label: '10KT' },
        { value: '11KT', label: '11KT' },
        { value: '12KT', label: '12KT' },
        { value: '13KT', label: '13KT' },
        { value: '14KT', label: '14KT' },
        { value: '15KT', label: '15KT' },
        { value: '16KT', label: '16KT' },
        { value: '17KT', label: '17KT' },
        { value: '18KT', label: '18KT' },
        { value: '19KT', label: '19KT' },
        { value: '20KT', label: '20KT' },
        { value: '21KT', label: '21KT' },
        { value: '22KT', label: '22KT' },
        { value: '23KT', label: '23KT' },
        { value: '24KT', label: '24KT' },
    ];

    return (
        <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
            <div className="max-w-full mx-auto">
                <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
                    <BreadcrumbNav />
                </div>
                <div className="flex flex-wrap gap-8 mb-7">
                    <div className="w-full">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
                            <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
                                pdf product
                            </div>
                            <div className="flex items-center gap-4 p-7">
                                <div>
                                    <label htmlFor="upload-logo">
                                        <input
                                            type="file"
                                            id="upload-logo"
                                            accept="image/*"
                                            onChange={handleLogoUpload}
                                        />
                                    </label>
                                </div>

                                {/* Display uploaded logo if available */}
                                {uploadedLogo && (
                                    <div>
                                        <img
                                            src={uploadedLogo}
                                            alt="Uploaded Logo"
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-8">
                    <div className="w-full">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
                            <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
                                pdf product
                            </div>
                            <div className="p-7">

                                <form>
                                    {formData.map((entry, index) => (
                                        <div className="">
                                            <div className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-[#3c50e0] bg-[#eff4fb] py-4 px-4 sm:py-7.5">
                                                <input
                                                    type="file"
                                                    className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                                                    id={`image-upload-${index}`}
                                                    onChange={(event) => handleImageChange(index, event)}
                                                />
                                                <div className="flex flex-col items-center justify-center space-y-3">
                                                    <span className="flex items-center rounded-full justify-center w-10 h-10 bg-white border-[#e2e8f0]">
                                                        <MdOutlineFileUpload className="text-[22px] text-[#3c50e0]" />
                                                    </span>
                                                    <p>
                                                        <span className="text-[#3c50e0]">Click to upload</span> or drag
                                                        and drop
                                                    </p>
                                                    <p className="mb-1.5">SVG, PNG, JPG or GIF</p>
                                                    <p>(max, 800 X 800px)</p>
                                                </div>
                                                {entry.image && <img src={entry.image} alt="Product Preview" style={{ width: '100px', marginTop: '10px' }} />}
                                            </div>
                                            <div className="flex flex-row gap-5 mb-5">
                                                <div className="w-full sm:w-1/2">
                                                    <label
                                                        htmlFor="material-select"
                                                        className="block mb-2 text-sm font-medium text-black"
                                                    >
                                                        Material
                                                    </label>
                                                    <select
                                                        name='metal'
                                                        value={entry.metal}
                                                        onChange={(event) => handleInputChange(index, event)}
                                                        className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize '
                                                        placeholder="Select Material"
                                                    >
                                                        {metalOptions.map(option => (
                                                            <option key={option.value} value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                    <label
                                                        htmlFor="gold-kt-select"
                                                        className="block mb-2 text-sm font-medium text-black capitalize"
                                                    >
                                                        main  diamond
                                                    </label>
                                                    <Input
                                                        type={'text'}
                                                        name={"mainDiamond"}
                                                        value={entry.mainDiamond}
                                                        onChange={(event) => handleInputChange(index, event)}
                                                        placeholder={'enter main dimond'}
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                {entry.metal === 'Gold' && (
                                                    <div className="flex w-full gap-3 item-center">
                                                        <div className="w-full sm:w-1/2">
                                                            <label
                                                                htmlFor="gold-color-select"
                                                                className="block mb-2 text-sm font-medium text-black"
                                                            >
                                                                Gold Color
                                                            </label>
                                                            <select
                                                                name="color"
                                                                value={entry.color}
                                                                onChange={(event) => handleInputChange(index, event)}
                                                                className={`w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize ${getBackgroundColor(entry.color)}`} placeholder="Select Gold Color"
                                                            >
                                                                {goldColorOptions.map(option => (
                                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="w-full sm:w-1/2">
                                                            <label
                                                                htmlFor="gold-color-select"
                                                                className="block mb-2 text-sm font-medium text-black"
                                                            >
                                                                select Gold Karat
                                                            </label>
                                                            <select
                                                                name="karat"
                                                                value={entry.karat}
                                                                onChange={(event) => handleInputChange(index, event)}
                                                                className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize' placeholder="Select Gold karat"
                                                            >
                                                                {goldKaratOptions.map(option => (
                                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>

                                            <div className="flex w-full gap-3 mb-5 item-center">
                                                <div className="w-full md:w-1/2 ">
                                                    <label
                                                        htmlFor="sideStone"
                                                        className="block mb-3 text-sm font-medium text-black capitalize"
                                                    >
                                                        side stone
                                                    </label>
                                                    <div className="relative">
                                                        <Input
                                                            value={entry.sideStone}
                                                            name={`sideStone`}
                                                            onChange={(event) => handleInputChange(index, event)}
                                                            placeholder="Enter side stone"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2 ">
                                                    <label
                                                        htmlFor="size"
                                                        className="block mb-3 text-sm font-medium text-black capitalize"
                                                    >
                                                        size
                                                    </label>
                                                    <div className="relative">
                                                        <Input
                                                            value={entry.size}
                                                            name={`size`}
                                                            onChange={(event) => handleInputChange(index, event)}
                                                            placeholder="Enter size "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-full gap-3 mb-5 item-center">
                                                <div className="w-full md:w-1/2 ">
                                                    <label
                                                        htmlFor="cost"
                                                        className="block mb-3 text-sm font-medium text-black capitalize"
                                                    >
                                                        cost
                                                    </label>
                                                    <div className="relative">
                                                        <Input
                                                            type={'number'}
                                                            name="cost"
                                                            value={entry.cost}
                                                            onChange={(event) => handleInputChange(index, event)}
                                                            placeholder="Enter Cost "
                                                        />

                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2 ">
                                                    <label
                                                        htmlFor="Remark"
                                                        className="block mb-3 text-sm font-medium text-black capitalize"
                                                    >
                                                        remark
                                                    </label>
                                                    <div className="relative">
                                                        <Input
                                                            placeholder="Enter Remark"
                                                            name="remark"
                                                            value={entry.remark}
                                                            onChange={(event) => handleInputChange(index, event)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                    <div className="flex justify-end gap-4">
                                        <Seconduray label="Add" onClick={handleAddClick} />
                                        <Primary label="Export" />
                                    </div>
                                    <div className="flex flex-col w-full mt-5 space-y-6">
                                        <div className="flex justify-end w-full p-4 bg-white border rounded-md">
                                            <div className="w-3/12">
                                                <p className="my-4 font-semibold">
                                                    Product Total: {formData.reduce((acc, entry) => {
                                                        if (entry && typeof entry.productTotal === 'number') {
                                                            return acc + entry.productTotal;
                                                        }
                                                        return acc; // Skip undefined or invalid entries
                                                    }, 0)}
                                                </p>
                                                <div className="my-4">
                                                    <label htmlFor="total-shipping">Total Shipping</label>
                                                    <Input
                                                        type="number"
                                                        name="totalShipping"
                                                        value={totalShipping}
                                                        onChange={handleShippingChange}
                                                        placeholder="Shipping"
                                                    />
                                                </div>
                                                <p className="my-4 font-semibold">
                                                    Total Cost: {formData.reduce((acc, entry) => {
                                                        if (entry && typeof entry.productTotal === 'number') {
                                                            return acc + entry.productTotal;
                                                        }
                                                        return acc; // Skip undefined or invalid entries
                                                    }, 0) + parseFloat(totalShipping || 0)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
