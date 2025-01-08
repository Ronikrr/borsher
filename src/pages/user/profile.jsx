// import React, { useEffect, useState } from 'react';
// import BreadcrumbNav from '../../components/ui/breadcrumb';
// import Input from '../../components/ui/input';
// import Seconduray from '../../components/ui/seconduray';
// import Primary from '../../components/ui/primary';
// import { MdOutlineFileUpload } from 'react-icons/md';
// import html2pdf from 'html2pdf.js';
// const Profile = () => {
//     const [totalShipping, setTotalShipping] = useState(0);


//     const handleShippingChange = (event) => {
//         const newShippingValue = event.target.value;
//         setTotalShipping(newShippingValue);

//         // Store updated shipping value in localStorage
//         localStorage.setItem('totalShipping', newShippingValue);
//     };

//     const [formData, setFormData] = useState([
//         {
//             metal: "",
//             color: "",
//             karat: "",
//             mainDiamond: "",
//             sideStone: "",
//             size: "",
//             cost: "",
//             remark: "",
//             date: "",
//             productTotal: "",
//             shipping: "",
//             totalCost: "",
//             image: null,
//         }
//     ]);
//     const [uploadedLogo, setUploadedLogo] = useState(null);

//     const handleLogoUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const newLogoUrl = URL.createObjectURL(file);
//             setUploadedLogo(newLogoUrl);
//         }
//     };

//     const getBackgroundColor = (color) => {
//         switch (color) {
//             case 'yellow':
//                 return 'bg-yellow-300';
//             case 'white':
//                 return 'bg-white';
//             case 'rose':
//                 return 'bg-rose-300';
//             case 'gold':
//                 return 'bg-yellow-500';
//             default:
//                 return 'bg-[rgb(239,244,251)]';
//         }
//     };

//     const handleInputChange = (index, event) => {
//         const { name, value } = event.target;
//         const updatedFormData = [...formData];
//         updatedFormData[index][name] = value;


//         if (name === 'cost' || name === 'shipping') {
//             const { cost, shipping } = updatedFormData[index];
//             const productTotal = parseFloat(cost || 0);
//             const totalCost = productTotal + parseFloat(shipping || 0);
//             updatedFormData[index].productTotal = productTotal;
//             updatedFormData[index].totalCost = totalCost;
//         }

//         setFormData(updatedFormData);
//     };


//     const handleImageChange = (index, event) => {
//         const file = event.target?.files?.[0];
//         if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') && file.size <= 1024 * 1024) {
//             const updatedFormData = [...formData];
//             updatedFormData[index].image = URL.createObjectURL(file); // Create a URL for the uploaded image
//             setFormData(updatedFormData);
//         } else {
//             alert('Invalid file type or file is too large. Only PNG, JPG, or GIF (max 1MB) are allowed.');
//         }
//     };


//     const handleAddClick = (e) => {
//         e.preventDefault();
//         const uniqueId = `OD${Date.now()}-${Math.floor(Math.random() * 1000)}`;
//         setFormData([
//             ...formData,
//             {
//                 id: uniqueId,
//                 metal: "",
//                 color: "",
//                 karat: "",
//                 mainDiamond: "",
//                 sideStone: "",
//                 size: "",
//                 cost: "",
//                 remark: "",
//                 date: "",
//                 productTotal: "",
//                 shipping: "",
//                 totalCost: "",
//                 image: null,
//             }
//         ]);

//     };

//     const metalOptions = [
//         { value: 'select', label: 'Select an option' },
//         { value: 'Gold', label: 'Gold' },
//         { value: 'platinum', label: 'Platinum' },
//         { value: 'silver', label: 'Silver' },
//     ];

//     const goldColorOptions = [
//         { value: 'yellow', label: 'Yellow' },
//         { value: 'white', label: 'White' },
//         { value: 'rose', label: 'Rose' },
//     ];

//     const goldKaratOptions = [
//         { value: '9KT', label: '9KT' },
//         { value: '10KT', label: '10KT' },
//         { value: '11KT', label: '11KT' },
//         { value: '12KT', label: '12KT' },
//         { value: '13KT', label: '13KT' },
//         { value: '14KT', label: '14KT' },
//         { value: '15KT', label: '15KT' },
//         { value: '16KT', label: '16KT' },
//         { value: '17KT', label: '17KT' },
//         { value: '18KT', label: '18KT' },
//         { value: '19KT', label: '19KT' },
//         { value: '20KT', label: '20KT' },
//         { value: '21KT', label: '21KT' },
//         { value: '22KT', label: '22KT' },
//         { value: '23KT', label: '23KT' },
//         { value: '24KT', label: '24KT' },
//     ];
//     const handleExportClick = (e) => {
//         e.preventDefault();
//         const selectedLogo = document.querySelector('input[name="logo"]:checked')?.value;

//         // Define the image URLs for both logos
//         const logo1Url = 'path_to_logo1_image.jpg'; // Replace with actual image path
//         const logo2Url = 'path_to_logo2_image.jpg'; // Replace with actual image path

//         let logoUrl = 'logo1';
//         if (selectedLogo === 'logo1') {
//             logoUrl = logo1Url;
//         } else if (selectedLogo === 'logo2') {
//             logoUrl = logo2Url;
//         }



//         let htmlContent = `
//           <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>A4 Company Brochure</title>

//     <style>
//         @page {
//             size: A4;
//             margin: 0;
//         }

//         body {
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             margin: 0;
//             padding: 0;
//             background-color: #f4f4f4;
//         }

//         .a4-page {
//             width: 210mm;
//             height: 297mm;
//             margin: 0 auto;
//             background-color: white;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//             overflow: hidden;
//             display: flex;
//             flex-direction: column;
//             position: relative;
//             z-index: 0;
//         }

//         .a4-page .image {
//             width: 100%;
//             position: absolute;
//             top: 0;
//             left: 0;
//             height: 100%;
//             z-index: -1;
//         }

//         .a4-page .image img {
//             width: 100%;
//             height: 100%;
//         }



//         @media print {
//             body {
//                 background-color: white;
//             }

//             .a4-page {
//                 box-shadow: none;
//             }
//         }

//         @media screen and (max-width: 210mm) {
//             .a4-page {
//                 width: 100%;
//                 height: auto;
//                 margin: 0;
//             }
//         }

//         header {
//             width: 100%;
//         }

//         header .logo {
//             width: 100%;
//             height: 55px;
//             display: flex;
//             justify-content: center;
//         }

//         header .logo img {
//             width: 285px;
//             height: 55px;
//         }

//         header .date {}

//         header .date p {
//             margin: 0;
//         }

//         .a4-page .body {
//             z-index: 1;
//         }

//         main {
//             padding: 20px;
//         }

//         main .product {
//             width: 100%;
//             display: flex;
//             align-items: center;
//             margin-bottom: 15px;
//         }

//         main .product_1 {
//             width: 100%;
//             display: flex;
//             align-items: center;
//             margin-bottom: 0;
//         }


//         main .product_image {
//             width: 300px;
//             height: 300px;
//         }

//         main .product_image img {
//             width: 100%;
//             height: 100%;
//             aspect-ratio: 1/1;
//             object-fit: cover;
//         }

//         .table {
//             padding-left: 20px;
//             width:100%;

//         }

//        table {
//     border-collapse: collapse;
//     width: 100%;
// }

//         table,
//         tr,
//         td {
//             border: 2px solid black;
//             height: 60px;
//         }

//         th {
//             padding-left: 20px;
//             width: 40%;
//             text-align: start;
//     padding-top: 0px;
//     // line-height: 2;
//     vertical-align: middle !important;
//      display: unset;
//         }

//         td {
//             padding-left: 20px;
//             width: 60%;
//             text-align: start;
//             padding-top: 0px;
//     // line-height: 2;
//     vertical-align: middle !important;
//      display: table-cell;
//         }

//         .total {
//             margin-top: 0px;
//             margin-bottom: 10px;
//             color: #f4f4f4;
//             background-color: #110353;
//             padding-left: 20px;
//             padding-right: 20px;
//             display: flex;
//             // align-items: center;
//             justify-content: space-between;
// height:40px
//         }

//         .total span {
//             font-size: 18px;
//             text-transform: capitalize;
//         }

//         footer {
//             width: 100%;
//             background-color: #F9D5E7;
//             color: #110353;
//         }

//         footer .footer_contact {
//             width: 80%;
//             margin: 0 auto;
//             display: flex;
//             // align-items: center;
//             justify-content: space-between;
//             position: relative;
//             height:50px
//         }

//         // footer .footer_contact .box {
//         //     position: absolute;
//         //     width: 40px;
//         //     height: 40px;
//         //     right: -50px;
//         //     top: -20px;
//         //     background-color: #F9D5E7;
//         //     display: flex;
//         //     // align-items: center;
//         //     justify-content: center;
//         //     border-radius: 99px;
//         //     border: 2px solid white;
//         // }

//         .color_box {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             border: none;
//         }

//         .color {
//             display: block;
//             width: 22px;
//             height: 22px;
//             background-color: yellow;
//             border-radius: 99px;
//             border: 1px solid black;
//         }
//     </style>

// </head>

// <body>
//   <div class="a4-page">
//         <div class="image">
//             <img src="./Diamond@4x1.png" alt="">
//         </div>
//          <div class="body">
//             <header>
//                 <div class="date">
//                     <p>6/1/2025</p>
//                 </div>
//                 <div class="logo">
//                     <img src=""${logoUrl}"" alt="">
//                 </div>
//             </header>
//             <main>
//        `;
//         const objectUrls = [];
//         formData.forEach((entry, index) => {
//             const { formattedNumber,
//                 metal,
//                 color,
//                 karat,
//                 mainDiamond,
//                 sideStone,
//                 size,
//                 cost,
//                 remark,
//                 date,
//                 productTotal,
//                 shipping,
//                 totalCost,
//                 image } = entry;
//             const imageUrl = image instanceof Blob ? URL.createObjectURL(image) : '';
//             if (imageUrl) objectUrls.push(imageUrl);


//             htmlContent += `


//                 <div class="product">
//                     <div class="product_image">
//                         <img src="${imageUrl}" alt="">
//                     </div>
//                     <div class="table">
//                         <table>
//                             <tr>
//                                 <th>gold</th>
//                                 <td>${metal}</td>
//                             </tr>
//                             <tr>
//                                 <th>Main Diamond</th>
//                                 <td>${mainDiamond}</td>
//                             </tr>
//                             <tr>
//                                 <th>Side Stone</th>
//                                 <td>${sideStone}</td>
//                             </tr>
//                             <tr>
//                                 <th>Quality</th>
//                                 <td>14k</td>
//                             </tr>
//                             <tr>
//                                 <th>Size</th>
//                                 <td>${size} </td>
//                             </tr>
//                             <tr>
//                                 <th>Oder Value</th>
//                                 <td> ${cost} </td>
//                             </tr>
//                             <tr>
//                                 <th>Color</th>
//                                 <td class="color_box"> <span class="color"></span>  ${color} </td>
//                             </tr>
//                             <tr>
//                                 <th>Remark</th>
//                                 <td>${remark}</td>
//                             </tr>
//                             <tr>
//                                 <th>Products ID</th>
//                                 <td>${formattedNumber}</td>
//                             </tr>
//                             <tr>
//                                 <th>Total Cost</th>
//                                 <td>${totalCost}</td>
//                             </tr>

//                         </table>
//                     </div>
//                 </div>
//     `;
//         });


