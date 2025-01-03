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

    const materialOptions = [
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
        { value: '10k', label: '10k' },
        { value: '11k', label: '11k' },
        { value: '12k', label: '12k' },
        { value: '13k', label: '13k' },
        { value: '14k', label: '14k' },
        { value: '15k', label: '15k' },
        { value: '16k', label: '16k' },
        { value: '17k', label: '17k' },
        { value: '18k', label: '18k' },
        { value: '19k', label: '19k' },
        { value: '20k', label: '20k' },
        { value: '21k', label: '21k' },
        { value: '22k', label: '22k' },
        { value: '23k', label: '23k' },
        { value: '24k', label: '24k' },
    ];

    return (
        <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
            <div className="max-w-full mx-auto">
                <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
                    <BreadcrumbNav />
                </div>
                <div className="flex flex-wrap gap-8">
                    <div className="w-full">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
                            <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
                                Personal Information
                            </div>
                            <div className="p-7">
                                <form>
                                    <div className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-[#3c50e0] bg-[#eff4fb] py-4 px-4 sm:py-7.5">
                                        <input
                                            type="file"
                                            className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
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
                                    </div>
                                    <div className="flex flex-row gap-5 mb-5">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                htmlFor="material-select"
                                                className="block mb-2 text-sm font-medium text-black"
                                            >
                                                Material
                                            </label>
                                            <Select
                                                options={materialOptions}
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                                placeholder="Select Material"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                htmlFor="gold-kt-select"
                                                className="block mb-2 text-sm font-medium text-black capitalize"
                                            >
                                                main  diamond
                                            </label>
                                            <Input placeholder={'enter main dimond'} />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        {selectedValue === 'gold' && (
                                            <div className="flex w-full gap-3 item-center">
                                                <div className="w-full sm:w-1/2">
                                                    <label
                                                        htmlFor="gold-color-select"
                                                        className="block mb-2 text-sm font-medium text-black"
                                                    >
                                                        Gold Color
                                                    </label>
                                                    <Changeableselecter
                                                        options={goldColorOptions}
                                                        value={goldColor}
                                                        onChange={handleGoldColorChange}
                                                        placeholder="Select Gold Color"
                                                    />
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                    <label
                                                        htmlFor="gold-color-select"
                                                        className="block mb-2 text-sm font-medium text-black"
                                                    >
                                                        select Gold Karat
                                                    </label>
                                                    <Bestoption
                                                        options={goldKaratOptions}
                                                        value={goldKarat}
                                                        onChange={handleGoldKaratChange}
                                                        placeholder="Select Gold Karat"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                    </div>

                                    <div className="flex w-full gap-3 mb-5 item-center">
                                        <div className="w-full md:w-1/2 ">
                                            <label
                                                htmlFor="side_stone"
                                                className="block mb-3 text-sm font-medium text-black capitalize"
                                            >
                                                side stone
                                            </label>
                                            <div className="relative">
                                                <Input placeholder="Enter email address" />
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
                                                <Input placeholder="Enter size address" />
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
                                                <Input placeholder="Enter Cost " />

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
                                                <Input placeholder="Enter Remark" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-4">
                                        <Seconduray label="Add" />
                                        <Primary label="Export" />
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
