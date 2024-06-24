import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Card from "@/components/ui/Card";

function Addexam({ onclose }) {
    const [short_name, setshort_name] = useState('');
    const [full_name, setfull_name] = useState('');
    const [category, setCategory] = useState([]);
    const [mode, setMode] = useState('');
    const [type, setType] = useState('');
    const [exam_type, setexam_type] = useState('');

    const options = [
        { value: '1', label: 'Paramedical' },
        { value: '2', label: 'Medical' },
        { value: '3', label: 'Pharmacy' },
        { value: '4', label: 'Dental' },
        { value: '5', label: 'Science' },
        { value: '6', label: 'Veterinary' },
        { value: '7', label: 'Ayurveda' }
    ];

    const handleChangeCategory = (selectedOptions) => {
        setCategory(selectedOptions);
    };

    const submitpage = async (e) => {
        e.preventDefault();
    
        try {
            const requestData = {
                short_name,
                full_name,
                mode,
                type,
                exam_type,
                category: category.map(option => option.value).join(','),
                added_on: new Date().toISOString()
            };
    
            console.log('Request Data:', requestData);
            console.log("C1")
            const response = await axios.post('http://localhost:4000/api/adddetails', requestData);
            console.log("C2");
            onclose();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
       <Card> <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center' >
            <div className='mt-10  flex flex-col gap-5 bg-white rounded-xl px-20 py-10 felx'>
                <button className='place-self-end btn-outline-dark'style={{ borderRadius: '5px', padding: '2px' }} onClick={onclose}>Close</button>
                <div className="card-text h-full ">
                    <form className="space-y-4" style={{ marginLeft: '200px' }} onSubmit={submitpage} >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                            <div className="input-area relative">
                                <label htmlFor="largeInput" className="form-label">Exam Short Name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" placeholder="Enter Short Name" value={short_name} onChange={(e) => setshort_name(e.target.value)} required />
                            </div>
                            <div className="input-area relative">
                                <label htmlFor="largeInput" className="form-label">Full Name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control" placeholder="Exam Full Name" value={full_name} onChange={(e) => setfull_name(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="status" className="form-label items-center">Exam List Type<span style={{ color: 'red' }}>*</span></label>
                                <div className="input-area relative flex">
                                    <div className="flex space-x-4 items-center mb-3">
                                        <input type="radio" id="tentative" name="examListType" value={1} onChange={(e) => setType(e.target.value)} required />
                                        <label htmlFor="tentative" className="text-sm ml-1">Entrance Exam</label>
                                    </div>
                                    <div className="flex space-x-4 items-center mb-3 ml-5">
                                        <input type="radio" id="yetToBeAnnounced" name="examListType" value={2} onChange={(e) => setType(e.target.value)} required />
                                        <label htmlFor="yetToBeAnnounced" className="text-sm ml-1">Recruitment Exam</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="status" className="form-label items-center">Exam Mode<span style={{ color: 'red' }}>*</span></label>
                                <div className="input-area relative flex">
                                    <div className="flex space-x-4 items-center mb-3">
                                        <input type="radio" id="Online" name="examMode" value={1} onChange={(e) => setMode(e.target.value)} required />
                                        <label htmlFor="Online" className="text-sm ml-1">Online</label>
                                    </div>
                                    <div className="flex space-x-4 items-center mb-3 ml-5">
                                        <input type="radio" id="Offline" name="examMode" value={2} onChange={(e) => setMode(e.target.value)} required />
                                        <label htmlFor="Offline" className="text-sm ml-1">Offline</label>
                                    </div>
                                    <div className="flex space-x-4 items-center mb-3 ml-5">
                                        <input type="radio" id="OnlineAndOfflineBoth" name="examMode" value={3} onChange={(e) => setMode(e.target.value)} required />
                                        <label htmlFor="OnlineAndOfflineBoth" className="text-sm ml-1">Online and Offline Both</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="status" className="form-label items-center">Exam Type<span style={{ color: 'red' }}>*</span></label>
                                <div className="input-area relative flex">
                                    <div className="flex space-x-4 items-center mb-3">
                                        <input type="radio" id="NationalExam" name="examType" value={1} onChange={(e) => setexam_type(e.target.value)} required />
                                        <label htmlFor="NationalExam" className="text-sm ml-1">National Exam</label>
                                    </div>
                                    <div className="flex space-x-4 items-center mb-3 ml-5">
                                        <input type="radio" id="StateExam" name="examType" value={2} onChange={(e) => setexam_type(e.target.value)} required />
                                        <label htmlFor="StateExam" className="text-sm ml-1">State Exam</label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-area">
                                <label htmlFor="select" className="form-label">Exam Category<span style={{ color: 'red' }}>*</span></label>
                                <Select options={options} isMulti closeMenuOnSelect={false} placeholder="Select options..." value={category} onChange={handleChangeCategory} />
                            </div>
                        </div>
                        <button className="btn inline-flex justify-center btn-outline-dark" type='submit'>Go to Examlisting</button>
                    </form>
                </div>
            </div>
        </div>
        </Card>
    );
}

export default Addexam;