//         htmlContent += `
//         <div class="total">
//                     <span>total</span>
//                     <span>1,000</span>
//                 </div>
//             </main>
//            <footer>
//     <div class="footer_contact" style="
//         display: flex;
//         align-items: flex-start;
//         position: relative;
//         gap: 5px;
//          height: 'auto'
//     ">
//         <!-- Email -->
//         <span>reasureleb@gmail.com</span>

//         <!-- Phone Number -->
//         <span>+91 75738 75177</span>

//         <!-- Circular Box -->
//         <div class="box" style="
//             width: 30px;
//             height: 40px;
//             background-color: #F9D5E7;
//             border-radius: 50%;
//             border: 2px solid white;
//           margin-top: -20px;
//      padding: 10px 16px;
//     line-height: 0;
//     transform: translate(45px, 1px);
//     display: flex
// ;
//     justify-content: center;
//     text-align: center;
//         ">
//             1
//         </div>
//     </div>
// </footer>

//         </div>
//          </div>
//            </body>
//            </html>
//        `;

//         // Create a container element to hold the HTML content
//         const tempDiv = document.createElement('div');
//         tempDiv.innerHTML = htmlContent;

//         const previewContainer = document.getElementById('preview-container'); // Replace with actual preview container ID
//         previewContainer.innerHTML = htmlContent;

//         const options = {
//             margin: 0,
//             filename: 'bill_design.pdf',
//             html2canvas: {
//                 scale: 2, // Improve clarity
//                 useCORS: true, // Ensure external assets are loaded correctly
//             },
//             jsPDF: {
//                 unit: 'mm',
//                 format: 'a4',
//                 orientation: 'portrait',
//             },
//             pagebreak: { mode: ['css', 'legacy'] }, // Handle page breaks
//         };
//         html2pdf().from(tempDiv).set(options).save();
//         objectUrls.forEach((url) => URL.revokeObjectURL(url));
//     };

//     // const handleExportClick = (e) => {
//     //     const element = document.getElementById('pdf-content');

//     //     const opt = {
//     //         margin: 1,
//     //         filename: 'product-details.pdf',
//     //         image: { type: 'jpeg', quality: 0.98 },
//     //         html2canvas: { dpi: 192, letterRendering: true },
//     //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     //     };

//     //     html2pdf().from(element).set(opt).save();
//     // }

//     return (
//         <>
//             <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
//                 <div className="max-w-full mx-auto">
//                     <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
//                         <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
//                         <BreadcrumbNav />
//                     </div>
// <div className="flex flex-wrap gap-8 mb-7">
//     <div className="w-full">
//         <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//             <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                 pdf product
//             </div>
//             <div className="flex items-center gap-4 p-7">
//                 <div>
//                     <label htmlFor="upload-logo">
//                         <input
//                             type="file"
//                             id="upload-logo"
//                             accept="image/*"
//                             onChange={handleLogoUpload}
//                         />
//                     </label>
//                 </div>

//                 {/* Display uploaded logo if available */}
//                 {uploadedLogo && (
//                     <div>
//                         <img
//                             src={uploadedLogo}
//                             alt="Uploaded Logo"
//                             style={{ width: "200px" }}
//                         />
//                     </div>
//                 )}

//             </div>
//         </div>
//     </div>
// </div>
//                     <div className="flex flex-wrap gap-8">
//                         <div className="w-full">
//                             <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//                                 <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                                     pdf product
//                                 </div>
//                                 <div className="p-7">

//                                     <form>
//                                         {formData.map((entry, index) => {
//                                             const formattedNumber = `gunrate od${String(index + 1).padStart(4, '0')}`;
//                                             return (
//                                                 <div className="">
//                                                     <label htmlFor=""> {entry.formattedNumber} </label>
//                                                     <div className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-[#3c50e0] bg-[#eff4fb] py-4 px-4 sm:py-7.5">
//                                                         <input
//                                                             type="file"
//                                                             className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
//                                                             id={`image-upload-${index}`}
//                                                             onChange={(event) => handleImageChange(index, event)}
//                                                         />
//                                                         <div className="flex flex-col items-center justify-center space-y-3">
//                                                             <span className="flex items-center rounded-full justify-center w-10 h-10 bg-white border-[#e2e8f0]">
//                                                                 <MdOutlineFileUpload className="text-[22px] text-[#3c50e0]" />
//                                                             </span>
//                                                             <p>
//                                                                 <span className="text-[#3c50e0]">Click to upload</span> or drag
//                                                                 and drop
//                                                             </p>
//                                                             <p className="mb-1.5">SVG, PNG, JPG or GIF</p>
//                                                             <p>(max, 800 X 800px)</p>
//                                                         </div>
//                                                         {entry.image && <img src={entry.image} alt="Product Preview" style={{ width: '100px', marginTop: '10px' }} />}
//                                                     </div>
//                                                     <div className="flex flex-row gap-5 mb-5">
//                                                         <div className="w-full sm:w-1/2">
//                                                             <label
//                                                                 htmlFor="material-select"
//                                                                 className="block mb-2 text-sm font-medium text-black"
//                                                             >
//                                                                 Material
//                                                             </label>
//                                                             <select
//                                                                 name='metal'
//                                                                 value={entry.metal}
//                                                                 onChange={(event) => handleInputChange(index, event)}
//                                                                 className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize '
//                                                                 placeholder="Select Material"
//                                                             >
//                                                                 {metalOptions.map(option => (
//                                                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div className="w-full sm:w-1/2">
//                                                             <label
//                                                                 htmlFor="gold-kt-select"
//                                                                 className="block mb-2 text-sm font-medium text-black capitalize"
//                                                             >
//                                                                 main  diamond
//                                                             </label>
//                                                             <Input
//                                                                 type={'text'}
//                                                                 name={"mainDiamond"}
//                                                                 value={entry.mainDiamond}
//                                                                 onChange={(event) => handleInputChange(index, event)}
//                                                                 placeholder={'enter main dimond'}
//                                                             />
//                                                         </div>
//                                                     </div>

//                                                     <div className="mb-5">
//                                                         {entry.metal === 'Gold' && (
//                                                             <div className="flex w-full gap-3 item-center">
//                                                                 <div className="w-full sm:w-1/2">
//                                                                     <label
//                                                                         htmlFor="gold-color-select"
//                                                                         className="block mb-2 text-sm font-medium text-black"
//                                                                     >
//                                                                         Gold Color
//                                                                     </label>
//                                                                     <select
//                                                                         name="color"
//                                                                         value={entry.color}
//                                                                         onChange={(event) => handleInputChange(index, event)}
//                                                                         className={`w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize ${getBackgroundColor(entry.color)}`} placeholder="Select Gold Color"
//                                                                     >
//                                                                         {goldColorOptions.map(option => (
//                                                                             <option key={option.value} value={option.value}>{option.label}</option>
//                                                                         ))}
//                                                                     </select>
//                                                                 </div>
//                                                                 <div className="w-full sm:w-1/2">
//                                                                     <label
//                                                                         htmlFor="gold-color-select"
//                                                                         className="block mb-2 text-sm font-medium text-black"
//                                                                     >
//                                                                         select Gold Karat
//                                                                     </label>
//                                                                     <select
//                                                                         name="karat"
//                                                                         value={entry.karat}
//                                                                         onChange={(event) => handleInputChange(index, event)}
//                                                                         className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize' placeholder="Select Gold karat"
//                                                                     >
//                                                                         {goldKaratOptions.map(option => (
//                                                                             <option key={option.value} value={option.value}>{option.label}</option>
//                                                                         ))}
//                                                                     </select>
//                                                                 </div>
//                                                             </div>
//                                                         )}

//                                                     </div>

//                                                     <div className="flex w-full gap-3 mb-5 item-center">
//                                                         <div className="w-full md:w-1/2 ">
//                                                             <label
//                                                                 htmlFor="sideStone"
//                                                                 className="block mb-3 text-sm font-medium text-black capitalize"
//                                                             >
//                                                                 side stone
//                                                             </label>
//                                                             <div className="relative">
//                                                                 <Input
//                                                                     value={entry.sideStone}
//                                                                     name={`sideStone`}
//                                                                     onChange={(event) => handleInputChange(index, event)}
//                                                                     placeholder="Enter side stone"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                         <div className="w-full md:w-1/2 ">
//                                                             <label
//                                                                 htmlFor="size"
//                                                                 className="block mb-3 text-sm font-medium text-black capitalize"
//                                                             >
//                                                                 size
//                                                             </label>
//                                                             <div className="relative">
//                                                                 <Input
//                                                                     value={entry.size}
//                                                                     name={`size`}
//                                                                     onChange={(event) => handleInputChange(index, event)}
//                                                                     placeholder="Enter size "
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="flex w-full gap-3 mb-5 item-center">
//                                                         <div className="w-full md:w-1/2 ">
//                                                             <label
//                                                                 htmlFor="cost"
//                                                                 className="block mb-3 text-sm font-medium text-black capitalize"
//                                                             >
//                                                                 cost
//                                                             </label>
//                                                             <div className="relative">
//                                                                 <Input
//                                                                     type={'number'}
//                                                                     name="cost"
//                                                                     value={entry.cost}
//                                                                     onChange={(event) => handleInputChange(index, event)}
//                                                                     placeholder="Enter Cost "
//                                                                 />

//                                                             </div>
//                                                         </div>
//                                                         <div className="w-full md:w-1/2 ">
//                                                             <label
//                                                                 htmlFor="Remark"
//                                                                 className="block mb-3 text-sm font-medium text-black capitalize"
//                                                             >
//                                                                 remark
//                                                             </label>
//                                                             <div className="relative">
//                                                                 <Input
//                                                                     placeholder="Enter Remark"
//                                                                     name="remark"
//                                                                     value={entry.remark}
//                                                                     onChange={(event) => handleInputChange(index, event)}
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             )
//                                         }

//                                         )}
//                                         <div className="flex justify-end gap-4">
//                                             <Seconduray label="Add" onClick={handleAddClick} />
//                                             <Primary label="Export" onClick={handleExportClick} />
//                                         </div>
//                                         <div className="flex flex-col w-full mt-5 space-y-6">
//                                             <div className="flex justify-end w-full p-4 bg-white border rounded-md">
//                                                 <div className="w-3/12">
//                                                     <p className="my-4 font-semibold">
//                                                         Product Total: {formData.reduce((acc, entry) => {
//                                                             if (entry && typeof entry.productTotal === 'number') {
//                                                                 return acc + entry.productTotal;
//                                                             }
//                                                             return acc; // Skip undefined or invalid entries
//                                                         }, 0)}
//                                                     </p>
//                                                     <div className="my-4">
//                                                         <label htmlFor="total-shipping">Total Shipping</label>
//                                                         <Input
//                                                             type="number"
//                                                             name="totalShipping"
//                                                             value={totalShipping}
//                                                             onChange={handleShippingChange}
//                                                             placeholder="Shipping"
//                                                         />
//                                                     </div>
//                                                     <p className="my-4 font-semibold">
//                                                         Total Cost: {formData.reduce((acc, entry) => {
//                                                             if (entry && typeof entry.productTotal === 'number') {
//                                                                 return acc + entry.productTotal;
//                                                             }
//                                                             return acc; // Skip undefined or invalid entries
//                                                         }, 0) + parseFloat(totalShipping || 0)}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>


//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div id="preview-container"></div>


//         </>
//     );
// };

