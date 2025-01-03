import React, { useState } from 'react';
import BreadcrumbNav from '../../components/ui/breadcrumb';
import Input from '../../components/ui/input';
import Seconduray from '../../components/ui/seconduray';
import Primary from '../../components/ui/primary';
import { MdOutlineFileUpload } from 'react-icons/md';
import Select from '../../components/ui/select'; // Import Select component
import Bestoption from '../../components/ui/bestoption';
import Changeableselecter from '../../components/ui/changeableselecter';

const Profile = () => {
    const [selectedValue, setSelectedValue] = useState('select');
    const [goldColor, setGoldColor] = useState('');
    const [goldKarat, setGoldKarat] = useState('');
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
            productTotal: "", // This will be auto-calculated
            shipping: "",
            totalCost: "", // This will be auto-calculated
            image: null, // Store image URL here
        }
    ]);
    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
    };

    const handleGoldColorChange = (event) => {
        setGoldColor(event.target.value);
    };

    const handleGoldKaratChange = (event) => {
        setGoldKarat(event.target.value);
    };
    const [headerLogo, setHeaderLogo] = useState('logo1');

    const logoImages = {
        logo1: 'https://labtreasure.in/cdn/shop/files/LAB_TREASURE_BLUE_LOGO_PNG-removebg-preview_5477dd8b-0b30-429d-9874-254877885f70.png?v=1732698304&width=400',
        logo2: 'https://w7.pngwing.com/pngs/256/867/png-transparent-zomato-logo-thumbnail.png',
    };

    const handleLogoChange = (event) => {
        setHeaderLogo(event.target.value);
    };

    // Handle changes in form fields
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedFormData = [...formData];
        updatedFormData[index][name] = value;

        // Auto-calculate productTotal and totalCost when other values change
        if (name === 'cost' || name === 'shipping') {
            const { cost, shipping } = updatedFormData[index];
            const productTotal = parseFloat(cost || 0);
            const totalCost = productTotal + parseFloat(shipping || 0);
            updatedFormData[index].productTotal = productTotal;
            updatedFormData[index].totalCost = totalCost;
        }

        setFormData(updatedFormData);
    };

    // Handle image upload for each form entry
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

    // Add new form entry
    const handleAddClick = (e) => {
        e.preventDefault();
        setFormData([
            ...formData,
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
                productTotal: "", // auto-calculated
                shipping: "",
                totalCost: "", // auto-calculated
                image: null, // Image will be stored here
            }
        ]);
    };

    // Metal, color, and karat options
    const metalOptions = [
        { value: 'select', label: 'Select an option' },
        { value: 'gold', label: 'Gold' },
        { value: 'platinum', label: 'Platinum' },
        { value: 'silver', label: 'Silver' },
    ];

    const goldColorOptions = [
        { value: 'yellow', label: 'Yellow' },
        { value: 'white', label: 'White' },
        { value: 'rose', label: 'Rose' },
    ];

    const goldKaratOptions = [
        { value: '9K', label: '9K' },
        { value: '10K', label: '10K' },
        { value: '11K', label: '11K' },
        { value: '12K', label: '12K' },
        { value: '14K', label: '14K' },
        { value: '18K', label: '18K' },
        { value: '22K', label: '22K' },
        { value: '24K', label: '24K' },
    ];

    return (
        <div className="container">
            <h2>Select Logo</h2>
            <select onChange={handleLogoChange} value={headerLogo}>
                <option value="logo1">Logo 1</option>
                <option value="logo2">Logo 2</option>
            </select>
            <div>
                <img src={logoImages[headerLogo]} alt="Header Logo" style={{ width: '200px' }} />
            </div>

            <div className="form-container">
                <button onClick={handleAddClick}>Add Entry</button>

                {formData.map((entry, index) => (
                    <div key={index} className="form-entry">
                        <select
                            name="metal"
                            value={entry.metal}
                            onChange={(event) => handleInputChange(index, event)}
                        >
                            {metalOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        {entry.metal === 'gold' && (
                            <>
                                <select
                                    name="color"
                                    value={entry.color}
                                    onChange={(event) => handleInputChange(index, event)}
                                >
                                    {goldColorOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>

                                <select
                                    name="karat"
                                    value={entry.karat}
                                    onChange={(event) => handleInputChange(index, event)}
                                >
                                    {goldKaratOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </>
                        )}
                        <select
                            name="color"
                            value={entry.color}
                            onChange={(event) => handleInputChange(index, event)}
                        >
                            {goldColorOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>

                        <select
                            name="karat"
                            value={entry.karat}
                            onChange={(event) => handleInputChange(index, event)}
                        >
                            {goldKaratOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            name="mainDiamond"
                            value={entry.mainDiamond}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Main Diamond"
                        />
                        <input
                            type="text"
                            name="sideStone"
                            value={entry.sideStone}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Side Stone"
                        />
                        <input
                            type="text"
                            name="size"
                            value={entry.size}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Size"
                        />
                        <input
                            type="number"
                            name="cost"
                            value={entry.cost}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Cost"
                        />
                        <textarea
                            name="remark"
                            value={entry.remark}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Remark"
                        ></textarea>
                        <input
                            type="date"
                            name="date"
                            value={entry.date}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder="Date"
                        />

                        <label htmlFor={`image-upload-${index}`}>Upload Product Image:</label>
                        <input
                            type="file"
                            id={`image-upload-${index}`}
                            onChange={(event) => handleImageChange(index, event)}
                        />
                        {entry.image && <img src={entry.image} alt="Product Preview" style={{ width: '100px', marginTop: '10px' }} />}

                        <div>
                            <p>Product Total: {entry.productTotal}</p>
                            <input
                                type="number"
                                name="shipping"
                                value={entry.shipping}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder="Shipping"
                            />
                            <p>Total Cost: {entry.totalCost}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    );
};

export default Profile;
