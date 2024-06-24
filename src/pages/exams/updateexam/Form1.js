import React, {useState, useEffect, createRef} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';



function Form1({onsubmit}) {

  
  const [officialwebsiteError, setOfficialWebsiteError] = useState('');
  const [sessionError, setSessionError] = useState('');
  const[imgsize, setImgsize]=useState('');

    const handleSubmit=async(e)=>{

      e.preventDefault();

    
    
      try {
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',name);
        formData.append('examfullname', examfullname);
        formData.append('examtype', examtype);
        formData.append('exammode', exammode);
        formData.append('examcase', examcase);
        formData.append('examcategory', examcategory);
        formData.append('coursemapping', coursemapping);
        formData.append('formlink', formlink);
        formData.append('officialwebsite', officialwebsite);
        formData.append('session', session);
        formData.append('applicationdate', applicationdate);
        formData.append('startenddate', startenddate);
        formData.append('resultannounce', resultannounce);
        formData.append('general', general);
        formData.append('male', male);
        formData.append('female', female);
        formData.append('outside', outside);
        formData.append('sc', sc);
        formData.append('pwd', pwd);
        formData.append('others', others);
        
        const currentDate = new Date()
        formData.append('added_on', currentDate);
        setFormLinkError('');
        if (!formlink.startsWith('https')) {
          setFormLinkError('Invalid link format. Link must start with "https".');
          return;
        }
  
        setOfficialWebsiteError('');
        if (!officialwebsite.startsWith('https')) {
          setOfficialWebsiteError('Invalid link format. Link must start with "https".');
          return;
        }
        setSessionError('');
        if (!session.toString().length === 4) {
          setSessionError('Session must be a 4-digit year.');
          return;
        }
        setImgsize('');
        if (file && file.size > 200 * 1024) {
          setImgsize('Size must be less than 200KB');
          imginput.current.value = null;
          return;
        }      
        const response = await axios.put(`http://localhost:4000/api/details/${name}`, formData);
     
         onsubmit();
      
      console.log('Success:', response);
      
    } catch (error) {
       
    }
  }  

//         setFormLinkError('');
//   if (!formlink.startsWith('https')) {
//     setFormLinkError('Invalid link format. Link must start with "https".');
//     return;
//   }


  const { name } = useParams();
  const [examDetails, setExamDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const[namee, setNamee]=useState('');
  const[examfullname,setExamFullname]=useState('')
  const[examcategory,setExamCategory]=useState('');
  const[examtype, setExamType]=useState('');
  const[exammode, setExamMode]=useState('');
  const[examcase, setExamCase]=useState('');
  const[formlink,setFormLink]=useState('');
  const[coursemapping,setCourseMapping]=useState('');
  const [formlinkError, setFormLinkError] = useState('');
  const[officialwebsite,setofficialwebsite]=useState('');
    const[session, setSession]=useState('');
    const[applicationdate,setApplicationDate]=useState('');
    const[startenddate,setStartEndDate]=useState('');
    const[resultannounce,setResultAnnounce]=useState('');
    const[general,setgeneral]=useState('');
    const[male,setmale]=useState('');
    const[female,setFemale]=useState('');
    const[outside,setOutside]=useState('');
    const[sc,setSc]=useState('');
    const[pwd,setPwd]=useState('');
    const[others,setOthers]=useState('');
    const[file,setFile]=useState('');
    const[img, setImg]=useState('')


    const imginput = createRef();




  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        console.log("Name",name)
        const response = await fetch(`http://localhost:4000/api/getcompletedinfo/${name}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Exam Details:', data);
          
          setNamee(data.examDetails[0].name)
          setExamFullname(data.examDetails[0].examfullname)
          setExamCategory(data.examDetails[0].examcategory)
          setExamType(data.examDetails[0].examtype)
          setExamMode(data.examDetails[0].exammode)
          setExamCase(data.examDetails[0].examcase)
          setFormLink(data.examDetails[0].formlink)
          setCourseMapping(data.examDetails[0].coursemapping)
          setofficialwebsite(data.examDetails[0].officialwebsite)
          setSession(data.examDetails[0].session)
          setApplicationDate(data.examDetails[0].applicationdate)
          setStartEndDate(data.examDetails[0].startenddate)
          setResultAnnounce(data.examDetails[0].resultannounce)
          setgeneral(data.examDetails[0].general)
          setmale(data.examDetails[0].male)
          setFemale(data.examDetails[0].female)
          setOutside(data.examDetails[0].outside)
          setSc(data.examDetails[0].sc)
          setPwd(data.examDetails[0].pwd)
          setOthers(data.examDetails[0].others)
          setImg(data.examDetails[0].img)


        } else {
          console.error('Error fetching exam details:', response.statusText);
        }
      } catch (error) {
        console.error('Error in Fetching Exam Details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExamDetails();
  }, [name]);

  const fetchDetailsByName = async (selectedName) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getnamedetails/${selectedName}`);
      if (response.data && response.data.length > 0) {
        setExamDetails(response.data[0]);
        console.log(response.data) // Assuming the response is an array of details
      } else {
        setExamDetails({});
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  const [shortNames, setShortNames] = useState([]);

  useEffect(() => {
    const fetchShortNames = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/getallnames');
        setShortNames(response.data.shortNames);
      } catch (error) {
        console.error('Error fetching short names:', error);
      }
    };

    fetchShortNames();
  }, []);

  const optionsfir = [
    ...shortNames.map((name) => ({ value: name, label: name })),
    { value: 'createYourOwn', label: 'Create Your Own' },
  ];
   
  const handleChangeName =  (selectedOption) => {
    console.log(selectedOption)
    if (selectedOption) {      
        setNamee(selectedOption.value); // Set the name state
        fetchDetailsByName(selectedOption.value); // Fetch details by name
       
    } else {
      // Clear details if no name is selected
      setExamDetails({});
    }
  };

  const optionssec=[
    { value: 1, label: 'Paramedical' },
    { value: 2, label: 'Medical' }, 
    { value: 3, label: 'Pharmacy' },
    { value: 4, label: 'Dental' },
    { value: 5, label: 'Science' },
    { value: 6, label: 'Veterinary' },
    { value: 7, label: 'Ayurveda' },
]
  

  



  return (
    <div className="card-text h-full ">
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        
      <div className="input-area relative">
            <label for="largeInput" className="form-label">Exam Short Name<span style={{ color: 'red' }}>*</span></label>
            {/* <input type="text" className="form-control" placeholder="Enter Short Name" value={name} onChange={(e) => setName(e.target.value)} required/> */}
            <Select id="first-select"  options={optionsfir}
                 value={optionsfir.find((selectedOption) => selectedOption.value === namee)}
                 onChange={handleChangeName}
                 isSearchable placeholder="Select or enter exam short name" 
                 />
      </div>
        

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Full Name<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" className="form-control" placeholder="Exam Full Name" value={examfullname} onChange={(e) => setExamFullname(e.target.value)} required/>
                                    </div>





                                    
                                    <div>
                                       <label htmlFor="status" className="form-label items-center">Exam List Type<span style={{ color: 'red' }}>*</span></label>
                                       <div className="input-area relative flex">
                                           <div className="flex space-x-4 items-center mb-3">
                                               <input type="radio" id="tentative" name="examListType" value="Entrance Exam" onChange={(e) => setExamType(e.target.value)} checked={examtype === '1'} required/>
                                               <label htmlFor="tentative" className="text-sm ml-1">Entrance Exam</label>
                                           </div>
                                           <div className="flex space-x-4 items-center mb-3 ml-5">
                                                <input type="radio" id="yetToBeAnnounced" name="examListType" value="Recruitment Exam" onChange={(e) => setExamType(e.target.value)} checked={examtype === '2'} required />
                                                <label htmlFor="yetToBeAnnounced" className="text-sm ml-1">Recruitment Exam</label>
                                            </div>
                                        </div>
                                    </div>








                                    
                                      
                                        <div className="form-group">
                                          <label for="exampleFormControlFile1">Exam Logo<span style={{ color: 'red' }}>*</span></label>
                                          <img src={`/Logos/${img}`} alt="" style={{ width: '70px', height: '70px', marginLeft:'1px', borderRadius:'3px' }}  />
                                          <input type="file" className="form-control-file mt-2" id="exampleFormControlFile1"  accept='.jpg, .jpeg, .png'  ref={imginput}  onChange={(e)=>setFile(e.target.files[0])} required />
                                          {/* {imgsize && <div className="error-message text-red-500 text-xs mt-1">{imgsize}</div> } */}
                                        </div>
                                    


                                    
                                    <div>
                                         <label htmlFor="status" className="form-label items-center">Exam Mode<span style={{ color: 'red' }}>*</span></label>
                                         <div className="input-area relative flex">
                                             <div className="flex space-x-4 items-center mb-3">
                                                 <input type="radio" id="Online" name="examMode" value="Online" onChange={(e) => setExamMode(e.target.value)} checked={exammode === '1'} required/>
                                                  <label htmlFor="Online" className="text-sm ml-1">Online</label>
                                              </div>
                                              <div className="flex space-x-4 items-center mb-3 ml-5">
                                                  <input type="radio" id="Offline" name="examMode" value="Offline" onChange={(e) => setExamMode(e.target.value)} checked={exammode === '2'} required/>
                                                  <label htmlFor="Offline" className="text-sm ml-1">Offline</label>
                                             </div>
                                             <div className="flex space-x-4 items-center mb-3 ml-5">
                                                 <input type="radio" id="OnlineAndOfflineBoth" name="examMode" value="Online and Offline Both" onChange={(e) => setExamMode(e.target.value)} checked={exammode === '3'} required/>
                                                 <label htmlFor="OnlineAndOfflineBoth" className="text-sm ml-1">Online and Offline Both</label>
                                              </div>
                                         </div>
                                      </div>

                                      <div>
                                         <label htmlFor="status" className="form-label items-center">Exam Type<span style={{ color: 'red' }}>*</span></label>
                                           <div className="input-area relative flex">
                                               <div className="flex space-x-4 items-center mb-3">
                                                   <input type="radio" id="NationalExam" name="examType" value="National Exam" onChange={(e) => setExamCase(e.target.value)} checked={examcase == 1} required/>
                                                   <label htmlFor="NationalExam" className="text-sm ml-1">National Exam</label>
                                               </div>
                                               <div className="flex space-x-4 items-center mb-3 ml-5">
                                                   <input type="radio" id="StateExam" name="examType" value="State Exam" onChange={(e) => setExamCase(e.target.value)} checked={examcase == 2} required/>
                                                   <label htmlFor="StateExam" className="text-sm ml-1">State Exam</label>
                                               </div>
                                           </div>
                                      </div>




                                    
                                      <div className="input-area">
                                            <label htmlFor="select" className="form-label">Exam Category<span style={{ color: 'red' }}>*</span></label>
                                            <Select
                                                id="second-select"
                                                className=""
                                                isMulti
                                                options={optionssec}
                                                value={
                                                    typeof examcategory === 'string'
                                                    ? examcategory.split(',').map((index) => parseInt(index, 10))
                                                        .filter((index) => index >= 1 && index <= optionssec.length)
                                                        .map((index) => optionssec[index - 1])
                                                    : optionssec.filter((option) => (examcategory) == option.value)
                                                }
                                                onChange={(selectedOptions) => setExamCategory(selectedOptions.map(option => option.value))}
                                                required
                                            />

                                        </div>



                                    
                                    <div className="input-area">
                                        <label for="select" className="form-label">Course Mapping</label>
                                        <select id="select" className="form-control" placeholder="Course Mapping" value={coursemapping} onChange={(e) => setCourseMapping(e.target.value)}>
                                            <option value="" className="dark:bg-white-700">--Select--</option>
                                            <option value="Bsc" className="dark:bg-white-700">Paramedical</option>
                                            <option value="Msc" className="dark:bg-white-700">Medical</option>
                                            <option value="Msc" className="dark:bg-white-700">Pharmacy</option>
                                            <option value="Msc" className="dark:bg-white-700">Dental</option>
                                            <option value="Msc" className="dark:bg-white-700">Science</option>
                                            <option value="Msc" className="dark:bg-white-700">Veterinary</option>
                                            <option value="Msc" className="dark:bg-white-700">Ayurveda</option>
                                        </select>
                                    </div>


                                    
                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Application Form Link</label>
                                        <input type="text" className="form-control" value={formlink} onChange={(e)=>setFormLink(e.target.value)} required/>
                                        {/* {formlinkError && <div className="error-message text-red-500 text-xs mt-1">{formlinkError}</div>} */}
                                    </div>



                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Official Website<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" className="form-control" value={officialwebsite} onChange={(e)=>setofficialwebsite(e.target.value)} required/>
                                        {/* {officialwebsiteError && <div className="error-message text-red-500 text-xs mt-1">{officialwebsiteError}</div>} */}
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Session<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" className="form-control" value={session} onChange={(e)=>setSession(e.target.value)} required/>
                                        {/* {sessionError && <div className="error-message text-red-500 text-xs mt-1">{sessionError}</div>} */}
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Application Date<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" className="form-control" value={applicationdate} onChange={(e)=>setApplicationDate(e.target.value)} required/>
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Start And End Date<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" className="form-control" value={startenddate} onChange={(e)=>setStartEndDate(e.target.value)} required/>
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Result Announce Date<span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" className="form-control" value={resultannounce} onChange={(e)=>setResultAnnounce(e.target.value)} required/>
                                    </div>
                                    </div>
                                    
                                    
                                    <label for="largeInput" className="form-label"></label>


                                    <label for="Input" className="form-label mt-900" style={{ fontSize: '15px', color:'Grey'}}>Exam Fee</label>
                                    <div className="grid grid-cols-1 md:grid-cols-19 lg:grid-cols-7 gap-7">
                                    
                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">General</label>
                                        <input type="text" className="form-control" value={general} onChange={(e)=>setgeneral(e.target.value)} />
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Male</label>
                                        <input type="text" className="form-control" value={male} onChange={(e)=>setmale(e.target.value)} />
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Female</label>
                                        <input type="text" className="form-control" value={female} onChange={(e)=>setFemale(e.target.value)} />
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">Outside</label>
                                        <input type="text" className="form-control" value={outside} onChange={(e)=>setOutside(e.target.value)} />
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">SC</label>
                                        <input type="text" className="form-control" value={sc} onChange={(e)=>setSc(e.target.value)} />
                                    </div>

                                    <div className="input-area relative">
                                        <label for="largeInput" className="form-label">PWD</label>
                                        <input type="text" className="form-control" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                                    </div>

                                    <div className="input-area relative"  >
                                        <label for="largeInput" className="form-label">Others</label>
                                        <input type="text" className="form-control" value={others} onChange={(e)=>setOthers(e.target.value)} />
                                    </div>
                                </div>
                                
      <button className="btn inline-flex justify-center btn-outline-dark" type='submit'>Go to Overview</button>
    </form>
  </div>
  )
}

export default Form1