// export default Profile;
// import React, { useEffect, useState } from 'react';
// import BreadcrumbNav from '../../components/ui/breadcrumb';
// import Input from '../../components/ui/input';
// import Seconduray from '../../components/ui/seconduray';
// import Primary from '../../components/ui/primary';
// import { MdOutlineFileUpload } from 'react-icons/md';
// import html2pdf from 'html2pdf.js';

// const Profile = () => {
//     const [totalShipping, setTotalShipping] = useState(0);
//     const [formData, setFormData] = useState([{
//         metal: "",
//         color: "",
//         karat: "",
//         mainDiamond: "",
//         sideStone: "",
//         size: "",
//         cost: "",
//         remark: "",
//         date: "",
//         productTotal: 0,
//         shipping: 0,
//         totalCost: 0,
//         image: null,
//     }]);
//     const [uploadedLogo, setUploadedLogo] = useState(null);

//     useEffect(() => {
//         const storedShipping = localStorage.getItem('totalShipping');
//         if (storedShipping) {
//             setTotalShipping(parseFloat(storedShipping));
//         }
//     }, []);

//     const handleShippingChange = (event) => {
//         const newShippingValue = event.target.value;
//         setTotalShipping(newShippingValue);
//         localStorage.setItem('totalShipping', newShippingValue);
//     };

//     const handleLogoUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const newLogoUrl = URL.createObjectURL(file);
//             setUploadedLogo(newLogoUrl);
//         }
//     };

//     const getBackgroundColor = (color) => {
//         switch (color) {
//             case 'yellow':
//                 return 'bg-yellow-300';
//             case 'white':
//                 return 'bg-white';
//             case 'rose':
//                 return 'bg-rose-300';
//             case 'gold':
//                 return 'bg-yellow-500';
//             default:
//                 return 'bg-[rgb(239,244,251)]';
//         }
//     };

//     const handleInputChange = (index, event) => {
//         const { name, value } = event.target;
//         const updatedFormData = [...formData];
//         updatedFormData[index][name] = value;

//         if (name === 'cost' || name === 'shipping') {
//             const { cost, shipping } = updatedFormData[index];
//             const productTotal = parseFloat(cost || 0);
//             const totalCost = productTotal + parseFloat(shipping || 0);
//             updatedFormData[index].productTotal = productTotal;
//             updatedFormData[index].totalCost = totalCost;
//         }

//         setFormData(updatedFormData);
//     };
//     const handleProductChange = (index, field, value) => {
//         const updatedProducts = [...FormData];
//         updatedProducts[index] = { ...updatedProducts[index], [field]: value };
//         setFormData(updatedProducts);
//     };
//     const handleImageChange = (index, event) => {
//         const file = event.target?.files?.[0];
//         if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') && file.size <= 1024 * 1024) {
//             const updatedFormData = [...formData];
//             updatedFormData[index].image = URL.createObjectURL(file);
//             setFormData(updatedFormData);
//         } else {
//             alert('Invalid file type or file is too large. Only PNG, JPG, or GIF (max 1MB) are allowed.');
//         }
//     };

//     const handleAddClick = (e) => {
//         e.preventDefault();
//         const uniqueId = `OD${Date.now()}-${Math.floor(Math.random() * 1000)}`;
//         setFormData([
//             ...formData,
//             {
//                 id: uniqueId,
//                 metal: "",
//                 color: "",
//                 karat: "",
//                 mainDiamond: "",
//                 sideStone: "",
//                 size: "",
//                 cost: "",
//                 remark: "",
//                 date: "",
//                 productTotal: 0,
//                 shipping: 0,
//                 totalCost: 0,
//                 image: null,
//             }
//         ]);
//     };
// const metalOptions = [
//     { value: 'select', label: 'Select an option' },
//     { value: 'Gold', label: 'Gold' },
//     { value: 'platinum', label: 'Platinum' },
//     { value: 'silver', label: 'Silver' },
// ];

// const goldColorOptions = [
//     { value: 'yellow', label: 'Yellow' },
//     { value: 'white', label: 'White' },
//     { value: 'rose', label: 'Rose' },
// ];

// const goldKaratOptions = [
//     { value: '9KT', label: '9KT' },
//     { value: '10KT', label: '10KT' },
//     { value: '11KT', label: '11KT' },
//     { value: '12KT', label: '12KT' },
//     { value: '13KT', label: '13KT' },
//     { value: '14KT', label: '14KT' },
//     { value: '15KT', label: '15KT' },
//     { value: '16KT', label: '16KT' },
//     { value: '17KT', label: '17KT' },
//     { value: '18KT', label: '18KT' },
//     { value: '19KT', label: '19KT' },
//     { value: '20KT', label: '20KT' },
//     { value: '21KT', label: '21KT' },
//     { value: '22KT', label: '22KT' },
//     { value: '23KT', label: '23KT' },
//     { value: '24KT', label: '24KT' },
// ];
//     const handleExportClick = (e) => {
//         e.preventDefault();
//         const selectedLogo = document.querySelector('input[name="logo"]:checked')?.value;

//         const logo1Url = uploadedLogo || 'path_to_logo1_image.jpg'; // Use uploaded logo if available
//         const logo2Url = 'path_to_logo2_image.jpg'; // Replace with actual image path

//         let logoUrl = selectedLogo === 'logo1' ? logo1Url : logo2Url;

//         let htmlContent = `
//           <!DOCTYPE html>
//           <html lang="en">
//           <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>A4 Company Brochure</title>
//               <style>
//                   @page { size: A4; margin: 0; }
//                   body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
//                   .a4-page { width: 210mm; height: 297mm; margin: 0 auto; background-color: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); overflow: hidden; display: flex; flex-direction: column; position: relative; z-index: 0; }
//                   .a4-page .image { width: 100%; position: absolute; top: 0; left: 0; height: 100%; z-index: -1; }
//                   .a4-page .image img { width: 100%; height: 100%; }
//                   @media print { body { background-color: white; } .a4-page { box-shadow: none; } }
//                   @media screen and (max-width: 210mm) { .a4-page { width: 100%; height: auto; margin: 0; } }
//                   header { width: 100%; }
//                   header .logo { width: 100%; height: 55px; display: flex; justify-content: center; }
//                   header .logo img { width: 285px; height: 55px; }
//                   .a4-page .body { z-index: 1; }
//                   main { padding: 20px; }
//                   .product { width: 100%; display: flex; align-items: center; margin-bottom: 15px; }
//                   .product_image { width: 300px; height: 300px; }
//                   .product_image img { width: 100%; height: 100%; aspect-ratio: 1/1; object-fit: cover; }
//                   .table { padding-left: 20px; }
//                   table { border-collapse: collapse; }
//                   table, tr, th, td { border: 2px solid black; }
//                   th { padding-left: 20px; width: 40%; text-align: start; }
//                   td { padding-left: 20px; width: 60%; text-align: start; }
//                   .total { margin-top: 10px; margin-bottom: 10px; color: #f4f4f4; background-color: #110353; padding-left: 20px; padding-right: 20px; display: flex; align-items: center; justify-content: space-between; }
//                   footer { width: 100%; background-color: #F9D5E7; color: #110353; }
//                   footer .footer_contact { width: 80%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; position: relative; }
//               </style>
//           </head>
//           <body>
//               <div class="a4-page">
//                   <div class="image">
//                       <img src="./Diamond@4x1.png" alt="">
//                   </div>
//                   <div class="body">
//                       <header>
//                           <div class="date">
//                               <p>${new Date().toLocaleDateString()}</p>
//                           </div>
//                           <div class="logo">
//                               <img src="${logoUrl}" alt="">
//                           </div>
//                       </header>
//                       <main>
//         `;

//         formData.forEach((entry, index) => {
//             const { metal, mainDiamond, sideStone, size, cost, color, remark, productTotal, totalCost, image } = entry;
//             const imageUrl = image instanceof Blob ? URL.createObjectURL(image) : '';
//             htmlContent += `
//                 <div class="product">
//                     <div class ="product_image">
//                         <img src="${imageUrl}" alt="">
//                     </div>
//                     <div class="table">
//                         <table>
//                             <tr>
//                                 <th>Metal</th>
//                                 <td>${metal}</td>
//                             </tr>
//                             <tr>
//                                 <th>Main Diamond</th>
//                                 <td>${mainDiamond}</td>
//                             </tr>
//                             <tr>
//                                 <th>Side Stone</th>
//                                 <td>${sideStone}</td>
//                             </tr>
//                             <tr>
//                                 <th>Quality</th>
//                                 <td>${entry.karat}</td>
//                             </tr>
//                             <tr>
//                                 <th>Size</th>
//                                 <td>${size}</td>
//                             </tr>
//                             <tr>
//                                 <th>Order Value</th>
//                                 <td>${cost}</td>
//                             </tr>
//                             <tr>
//                                 <th>Color</th>
//                                 <td class="color_box"><span class="color" style="background-color: ${color};"></span>${color}</td>
//                             </tr>
//                             <tr>
//                                 <th>Remark</th>
//                                 <td>${remark}</td>
//                             </tr>
//                             <tr>
//                                 <th>Product ID</th>
//                                 <td>${entry.id}</td>
//                             </tr>
//                             <tr>
//                                 <th>Total Cost</th>
//                                 <td>${totalCost}</td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//             `;
//         });

//         htmlContent += `
//             <div class="total">
//                 <span>Total</span>
//                 <span>${formData.reduce((acc, entry) => acc + entry.totalCost, 0) + parseFloat(totalShipping || 0)}</span>
//             </div>
//             </main>
//             <footer>
//                 <div class="footer_contact">
//                     <span>Contact: treasureleb@gmail.com</span>
//                     <span>Phone: +91 75738 75177</span>
//                 </div>
//             </footer>
//             </div>
//             </div>
//             </body>
//             </html>
//         `;

//         const tempDiv = document.createElement('div');
//         tempDiv.innerHTML = htmlContent;

//         const options = {
//             margin: 10,
//             filename: 'bill_design.pdf',
//             html2canvas: { scale: 4 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//         };

//         html2pdf().from(tempDiv).set(options).save();
//     };

//     return (
//         <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
//             <div className="max-w-full mx-auto">
//                 <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
//                     <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
//                     <BreadcrumbNav />
//                 </div>
//                 <div className="flex flex-wrap gap-8 mb-7">
//                     <div className="w-full">
//                         <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//                             <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                                 Upload Logo
//                             </div>
//                             <div className="flex items-center gap-4 p-7">
//                                 <div>
//                                     <label htmlFor="upload-logo">
//                                         <input
//                                             type="file"
//                                             id="upload-logo"
//                                             accept="image/*"
//                                             onChange={handleLogoUpload}
//                                         />
//                                     </label>
//                                 </div>
//                                 {uploadedLogo && (
//                                     <div>
//                                         <img
//                                             src={uploadedLogo}
//                                             alt="Uploaded Logo"
//                                             style={{ width: "200px" }}
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap gap-8">
//                     <div className="w-full">
//                         <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//                             <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                                 Product Details
//                             </div>
//                             <div className="p-7">
//                                 <form>
//                                     {formData.map((entry, index) => (
//                                         <div key={entry.id}>
//                                             <label>{`Product ${index + 1}`}</label>
//                                             <div className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border
//                                             border-[#3c50e0] bg-[#eff4fb] py-4 px-4 sm:py-7.5">
//                                                 <input
//                                                     type="file"
//                                                     className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
//                                                     id={`image-upload-${index}`}
//                                                     name='image'
//                                                     onChange={(e) => {
//                                                         const file = e.target.files?.[0];
//                                                         if (file) {
//                                                             const reader = new FileReader();
//                                                             reader.onloadend = () => handleProductChange(index, 'image', reader.result);
//                                                             reader.readAsDataURL(file);
//                                                         }
//                                                     }}
//                                                 />
//                                                 <div className="flex flex-col items-center justify-center space-y-3">
//                                                     <span className="flex items-center rounded-full justify-center w-10 h-10 bg-white border-[#e2e8f0]">
//                                                         <MdOutlineFileUpload className="text-[22px] text-[#3c50e0]" />
//                                                     </span>
//                                                     <p>
//                                                         <span className="text-[#3c50e0]">Click to upload</span> or drag
//                                                         and drop
//                                                     </p>
//                                                     <p className="mb-1.5">SVG, PNG, JPG or GIF</p>
//                                                     <p>(max, 800 X 800px)</p>
//                                                 </div>
//                                                 {entry.image && <img src={entry.image} alt="Product Preview" style={{ width: '100px', marginTop: '10px' }} />}
//                                             </div>
//                                             <div className="flex flex-row gap-5 mb-5">
//                                                 <div className="w-full sm:w-1/2">
//                                                     <label
//                                                         htmlFor="material-select"
//                                                         className="block mb-2 text-sm font-medium text-black"
//                                                     >
//                                                         Material
//                                                     </label>
//                                                     <select
//                                                         name='metal'
//                                                         value={entry.metal}
//                                                         onChange={(event) => handleInputChange(index, event)}
//                                                         className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize '
//                                                         placeholder="Select Material"
//                                                     >
//                                                         {metalOptions.map(option => (
//                                                             <option key={option.value} value={option.value}>{option.label}</option>
//                                                         ))}
//                                                     </select>
//                                                 </div>
//                                                 <div className="w-full sm:w-1/2">
//                                                     <label
//                                                         htmlFor="gold-kt-select"
//                                                         className="block mb-2 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Main Diamond
//                                                     </label>
//                                                     <Input
//                                                         type={'text'}
//                                                         name={"mainDiamond"}
//                                                         value={entry.mainDiamond}
//                                                         onChange={(event) => handleInputChange(index, event)}
//                                                         placeholder={'Enter main diamond'}
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div className="mb-5">
//                                                 {entry.metal === 'Gold' && (
//                                                     <div className="flex w-full gap-3 item-center">
//                                                         <div className="w-full sm:w-1/2">
//                                                             <label
//                                                                 htmlFor="gold-color-select"
//                                                                 className="block mb-2 text-sm font-medium text-black"
//                                                             >
//                                                                 Gold Color
//                                                             </label>
//                                                             <select
//                                                                 name="color"
//                                                                 value={entry.color}
//                                                                 onChange={(event) => handleInputChange(index, event)}
//                                                                 className={`w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize ${getBackgroundColor(entry.color)}`} placeholder="Select Gold Color"
//                                                             >
//                                                                 {goldColorOptions.map(option => (
//                                                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div className="w-full sm:w-1/2">
//                                                             <label
//                                                                 htmlFor="gold-kt-select"
//                                                                 className="block mb-2 text-sm font-medium text-black"
//                                                             >
//                                                                 Select Gold Karat
//                                                             </label>
//                                                             <select
//                                                                 name="karat"
//                                                                 value={entry.karat}
//                                                                 onChange={(event) => handleInputChange(index, event)}
//                                                                 className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize' placeholder="Select Gold karat"
//                                                             >
//                                                                 {goldKaratOptions.map(option => (
//                                                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             <div className="flex w-full gap-3 mb-5 item-center">

//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="sideStone"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Side Stone
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             value={entry.sideStone}
//                                                             name={`sideStone`}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                             placeholder="Enter side stone"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="size"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Size
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             value={entry.size}
//                                                             name={`size`}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                             placeholder="Enter size "
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex w-full gap-3 mb-5 item-center">
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="cost"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Cost
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             type={'number'}
//                                                             name="cost"
//                                                             value={entry.cost}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                             placeholder="Enter Cost "
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="Remark"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Remark
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             placeholder="Enter Remark"
//                                                             name="remark"
//                                                             value={entry.remark}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                     <div className="flex justify-end gap-4">
//                                         <Seconduray label="Add" onClick={handleAddClick} />
//                                         <Primary label="Export" onClick={handleExportClick} />
//                                     </div>
//                                     <div className="flex flex-col w-full mt-5 space-y-6">
//                                         <div className="flex justify-end w-full p-4 bg-white border rounded-md">
//                                             <div className="w-3/12">
//                                                 <p className="my-4 font-semibold">
//                                                     Product Total: {formData.reduce((acc, entry) => {
//                                                         if (entry && typeof entry.productTotal === 'number') {
//                                                             return acc + entry.productTotal;
//                                                         }
//                                                         return acc; // Skip undefined or invalid entries
//                                                     }, 0)}
//                                                 </p>
//                                                 <div className="my-4">
//                                                     <label htmlFor="total-shipping">Total Shipping</label>
//                                                     <Input
//                                                         type="number"
//                                                         name="totalShipping"
//                                                         value={totalShipping}
//                                                         onChange={handleShippingChange}
//                                                         placeholder="Shipping"
//                                                     />
//                                                 </div>
//                                                 <p className="my-4 font-semibold">
//                                                     Total Cost: {formData.reduce((acc, entry) => {
//                                                         if (entry && typeof entry.productTotal === 'number') {
//                                                             return acc + entry.productTotal;
//                                                         }
//                                                         return acc; // Skip undefined or invalid entries
//                                                     }, 0) + parseFloat(totalShipping || 0)}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;

// import React, { useEffect, useState } from 'react';
// import BreadcrumbNav from '../../components/ui/breadcrumb';
// import Input from '../../components/ui/input';
// import Seconduray from '../../components/ui/seconduray';
// import Primary from '../../components/ui/primary';
// import { MdOutlineFileUpload } from 'react-icons/md';
// import html2pdf from 'html2pdf.js';
// import Desgin from '../../assets/Design.pdf'
// import axios from 'axios';
// const Profile = () => {
//     const [totalShipping, setTotalShipping] = useState(0);
//     const [uploadedLogo, setUploadedLogo] = useState(''); // State to store uploaded logo
//     const [selectedLogo, setSelectedLogo] = useState('');
//     const [orderId, setOrderId] = useState('OD0001');
//     const [newOrderId, setNewOrderId] = useState('');
//     const [error, setError] = useState('');
//     const [formData, setFormData] = useState([{
//         metal: "",
//         color: "",
//         karat: "",
//         mainDiamond: "",
//         sideStone: "",
//         size: "",
//         cost: "",
//         remark: "",
//         date: "",
//         productTotal: 0,
//         shipping: 0,
//         totalCost: 0,
//         image: null,
//     }]);


//     useEffect(() => {
//         const storedShipping = localStorage.getItem('totalShipping');
//         if (storedShipping) {
//             setTotalShipping(parseFloat(storedShipping));
//         }
//     }, []);

//     const handleGenerateOrderId = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/orders/increment', { orderId });
//             setNewOrderId(response.data.newOrderId);
//             setOrderId(response.data.newOrderId);
//             setError('');
//         } catch (err) {
//             console.error('Error generating orderId:', err);
//             setError('Failed to generate a new Order ID. Please try again.');
//         }
//     };


//     const handleShippingChange = (event) => {
//         const newShippingValue = event.target.value;
//         setTotalShipping(newShippingValue);
//         localStorage.setItem('totalShipping', newShippingValue);
//     };
//     const metalOptions = [
//         { value: 'select', label: 'Select an option' },
//         { value: 'Gold', label: 'Gold' },
//         { value: 'platinum', label: 'Platinum' },
//         { value: 'silver', label: 'Silver' },
//     ];

//     const goldColorOptions = [
//         { value: 'yellow', label: 'Yellow' },
//         { value: 'white', label: 'White' },
//         { value: 'rose', label: 'Rose' },
//     ];

//     const goldKaratOptions = [
//         { value: '9KT', label: '9KT' },
//         { value: '10KT', label: '10KT' },
//         { value: '11KT', label: '11KT' },
//         { value: '12KT', label: '12KT' },
//         { value: '13KT', label: '13KT' },
//         { value: '14KT', label: '14KT' },
//         { value: '15KT', label: '15KT' },
//         { value: '16KT', label: '16KT' },
//         { value: '17KT', label: '17KT' },
//         { value: '18KT', label: '18KT' },
//         { value: '19KT', label: '19KT' },
//         { value: '20KT', label: '20KT' },
//         { value: '21KT', label: '21KT' },
//         { value: '22KT', label: '22KT' },
//         { value: '23KT', label: '23KT' },
//         { value: '24KT', label: '24KT' },
//     ];
//     const handleLogoUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 setUploadedLogo(event.target.result); // Store the image data URL in state
//             };
//             reader.readAsDataURL(file); // Read the image file as a data URL
//         } else {
//             setUploadedLogo(''); // Reset if no file is selected
//         }
//     };

//     const getBackgroundColor = (color) => {
//         switch (color) {
//             case 'yellow':
//                 return 'bg-yellow-300';
//             case 'white':
//                 return 'bg-white';
//             case 'rose':
//                 return 'bg-rose-300';
//             case 'gold':
//                 return 'bg-yellow-500';
//             default:
//                 return 'bg-[rgb(239,244,251)]';
//         }
//     };

//     const handleInputChange = (index, event) => {
//         const { name, value } = event.target;
//         const updatedFormData = [...formData];
//         updatedFormData[index][name] = value;

//         if (name === 'cost' || name === 'shipping') {
//             const productTotal = parseFloat(updatedFormData[index].cost || 0);
//             const totalCost = productTotal + parseFloat(updatedFormData[index].shipping || 0);
//             updatedFormData[index].productTotal = productTotal;
//             updatedFormData[index].totalCost = totalCost;
//         }

//         setFormData(updatedFormData);
//     };

//     const handleImageChange = (index, event) => {
//         const file = event.target?.files?.[0];
//         if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') && file.size <= 1024 * 1024) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 const updatedFormData = [...formData];
//                 updatedFormData[index].image = reader.result; // Set the base64 string
//                 setFormData(updatedFormData);
//             };
//             reader.readAsDataURL(file); // Convert to base64
//         } else {
//             alert('Invalid file type or file is too large. Only PNG, JPG, or GIF (max 1MB) are allowed.');
//         }
//     };

//     const handleAddClick = (e) => {
//         const logo1Url = uploadedLogo || 'path_to_logo1_image.jpg'; // Use uploaded logo if available
//         const logo2Url = 'path_to_logo2_image.jpg'; // Replace with actual image path

//         const logoUrl = selectedLogo === 'logo1' ? logo1Url : logo2Url;

//         // Continue with your existing code, e.g., exporting HTML to PDF
//         console.log('Exporting with logo URL:', logoUrl);
//         e.preventDefault();
//         // const currentId = parseInt(orderId.slice(2), 10);

//         // // Increment the ID by 1
//         // const newId = currentId + 1;

//         // // Format the new ID to ensure it has leading zeros (e.g., OD0002, OD0003, etc.)
//         // const newOrderId = `OD${newId.toString().padStart(4, '0')}`;

//         setOrderId(newOrderId);
//         setFormData([
//             ...formData,
//             {
//                 id: newOrderId,
//                 metal: "",
//                 color: "",
//                 karat: "",
//                 mainDiamond: "",
//                 sideStone: "",
//                 size: "",
//                 cost: "",
//                 remark: "",
//                 date: "",
//                 productTotal: 0,
//                 shipping: 0,
//                 totalCost: 0,
//                 image: null,
//             }
//         ]);
//     };

//     const handleExportClick = (e) => {
//         e.preventDefault();


//         let htmlContent = `


//        <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>A4 Company Brochure</title>

//     <style>
//         @page {
//             size: A4;
//             margin: 0;
//         }

//         body {
//             font-family: Arial, sans-serif;
//             line-height: 1;
//             margin: 0;
//             padding: 0;
//             background-color: #f4f4f4;
//         }

//         .a4-page {
//             width: 100%;
//             height: 295mm;
//             background-color: white;
//             overflow: hidden;
//             display: flex;
//             flex-direction: column;
//             position: relative;
//             z-index: 0;
//         }

//         .a4-page .image {
//             width: 100%;
//             position: absolute;
//             top: 0;
//             left: 0;
//             height: 100%;
//             z-index: -1;
//         }

//         .a4-page .image img {
//             width: 100%;
//             height: 100%;
//         }



//         @media print {
//             body {
//                 background-color: white;
//             }

//             .a4-page {
//                 box-shadow: none;
//             }
//         }

//         @media screen and (max-width: 210mm) {
//             .a4-page {
//                 width: 100%;
//                 height: auto;
//                 margin: 0;
//             }
//         }

//         header {
//             width: 100%;
//        position: absolute;
//        top: 0;
//        height:55px;
//             background-color: white;
//             /* Ensures the header background is solid */
//             z-index: 1;
//         }

//         header .logo {
//             width: 100%;
//             height: 55px;
//             display: flex;
//             justify-content: center;
//         }

//         header .logo img {
//             width: 285px;
//             height: 55px;
//         }

//         header .date {}

//         header .date p {
//             margin: 0;
//         }

//         .a4-page .body {
//             z-index: 1;
//         }

//         main {
//             padding: 20px;
//             margin-top: 75px;
//         }

//         main .product {
//             width: 100%;
//             display: flex;
//             align-items: center;
//             margin-bottom: 15px;
//         }

//         main .product_1 {
//             width: 100%;
//             display: flex;
//             align-items: center;
//             margin-bottom: 0;
//         }


//         main .product_image {
//             width: 300px;
//             height: 300px;
//         }

//         main .product_image img {
//             width: 100%;
//             height: 100%;
//             aspect-ratio: 1/1;
//             object-fit: cover;
//         }

//         .table {
//             padding-left: 20px;
//         }

//         .table,
//         table,
//         tr {
//             width: 445.71px;
//         }

//         table {
//             border-collapse: collapse;
//         }

//         table,
//         tr,
//         th,
//         td {
//             border: 1px solid black;
//         }

//         th {
//             padding-left: 20px;
//             width: 40%;
//             text-align: start;
//         }

//         td {
//             padding-left: 20px;
//             width: 60%;
//             text-align: start;
//         }

//         .total {

//             margin-top: 10px;
//             margin-bottom: 10px;
//             color: #f4f4f4;
//             background-color: #110353;
//             padding-left: 20px;
//             padding-right: 20px;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//  position: absolute;
//  bottom:50px;
//  width:95%;
// height:40px;
//         }

//         .total span {
//             font-size: 18px;
//             text-transform: capitalize;
//         }

//         footer {
//             width: 100%;
//             background-color: #F9D5E7;
//             color: #110353;
//             position: absolute;
//             bottom: 0;
//             height:40px;
//             margin: 0 auto;
//             }

//             footer .footer_contact {
//                 width: 95%;
//                 height:100%
//                 margin: 0 auto;

//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             position: relative;
//         }

//         footer .footer_contact .box {
//             position: absolute;
//             width: 40px;
//             height: 40px;
//             right: -50px;
//             top: -20px;
//             background-color: #F9D5E7;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 99px;
//             border: 2px solid white;
//         }

//         .color_box {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             border: none;
//         }

//         .color {
//             display: block;
//             width: 22px;
//             height: 22px;
//             background-color: yellow;
//             border-radius: 99px;
//             border: 1px solid black;
//         }
//     </style>

// </head>

// <body>
//     <div class="a4-page">
//         <div class="image">
//             <img src="./Diamond@4x1.png" alt="">
//         </div>
//         <div class="body">
//             <header>
//                 <div class="date">
//                     <p>6/1/2025</p>
//                 </div>
//                 <div class="logo">
//                     <img src="${uploadedLogo || selectedLogo}" alt="">
//                 </div>
//             </header>
//             <main>
//                                         `; formData.forEach((entry) => {
//             const { metal, mainDiamond, sideStone, size, cost, color, remark, totalCost, image } = entry;
//             htmlContent += `
//                                         <div class="product">
//                                             <div class="product_image">
//                                                 <img src="${image}" alt="">
//                                             </div>
//                                             <div class="table">
//                                                 <table>
//                                                     <tr>
//                                                         <th>Metal</th>
//                                                         <td>${metal}</td>
//                                                     </tr>
//                                                     <tr>

//                                                         <th>Main Diamond</th>
//                                                         <td>${mainDiamond}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Side Stone</th>
//                                                         <td>${sideStone}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Quality</th>
//                                                         <td>${entry.karat}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Size</th>
//                                                         <td>${size}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Order Value</th>
//                                                         <td>${cost}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Color</th>
//                                                         <td class="color_box"><span class="color" style="background-color: ${color};"></span>${color}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Remark</th>
//                                                         <td>${remark}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Product ID</th>
//                                                         <td>${entry.id}</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <th>Total Cost</th>
//                                                         <td>${totalCost}</td>
//                                                     </tr>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                         `;
//         });

//         htmlContent += `
//                                         <div class="total">
//                                             <span>Total</span>
//                                             <span>${formData.reduce((acc, entry) => acc + entry.totalCost, 0) + parseFloat(totalShipping || 0)}</span>
//                                         </div>
//                                     </main>
//                                    <footer>
//                 <div class="footer_contact">
//                     <div class="box">
//                         1
//                     </div>
//                     <span>reasureleb@gmail.com</span>
//                     <span>+91 75738 75177</span>
//                 </div>
//             </footer>
//                                 </div>
//                             </div>
//                         </body>
//                     </html>
//                     `;

//         const tempDiv = document.createElement('div');
//         tempDiv.innerHTML = htmlContent;

//         const options = {
//             margin: 0,
//             filename: 'bill_design.pdf',
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//         };

//         html2pdf().from(tempDiv).set(options).save();
//     }

//     console.log(newOrderId)
//     console.log(orderId)

//     return (
//         <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
//             <div className="max-w-full mx-auto">
//                 <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
//                     <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
//                     <BreadcrumbNav />
//                 </div>
// <div className="flex flex-wrap gap-8 mb-7">
//     <div className="w-full">
//         <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//             <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                 Upload Logo
//             </div>
//             <div className="flex items-center gap-4 p-7">
//                 <div>
//                     <label htmlFor="upload-logo">
//                         <input
//                             type="file"
//                             id="upload-logo"
//                             accept="image/*"
//                             onChange={handleLogoUpload}
//                         />
//                     </label>
//                 </div>
//                 {/* <div>
//                     <input
//                         type="radio"
//                         id="logo1"
//                         name="logo"
//                         value="logo1"
//                         onChange={(e) => setSelectedLogo(e.target.value)}
//                     />
//                     <label htmlFor="logo1">Logo 1</label>

//                     <input
//                         type="radio"
//                         id="logo2"
//                         name="logo"
//                         value="logo2"
//                         onChange={(e) => setSelectedLogo(e.target.value)}
//                     />
//                     <label htmlFor="logo2">Logo 2</label>
//                 </div> */}
//                 {uploadedLogo && (
//                     <div>
//                         <img
//                             src={uploadedLogo}
//                             alt="Uploaded Logo"
//                             style={{ width: "200px" }}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     </div>
// </div>
//                 <div className="flex flex-wrap gap-8">
//                     <div className="w-full">
//                         <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//                             <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                                 Product Details
//                             </div>
//                             <div className="p-7">
//                                 <form>
//                                     {formData.map((entry, index) => (
//                                         <div key={entry.id}>
//                                             <label>{newOrderId}</label>
//                                             <div className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-[#3c50e0] bg-[#eff4fb] py-4 px-4 sm:py-7.5">
//                                                 <input
//                                                     type="file"
//                                                     className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
//                                                     id={`image-upload-${index}`}
//                                                     onChange={(event) => handleImageChange(index, event)}
//                                                 />
//                                                 <div className="flex flex-col items-center justify-center space-y-3">
//                                                     <span className="flex items-center rounded-full justify-center w-10 h-10 bg-white border-[#e2e8f0]">
//                                                         <MdOutlineFileUpload className="text-[22px] text-[#3c50e0]" />
//                                                     </span>
//                                                     <p>
//                                                         <span className="text-[#3c50e0]">Click to upload</span> or drag
//                                                         and drop
//                                                     </p>
//                                                     <p className="mb-1.5">SVG, PNG, JPG or GIF</p>
//                                                     <p>(max, 800 X 800px)</p>
//                                                 </div>
//                                                 {entry.image && <img src={entry.image} alt="Product Preview" style={{ width: '100px', marginTop: '10px' }} />}
//                                             </div>
//                                             <div className="flex flex-row gap-5 mb-5">
//                                                 <div className="w-full sm:w-1/2">
//                                                     <label
//                                                         htmlFor="material-select"
//                                                         className="block mb-2 text-sm font-medium text-black"
//                                                     >
//                                                         Material
//                                                     </label>
// <select
//     name='metal'
//     value={entry.metal}
//     onChange={(event) => handleInputChange(index, event)}
//     className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize '
//     placeholder="Select Material"
// >
//     {metalOptions.map(option => (
//         <option key={option.value} value={option.value}>{option.label}</option>
//     ))}
// </select>
//                                                 </div>
//                                                 <div className="w-full sm:w-1/2">
//                                                     <label
//                                                         htmlFor="gold-kt-select"
//                                                         className="block mb-2 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Main Diamond
//                                                     </label>
//                                                     <Input
//                                                         type={'text'}
//                                                         name={"mainDiamond"}
//                                                         value={entry.mainDiamond}
//                                                         onChange={(event) => handleInputChange(index, event)}
//                                                         placeholder={'Enter main diamond'}
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div className="mb-5">
//                                                 {entry.metal === 'Gold' && (
//                                                     <div className="flex w-full gap-3 item-center">
//                                                         <div className="w-full sm:w-1/2">
//                                                             <label
//                                                                 htmlFor="gold-color-select"
//                                                                 className="block mb-2 text-sm font-medium text-black"
//                                                             >
//                                                                 Gold Color
//                                                             </label>
//                                                             <select
//                                                                 name="color"
//                                                                 value={entry.color}
//                                                                 onChange={(event) => handleInputChange(index, event)}
//                                                                 className={`w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize ${getBackgroundColor(entry.color)}`} placeholder="Select Gold Color"
//                                                             >
//                                                                 {goldColorOptions.map(option => (
//                                                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div className="w-full sm:w-1/2">
//                                                             <label
//                                                                 htmlFor="gold-kt-select"
//                                                                 className="block mb-2 text-sm font-medium text-black"
//                                                             >
//                                                                 Select Gold Karat
//                                                             </label>
//                                                             <select
//                                                                 name="karat"
//                                                                 value={entry.karat}
//                                                                 onChange={(event) => handleInputChange(index, event)}
//                                                                 className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize' placeholder="Select Gold karat"
//                                                             >
//                                                                 {goldKaratOptions.map(option => (
//                                                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             <div className="flex w-full gap-3 mb-5 item-center">
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="sideStone"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Side Stone
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             value={entry.sideStone}
//                                                             name={`sideStone`}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                             placeholder="Enter side stone"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="size"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Size
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             value={entry.size}
//                                                             name={`size`}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                             placeholder="Enter size "
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex w-full gap-3 mb-5 item-center">
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="cost"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Cost
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             type={'number'}
//                                                             name="cost"
//                                                             value={entry.cost}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                             placeholder="Enter Cost "
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-full md:w-1/2 ">
//                                                     <label
//                                                         htmlFor="Remark"
//                                                         className="block mb-3 text-sm font-medium text-black capitalize"
//                                                     >
//                                                         Remark
//                                                     </label>
//                                                     <div className="relative">
//                                                         <Input
//                                                             placeholder="Enter Remark"
//                                                             name="remark"
//                                                             value={entry.remark}
//                                                             onChange={(event) => handleInputChange(index, event)}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                     <div className="flex justify-end gap-4">
//                                         <Seconduray label="Add" onClick={handleAddClick} />
//                                         <Primary label="Export" onClick={handleExportClick} />
//                                         <Primary label="GenerateOrderId" onClick={handleGenerateOrderId} />
//                                     </div>
//                                     <div className="flex flex-col w-full mt-5 space-y-6">
//                                         <div className="flex justify-end w-full p-4 bg-white border rounded-md">
//                                             <div className="w-3/12">
//                                                 <p className="my-4 font-semibold">
//                                                     Product Total: {formData.reduce((acc, entry) => {
//                                                         if (entry && typeof entry.productTotal === 'number') {
//                                                             return acc + entry.productTotal;
//                                                         }
//                                                         return acc; // Skip undefined or invalid entries
//                                                     }, 0)}
//                                                 </p>
//                                                 <div className="my-4">
//                                                     <label htmlFor="total-shipping">Total Shipping</label>
//                                                     <Input
//                                                         type="number"
//                                                         name="totalShipping"
//                                                         value={totalShipping}
//                                                         onChange={handleShippingChange}
//                                                         placeholder="Shipping"
//                                                     />
//                                                 </div>
//                                                 <p className="my-4 font-semibold">
//                                                     Total Cost: {formData.reduce((acc, entry) => {
//                                                         if (entry && typeof entry.productTotal === 'number') {
//                                                             return acc + entry.productTotal;
//                                                         }
//                                                         return acc; // Skip undefined or invalid entries
//                                                     }, 0) + parseFloat(totalShipping || 0)}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default Profile;
// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import Input from '../../components/ui/input'
// import BreadcrumbNav from '../../components/ui/breadcrumb'
// import axios from 'axios';
// const JewelleryAdminPanel = () => {
//     const [products, setProducts] = useState([]);
//     const [product, setProduct] = useState({
//         logo: '',
//         image: '',
//         metal: '',
//         size: '',
//         mainDiamond: '',
//         sideStone: '',
//         productCost: '',
//         remark: '',
//     });
//     const [productIDCounter, setProductIDCounter] = useState(1);
//     const [shippingCharge, setShippingCharge] = useState(0);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         setProduct({ ...product, [name]: URL.createObjectURL(files[0]) });
//     };

//     const addProduct = async () => {
//         const newProductID = `OD${productIDCounter.toString().padStart(3, '0')}`;
//         const newProduct = { ...product, productID: newProductID };

//         try {
//             const response = await axios.post('http://localhost:5000/api/products', newProduct); // Assuming your API endpoint is '/api/products'

//             if (response.status === 200) {

//                 setProducts([...products, newProduct]);

//                 setProductIDCounter(productIDCounter + 1);
//                 setProduct({
//                     logo: '',
//                     image: '',
//                     metal: '',
//                     size: '',
//                     mainDiamond: '',
//                     sideStone: '',
//                     productCost: '',
//                     remark: '',
//                 });
//                 alert('Product added successfully');
//             } else {
//                 alert('Failed to add product. Try again later.');
//             }
//         } catch (error) {
//             console.error('Error adding product:', error);
//             alert('There was an error while adding the product.');
//         }
//     };


//     const calculateTotalCost = () => {
//         const totalProductCost = products.reduce((sum, p) => sum + Number(p.productCost || 0), 0);
//         return totalProductCost + Number(shippingCharge || 0);
//     };

//     const exportPDF = () => {
//         const doc = new jsPDF();
//         doc.text('Jewellery Products Details', 10, 10);

//         const tableData = products.map((p) => [
//             p.productID,
//             p.metal,
//             p.size,
//             p.mainDiamond,
//             p.sideStone,
//             p.productCost,
//             p.remark,
//         ]);

//         doc.autoTable({
//             head: [['Product ID', 'Metal', 'Size', 'Main Diamond', 'Side Stone', 'Cost', 'Remark']],
//             body: tableData,
//         });

//         doc.text(`TotalProductCost: ${String.fromCharCode(0x20B9)}${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 10);
//         doc.text(`ShippingCharge: ${String.fromCharCode(0x20B9)}${shippingCharge}`, 10, doc.lastAutoTable.finalY + 20);
//         doc.text(`GrandTotal: ${String.fromCharCode(0x20B9)}${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 30);


//         doc.save('Jewellery_Products_Details.pdf');
//     };
//     return (
//         <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
//             <div className="max-w-full mx-auto">
//                 <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
//                     <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
//                     <BreadcrumbNav />
//                 </div>
//                 <div className="flex flex-wrap gap-8 mb-7">
//                     <div className="w-full">
//                         <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default">
//                             <div className="py-4 border-b border-[rgb(226,232,240)] capitalize px-7">
//                                 Upload Logo
//                             </div>
//                             <div className="flex items-center gap-4 p-7">
//                                 <div>
//                                     <label htmlFor="upload-logo">
//                                         <input
//                                             type="file"
//                                             id="upload-logo"
//                                             accept="image/*"
//                                             onChange={handleFileChange}
//                                         />
//                                     </label>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container p-4 mx-auto bg-white ">
//                     <h1 className="mb-4 text-2xl font-bold">Jewellery Admin Panel</h1>

//                     {/* <div className="mb-4">
//                         <label>Company Logo:</label>
//                         <Input type="file" name="logo" onChange={handleFileChange} />
//                     </div> */}

//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         <Input
//                             type="file"
//                             name="image"
//                             onChange={handleFileChange}
//                             placeholder="Product Image"
//                         />
//                         <Input
//                             type="text"
//                             name="metal"
//                             value={product.metal}
//                             onChange={handleInputChange}
//                             placeholder="Metal"
//                         />
//                         <Input
//                             type="text"
//                             name="size"
//                             value={product.size}
//                             onChange={handleInputChange}
//                             placeholder="Size"
//                         />
//                         <Input
//                             type="text"
//                             name="mainDiamond"
//                             value={product.mainDiamond}
//                             onChange={handleInputChange}
//                             placeholder="Main Diamond"
//                         />
//                         <Input
//                             type="text"
//                             name="sideStone"
//                             value={product.sideStone}
//                             onChange={handleInputChange}
//                             placeholder="Side Stone"
//                         />
//                         <Input
//                             type="number"
//                             name="productCost"
//                             value={product.productCost}
//                             onChange={handleInputChange}
//                             placeholder="Product Cost"
//                         />
//                         <Input
//                             type="text"
//                             name="remark"
//                             value={product.remark}
//                             onChange={handleInputChange}
//                             placeholder="Remark"
//                         />
//                     </div>

//                     <button className="px-4 py-2 text-white bg-blue-500" onClick={addProduct}>
//                         Add Product
//                     </button>

//                     <div className="mt-4">
//                         <h2 className="text-xl font-bold">Products List</h2>
//                         <ul>
//                             {products.map((p, index) => (
//                                 <li key={index} className="mb-2">
//                                     {p.productIDCounter}: {p.metal}, ₹{p.productCost}
//                                 </li>
//                             ))}
//                         </ul>

//                         <div className="mt-4">
//                             <label>Shipping Charge:</label>
//                             <input
//                                 type="number"
//                                 value={shippingCharge}
//                                 onChange={(e) => setShippingCharge(e.target.value)}
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <h3>Total Cost: ₹{calculateTotalCost()}</h3>
//                         </div>

//                         <button className="px-4 py-2 mt-4 text-white bg-green-500" onClick={exportPDF}>
//                             Export to PDF
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JewelleryAdminPanel;

// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import Input from '../../components/ui/input';
// import BreadcrumbNav from '../../components/ui/breadcrumb';
// import axios from 'axios';

// const JewelleryAdminPanel = () => {
//     const [products, setProducts] = useState([]);
//     const [product, setProduct] = useState({
//         logo: '',
//         image: '',
//         metal: '',
//         size: '',
//         mainDiamond: '',
//         sideStone: '',
//         productCost: '',
//         remark: '',
//     });
//     const [productIDCounter, setProductIDCounter] = useState(1);
//     const [shippingCharge, setShippingCharge] = useState(0);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         setProduct({ ...product, [name]: URL.createObjectURL(files[0]) });
//     };

//     const addProduct = async () => {
//         const newProductID = `OD${productIDCounter.toString().padStart(3, '0')}`;
//         const newProduct = { ...product, productID: newProductID };

//         try {
//             const response = await axios.post('http://localhost:5000/api/products', newProduct); // Assuming your API endpoint is '/api/products'

//             if (response.status === 200) {
//                 // Add the new product to the list
//                 setProducts([...products, newProduct]);

//                 // Increment productID counter
//                 setProductIDCounter(productIDCounter + 1);

//                 // Reset product form fields
//                 setProduct({
//                     logo: '',
//                     image: '',
//                     metal: '',
//                     size: '',
//                     mainDiamond: '',
//                     sideStone: '',
//                     productCost: '',
//                     remark: '',
//                 });

//                 alert('Product added successfully');
//             } else {
//                 alert('Failed to add product. Try again later.');
//             }
//         } catch (error) {
//             console.error('Error adding product:', error);
//             alert('There was an error while adding the product.');
//         }
//     };

//     const calculateTotalCost = () => {
//         const totalProductCost = products.reduce((sum, p) => sum + Number(p.productCost || 0), 0);
//         return totalProductCost + Number(shippingCharge || 0);
//     };

//     const exportPDF = () => {
//         const doc = new jsPDF();
//         doc.text('Jewellery Products Details', 10, 10);

//         const tableData = products.map((p, index) => [
//             p.productID,
//             p.metal,
//             p.size,
//             p.mainDiamond,
//             p.sideStone,
//             p.productCost,
//             p.remark,
//         ]);

//         doc.autoTable({
//             head: [['Product ID', 'Metal', 'Size', 'Main Diamond', 'Side Stone', 'Cost', 'Remark']],
//             body: tableData,
//         });

//         doc.text(`Product ID Counter: OD${productIDCounter.toString().padStart(3, '0')}`, 10, doc.lastAutoTable.finalY + 10);
//         doc.text(`Total Product Cost: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 20);
//         doc.text(`Shipping Charge: ₹${shippingCharge}`, 10, doc.lastAutoTable.finalY + 30);
//         doc.text(`Grand Total: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 40);

//         doc.save('Jewellery_Products_Details.pdf');
//     };

//     return (
//         <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
//             <div className="max-w-full mx-auto">
//                 <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
//                     <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
//                     <BreadcrumbNav />
//                 </div>

//                 <div className="container p-4 mx-auto bg-white">
//                     <h1 className="mb-4 text-2xl font-bold">Jewellery Admin Panel</h1>

//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         <Input
//                             type="file"
//                             name="image"
//                             onChange={handleFileChange}
//                             placeholder="Product Image"
//                         />
//                         <Input
//                             type="text"
//                             name="metal"
//                             value={product.metal}
//                             onChange={handleInputChange}
//                             placeholder="Metal"
//                         />
//                         <Input
//                             type="text"
//                             name="size"
//                             value={product.size}
//                             onChange={handleInputChange}
//                             placeholder="Size"
//                         />
//                         <Input
//                             type="text"
//                             name="mainDiamond"
//                             value={product.mainDiamond}
//                             onChange={handleInputChange}
//                             placeholder="Main Diamond"
//                         />
//                         <Input
//                             type="text"
//                             name="sideStone"
//                             value={product.sideStone}
//                             onChange={handleInputChange}
//                             placeholder="Side Stone"
//                         />
//                         <Input
//                             type="number"
//                             name="productCost"
//                             value={product.productCost}
//                             onChange={handleInputChange}
//                             placeholder="Product Cost"
//                         />
//                         <Input
//                             type="text"
//                             name="remark"
//                             value={product.remark}
//                             onChange={handleInputChange}
//                             placeholder="Remark"
//                         />
//                     </div>

//                     <button className="px-4 py-2 text-white bg-blue-500" onClick={addProduct}>
//                         Add Product
//                     </button>

//                     <div className="mt-4">
//                         <h2 className="text-xl font-bold">Products List</h2>
//                         <ul>
//                             {products.map((p, index) => (
//                                 <li key={index} className="mb-2">
//                                     Product ID Counter: OD{(productIDCounter + index).toString().padStart(3, '0')}: {p.metal}, ₹{p.productCost}
//                                 </li>
//                             ))}

//                         </ul>

//                         <div className="mt-4">
//                             <label>Shipping Charge:</label>
//                             <input
//                                 type="number"
//                                 value={shippingCharge}
//                                 onChange={(e) => setShippingCharge(e.target.value)}
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <h3>Total Cost: ₹{calculateTotalCost()}</h3>
//                         </div>

//                         <button className="px-4 py-2 mt-4 text-white bg-green-500" onClick={exportPDF}>
//                             Export to PDF
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JewelleryAdminPanel;

// import React, { useEffect, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import Input from '../../components/ui/input';
// import BreadcrumbNav from '../../components/ui/breadcrumb';
// import axios from 'axios';

// const JewelleryAdminPanel = () => {
//     const [products, setProducts] = useState([]);
//     const [product, setProduct] = useState({
//         logo: '',
//         image: '',
//         metal: '',
//         color: '',
//         karat: '',
//         size: '',
//         mainDiamond: '',
//         sideStone: '',
//         productCost: '',
//         remark: '',
//     });
//     const [productIDCounter, setProductIDCounter] = useState(1);
//     const [shippingCharge, setShippingCharge] = useState(0);
//     const [uploadedLogo, setUploadedLogo] = useState(null); // New state for uploaded logo
//     const [counter, setCounter] = useState(null); // State to store the counter value
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null);
//     // Handle logo file change (upload)
//     const handleLogoChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setUploadedLogo(reader.result); // Store the base64 data of the uploaded logo
//             };
//             reader.readAsDataURL(file); // Convert file to base64 data
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         setProduct({ ...product, [name]: URL.createObjectURL(files[0]) });
//     };

//     const addProduct = async () => {
//         const newProductID = `OD${productIDCounter.toString().padStart(3, '0')}`;
//         const newProduct = { ...product, productID: newProductID };

//         try {
//             const response = await axios.post('http://localhost:5000/api/products', newProduct);

//             if (response.status === 200) {
//                 setProducts([...products, newProduct]);
//                 setProductIDCounter(productIDCounter + 1);
//                 setProduct({
//                     logo: '',
//                     image: '',
//                     metal: '',
//                     color: '',
//                     karat: '',
//                     size: '',
//                     mainDiamond: '',
//                     sideStone: '',
//                     productCost: '',
//                     remark: '',
//                 });

//                 alert('Product added successfully');
//             } else {
//                 alert('Failed to add product. Try again later.');
//             }
//         } catch (error) {
//             console.error('Error adding product:', error);
//             alert('There was an error while adding the product.');
//         }
//     };
//     useEffect(() => {
//         const fetchCounter = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/product-counter');
//                 setCounter(response.data.counter); // Set the counter value
//                 setLoading(false); // Set loading to false once data is fetched
//             } catch (err) {
//                 setError('Error fetching counter');
//                 setLoading(false);
//             }
//         };

//         fetchCounter();
//     }, []);
// const metalOptions = [
//     { value: 'select', label: 'Select an option' },
//     { value: 'Gold', label: 'Gold' },
//     { value: 'platinum', label: 'Platinum' },
//     { value: 'silver', label: 'Silver' },
// ];

// const goldColorOptions = [
//     { value: 'yellow', label: 'Yellow' },
//     { value: 'white', label: 'White' },
//     { value: 'rose', label: 'Rose' },
// ];

// const goldKaratOptions = [
//     { value: '9KT', label: '9KT' },
//     { value: '10KT', label: '10KT' },
//     { value: '11KT', label: '11KT' },
//     { value: '12KT', label: '12KT' },
//     { value: '13KT', label: '13KT' },
//     { value: '14KT', label: '14KT' },
//     { value: '15KT', label: '15KT' },
//     { value: '16KT', label: '16KT' },
//     { value: '17KT', label: '17KT' },
//     { value: '18KT', label: '18KT' },
//     { value: '19KT', label: '19KT' },
//     { value: '20KT', label: '20KT' },
//     { value: '21KT', label: '21KT' },
//     { value: '22KT', label: '22KT' },
//     { value: '23KT', label: '23KT' },
//     { value: '24KT', label: '24KT' },
// ]
//     const calculateTotalCost = () => {
//         const totalProductCost = products.reduce((sum, p) => sum + Number(p.productCost || 0), 0);
//         return totalProductCost + Number(shippingCharge || 0);
//     };

//     const exportPDF = () => {
//         const doc = new jsPDF();

//         // Check if a logo is uploaded and add it to the PDF
//         if (uploadedLogo) {
//             doc.addImage(uploadedLogo, 'PNG', 10, 10, 30, 30); // Adjust position and size as needed
//         }

//         // Add the title text to the PDF
//         doc.text('Jewellery Products Details', 50, 20); // Adjust position to make space for logo

//         // Get current date
//         const currentDate = new Date();
//         const formattedDate = currentDate.toLocaleDateString('en-IN', {
//             weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
//         });

//         // Add the formatted date
//         doc.text(`Date: ${formattedDate}`, 50, 30); // Adjust the position as needed

//         const tableData = products.map((p, index) => [
//             p.productID,
//             p.metal,
//             p.size,
//             p.color,
//             p.karat,
//             p.mainDiamond,
//             p.sideStone,
//             p.productCost,
//             p.remark,
//         ]);

//         // Add product details table
//         doc.autoTable({
//             head: [['Product ID', 'Metal', 'Size', 'Main Diamond', 'Side Stone', 'Cost', 'Remark']],
//             body: tableData,
//             startY: 40, // Start table below the title and logo
//         });

//         // Add product ID Counter, total cost, and shipping charges
//         doc.text(`Product ID Counter: OD${productIDCounter.toString().padStart(3, '0')}`, 10, doc.lastAutoTable.finalY + 10);
//         doc.text(`Total Product Cost: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 20);
//         doc.text(`Shipping Charge: ₹${shippingCharge}`, 10, doc.lastAutoTable.finalY + 30);
//         doc.text(`Grand Total: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 40);

//         // Save the PDF
//         doc.save('Jewellery_Products_Details.pdf');
//     };

//     return (
//         <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
//             <div className="max-w-full mx-auto">
//                 <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
//                     <h2 className="font-semibold text-black text-[26px] capitalize">PDF Function</h2>
//                     <BreadcrumbNav />
//                 </div>

//                 <div className="container p-4 mx-auto bg-white">
//                     <h1 className="mb-4 text-2xl font-bold">Jewellery Admin Panel</h1>

//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         {/* File input for logo upload */}
//                         <Input
//                             type="file"
//                             onChange={handleLogoChange}
//                             placeholder="Upload Logo"
//                         />

//                         <Input
//                             type="file"
//                             name="image"
//                             onChange={handleFileChange}
//                             placeholder="Product Image"
//                         />
//                         <select
//                             name='metal'
//                             value={product.metal}
//                             onChange={handleInputChange}
//                             className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize '
//                             placeholder="Select Material"
//                         >
// {metalOptions.map(option => (
//     <option key={option.value} value={option.value}>{option.label}</option>
// ))}
//                         </select>
//                         {product.metal === "Gold" && (
//                             <>
//                                 <select
//                                     name="color"
//                                     value={product.color}
//                                     onChange={handleInputChange}
//                                     className="w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize"
//                                     style={{ backgroundColor: product.color }} // Set background dynamically
//                                     placeholder="Select Gold Color"
//                                 >
//                                     {goldColorOptions.map(option => (
//                                         <option key={option.value} value={option.value}>
//                                             {option.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 <select
//                                     name="karat"
//                                     value={product.karat}
//                                     onChange={handleInputChange}
//                                     className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize' placeholder="Select Gold karat"
//                                 >
//                                     {goldKaratOptions.map(option => (
//                                         <option key={option.value} value={option.value}>{option.label}</option>
//                                     ))}
//                                 </select>
//                             </>
//                         )}
//                         <Input
//                             type="text"
//                             name="size"
//                             value={product.size}
//                             onChange={handleInputChange}
//                             placeholder="Size"
//                         />
//                         <Input
//                             type="text"
//                             name="mainDiamond"
//                             value={product.mainDiamond}
//                             onChange={handleInputChange}
//                             placeholder="Main Diamond"
//                         />
//                         <Input
//                             type="text"
//                             name="sideStone"
//                             value={product.sideStone}
//                             onChange={handleInputChange}
//                             placeholder="Side Stone"
//                         />
//                         <Input
//                             type="number"
//                             name="productCost"
//                             value={product.productCost}
//                             onChange={handleInputChange}
//                             placeholder="Product Cost"
//                         />
//                         <Input
//                             type="text"
//                             name="remark"
//                             value={product.remark}
//                             onChange={handleInputChange}
//                             placeholder="Remark"
//                         />
//                     </div>

//                     <button className="px-4 py-2 text-white bg-blue-500" onClick={addProduct}>
//                         Add Product
//                     </button>

//                     <div className="mt-4">
//                         <h2 className="text-xl font-bold">Products List</h2>
//                         <ul>
//                             {products.map((p, index) => (
//                                 <li key={index} className="mb-2">
//                                     Product ID Counter: OD{(counter).toString().padStart(3, '0')}: {p.metal}, ₹{p.productCost}
//                                 </li>
//                             ))}
//                         </ul>

//                         <div className="mt-4">
//                             <label>Shipping Charge:</label>
//                             <input
//                                 type="number"
//                                 value={shippingCharge}
//                                 onChange={(e) => setShippingCharge(e.target.value)}
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <h3>Total Cost: ₹{calculateTotalCost()}</h3>
//                         </div>

//                         <button className="px-4 py-2 mt-4 text-white bg-green-500" onClick={exportPDF}>
//                             Export to PDF
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JewelleryAdminPanel;
import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Input from '../../components/ui/input';
import BreadcrumbNav from '../../components/ui/breadcrumb';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from './history'
const JewelleryAdminPanel = () => {
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
    const [shippingCharge, setShippingCharge] = useState(0);
    const [uploadedLogo, setUploadedLogo] = useState(null);
    const [counter, setCounter] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setProduct({ ...product, [name]: URL.createObjectURL(files[0]) });
    };


    const addProduct = async () => {
        const newProductID = `OD${counter.toString().padStart(3, '0')}`; // Generate the new product ID based on the counter
        const newProduct = { ...product, productID: newProductID }; // Combine the product state with the new product ID

        try {
            // Send the new product details to the backend API
            const response = await axios.post('http://localhost:5000/api/products', newProduct);

            // Check if the response status is 200 (successful)
            if (response.status === 200) {
                // Update the state to include the new product in the list
                setProducts([...products, newProduct]);

                // Increment the counter for the next product
                setCounter(counter + 1);

                // Reset the product state to empty values for the next input
                setProduct({
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

                // Alert success
                alert('Product added successfully');
            } else {
                // Alert if the response status is not 200 (error)
                alert('Failed to add product. Try again later.');
            }
        } catch (error) {
            // Log and alert if there is an error during the request
            console.error('Error adding product:', error);
            alert('There was an error while adding the product.');
        }
    };


    useEffect(() => {
        const fetchCounter = async () => {
            try {
                const response = await axios.get('https://server-cosmatic.vercel.app/api/products');
                setCounter(response.data.counter);
                setLoading(false);
            } catch (err) {
                setError('Error fetching counter');
                setLoading(false);
            }
        };

        fetchCounter();
    }, []);

    const calculateTotalCost = () => {
        const totalProductCost = products.reduce((sum, p) => sum + Number(p.productCost || 0), 0);
        return totalProductCost + Number(shippingCharge || 0);
    };

    const exportPDF5 = () => {
        const doc = new jsPDF();

        if (uploadedLogo) {
            doc.addImage(uploadedLogo, 'PNG', 10, 10, 30, 30); // Adding logo if exists
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-IN', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        doc.text(`Date: ${formattedDate}`, 50, 30);
        doc.addImage(products.image, 'PNG', 10, 10, 30, 30);
        // Prepare table data with images
        const tableData = products.map((p) => {
            let imageData = '';

            // Assign the product's image if it exists
            if (p.image) {
                imageData = p.image; // Assuming p.image is a valid image URL or Blob
            }

            return [
                imageData, // Image will be the first column in the table
                p.productID,
                p.metal,
                p.size,
                p.color,
                p.karat,
                p.mainDiamond,
                p.sideStone,
                p.productCost,
                p.remark,
            ];
        });


        // Add table to PDF
        doc.autoTable({
            head: [['Image', 'Product ID', 'Metal', 'Size', 'Main Diamond', 'Side Stone', 'Cost', 'Remark']],
            body: tableData,
            startY: 40,
            columnStyles: {
                0: { cellWidth: 30, halign: 'center', valign: 'middle' }, // Styling the image column
            },
            didDrawCell: (data) => {
                // If there is an image data in the current cell, add the image to the cell
                if (data.column.index === 0 && data.cell.raw) {
                    const image = new Image();
                    image.src = data.cell.raw;
                    image.onload = () => {
                        doc.addImage(image, 'PNG', data.cell.x + 2, data.cell.y + 2, 25, 25);
                    };
                }
            }

        });

        // Adding total cost details
        doc.text(`Total Product Cost: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 20);
        doc.text(`Shipping Charge: ₹${shippingCharge}`, 10, doc.lastAutoTable.finalY + 30);
        doc.text(`Grand Total: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 40);

        // Save PDF
        doc.save('Jewellery_Products_Details.pdf');

        // Revoke object URL to free up memory
        products.forEach(p => {
            if (p.image) {
                URL.revokeObjectURL(p.image);
            }
        });
    };
    const exportPDF = async () => {
        const doc = new jsPDF();

        // Add logo if exists
        if (uploadedLogo) {
            doc.addImage(uploadedLogo, 'PNG', 10, 10, 30, 30);
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-IN', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        doc.text(`Date: ${formattedDate}`, 50, 30);

        // Add product image (if exists)
        if (products.image) {
            doc.addImage(products.image, 'PNG', 10, 10, 30, 30);
        }

        // Prepare table data with images
        const tableData = await Promise.all(products.map(async (p) => {
            let imageData = '';

            // If product has an image, convert it to a base64 string if it's a Blob
            if (p.image) {
                if (p.image instanceof Blob) {
                    imageData = await toBase64(p.image); // Convert Blob to base64
                } else {
                    imageData = p.image; // Assuming p.image is a valid URL or base64 string
                }
            }

            return [
                imageData, // Image will be the first column in the table
                p.productID,
                p.metal,
                p.size,
                p.color,
                p.karat,
                p.mainDiamond,
                p.sideStone,
                p.productCost,
                p.remark,
            ];
        }));

        // Add table to PDF
        doc.autoTable({
            head: [['Image', 'Product ID', 'Metal', 'Size', 'Main Diamond', 'Side Stone', 'Cost', 'Remark']],
            body: tableData,
            startY: 40,
            columnStyles: {
                0: { cellWidth: 30, halign: 'center', valign: 'middle' }, // Styling the image column
            },
        });

        // Adding total cost details
        doc.text(`Total Product Cost: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 20);
        doc.text(`Shipping Charge: ₹${shippingCharge}`, 10, doc.lastAutoTable.finalY + 30);
        doc.text(`Grand Total: ₹${calculateTotalCost() + shippingCharge}`, 10, doc.lastAutoTable.finalY + 40);

        // Save PDF
        doc.save('Jewellery_Products_Details.pdf');

        // Revoke object URL to free up memory
        products.forEach(p => {
            if (p.image) {
                URL.revokeObjectURL(p.image);
            }
        });
    };

    // Helper function to convert Blob to Base64 string
    const toBase64 = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const metalOptions = [
        { value: 'select', label: 'Select an option' },
        { value: 'Gold', label: 'Gold' },
        { value: 'platinum', label: 'Platinum' },
        { value: 'silver', label: 'Silver' },
    ];

    const goldColorOptions = [
        { value: 'yellow', label: 'Yellow' },
        { value: 'white', label: 'White' },
        { value: 'pink', label: 'Rose' },
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
    ]
    const exportPDFs = () => {
        const doc = new jsPDF();

        if (uploadedLogo) {
            doc.addImage(uploadedLogo, 'PNG', 10, 10, 30, 30);
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-IN', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        doc.text(`Date: ${formattedDate}`, 50, 30);

        const tableData = products.map((p) => [
            p.image,
            p.productID,
            p.metal,
            p.size,
            p.color,
            p.karat,
            p.mainDiamond,
            p.sideStone,
            p.productCost,
            p.remark,
        ]);

        doc.autoTable({
            head: [['image', 'Product ID', 'Metal', 'Size', 'Main Diamond', 'Side Stone', 'Cost', 'Remark']],
            body: tableData,
            startY: 40,
        });

        doc.text(`Total Product Cost: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 20);
        doc.text(`Shipping Charge: ₹${shippingCharge}`, 10, doc.lastAutoTable.finalY + 30);
        doc.text(`Grand Total: ₹${calculateTotalCost()}`, 10, doc.lastAutoTable.finalY + 40);

        doc.save('Jewellery_Products_Details.pdf');
    };
    const generatePDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4'); // A4 page size in mm

        // Header Section
        doc.setFont('Arial', 'B', 16);
        doc.text('Lab Treasure', 105, 20, null, null, 'center');
        doc.setFont('Arial', '', 12);
        doc.text('Logo Placeholder', 105, 30, null, null, 'center'); // Replace with actual logo if needed

        // Product Section
        doc.setFont('Arial', 'B', 14);
        doc.text('Product Details', 20, 40);

        doc.setFont('Arial', '', 12);
        doc.text('Gold: 14k', 20, 50);
        doc.text('Main Diamond: 200gm', 20, 55);
        doc.text('Side Stone: 100gm', 20, 60);
        doc.text('Quality: High', 20, 65);
        doc.text('Size: 20', 20, 70);
        doc.text('Order Value: ₹12,000/-', 20, 75);
        doc.text('Color: Yellow', 20, 80);
        doc.text('Remark: Special Edition', 20, 85);
        doc.text('Product ID: OD111', 20, 90);
        doc.text('Total Cost: ₹12,350/-', 20, 95);

        // Footer Section
        doc.setFont('Arial', 'B', 14);
        doc.text('Total Products Cost: ₹37,050/-', 20, 260);

        doc.setFont('Arial', '', 12);
        doc.text('Email: treasurelab@gmail.com', 20, 270);
        doc.text('Phone: +91 75787 75177', 20, 275);

        // Save the PDF
        doc.save('product_details.pdf');
    };
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
                                            onChange={handleLogoChange}
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
                <div className="container p-4 mx-auto bg-white">
                    <h1 className="mb-4 text-2xl font-bold">Jewellery Admin Panel</h1>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <Input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            placeholder="Product Image"
                        />
                        <select
                            name="metal"
                            value={product.metal}
                            onChange={handleInputChange}
                            className="w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize"
                        >
                            {metalOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        {product.metal === 'Gold' && (
                            <>
                                <select
                                    name="color"
                                    value={product.color}
                                    onChange={handleInputChange}
                                    className={`w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize`}
                                    style={{ backgroundColor: product.color }}
                                >
                                    {goldColorOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                <select
                                    name="karat"
                                    value={product.karat}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize"
                                >
                                    {goldKaratOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </>
                        )}
                        <Input
                            type="text"
                            name="size"
                            value={product.size}
                            onChange={handleInputChange}
                            placeholder="Size"
                        />
                        <Input
                            type="text"
                            name="mainDiamond"
                            value={product.mainDiamond}
                            onChange={handleInputChange}
                            placeholder="Main Diamond"
                        />
                        <Input
                            type="text"
                            name="sideStone"
                            value={product.sideStone}
                            onChange={handleInputChange}
                            placeholder="Side Stone"
                        />
                        <Input
                            type="number"
                            name="productCost"
                            value={product.productCost}
                            onChange={handleInputChange}
                            placeholder="Product Cost"
                        />
                        <Input
                            type="text"
                            name="remark"
                            value={product.remark}
                            onChange={handleInputChange}
                            placeholder="Remark"
                        />
                    </div>

                    <button className="px-4 py-2 text-white bg-blue-500" onClick={addProduct}>
                        Add Product
                    </button>

                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Products List</h2>
                        <ul>
                            {products.map((p, index) => (
                                <li key={index} className="mb-2">
                                    Product ID: {p.productID}: {p.metal}, ₹{p.productCost}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <label>Shipping Charge:</label>
                            <input
                                type="number"
                                value={shippingCharge}
                                onChange={(e) => setShippingCharge(e.target.value)}
                            />
                        </div>

                        <div className="mt-4">
                            <h3>Total Cost: ₹{calculateTotalCost()}</h3>
                        </div>

                        <button className="px-4 py-2 mt-4 text-white bg-green-500" onClick={exportPDF}>
                            Export to PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JewelleryAdminPanel;
