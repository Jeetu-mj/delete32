import React,{useState, createRef, useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UpCourse() {

    const[title, setTitle]=useState('')
    const[category, setCategory]=useState('')
    const[highlight, setHighlighted]=useState('')
    const[level, setLevel]=useState('')
    const[shortdesc, setShortDesc]=useState('')
    const[longdesc, setLongDesc]=useState('');
    const[authname, setAuthName]=useState('');
    const[breadt, setBreadt]=useState('');
    const[paget, setPaget]=useState('');
    const[metat, setMetat]=useState('');
    const[metadesc, setMetadesc]=useState('');
    const[metakey, setMetakey]=useState('');
    const[ogt, setOgt]=useState('');
    const[ogdesc, setOgdesc]=useState('');
    const[time, setTime]=useState('')
    const[file, setFile]=useState('');
    const[ogrobot, setOgrobot]=useState('');
    const[oggogle, setOggogle]=useState('');
    const[notifications, setNotifications] = useState([]);
    const[loading, setLoading]=useState(false)
    const {id}=useParams();
  
    const htmlToText = (html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    };
  
    const handleEditorChange = (content) => {
      const plainText = htmlToText(content);
      setLongDesc(plainText);
    };
    
  
    const addNotification = () => {
      
      setNotifications([...notifications,{ date: '', text: '', link: '' }]);
    };
    const deleteNotification = (index) => {
      const updatedNotifications = [...notifications];
      updatedNotifications.splice(index, 1);
      setNotifications(updatedNotifications);
    };
    
  
    const submitoverview = async(e)=>{
        e.preventDefault();
  
        try {
          const formData = new FormData();
          formData.append('title',title);
          formData.append('category',category);
          formData.append('highlight',highlight);
          formData.append('level',level);
          formData.append('file',file);
          formData.append('shortdesc', shortdesc);
          formData.append('longdesc', longdesc);
          formData.append('authname', authname);
          formData.append('breadt', breadt);
          formData.append('paget', paget);
          formData.append('metat', metat);
          formData.append('metadesc', metadesc);
          formData.append('metakey', metakey);
          formData.append('ogt', ogt);
          formData.append('ogdesc', ogdesc);
          formData.append('ogrobot', ogrobot);
          formData.append('oggogle', oggogle);
          formData.append('time',time)
          formData.append('status',true)
  
          notifications.forEach((notification, index) => {
              formData.append(`notifications[${index}][date]`, notification.date);
              formData.append(`notifications[${index}][text]`, notification.text);
              formData.append(`notifications[${index}][link]`, notification.link);
              console.log('Notification:', notification);
            });

            const randomNumber = Math.floor(10000 + Math.random() * 90000);
            formData.append("id", randomNumber)

            const currentDate = new Date()
            formData.append('added_on', currentDate);

            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
  
          
          const result = await axios.put( `http://localhost:4000/api/UpdateCourse/${id}`, formData)
          
         
          const overviewdata = await result.data();
          console.log('Success:', overviewdata);
        //   onSubmitt();
          
        } catch (error) {
          console.error('Error:', error);
        }
      }
  
      const saveAsDraft = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          formData.append('title',title);
          formData.append('category',category);
          formData.append('highlight',highlight);
          formData.append('level',level);
          formData.append('file',file);
          formData.append('shortdesc', shortdesc);
          formData.append('longdesc', longdesc);
          formData.append('authname', authname);
          formData.append('breadt', breadt);
          formData.append('paget', paget);
          formData.append('metat', metat);
          formData.append('metadesc', metadesc);
          formData.append('metakey', metakey);
          formData.append('ogt', ogt);
          formData.append('ogdesc', ogdesc);
          formData.append('ogrobot', ogrobot);
          formData.append('oggogle', oggogle);
          formData.append('time',time)
          formData.append('status',false) // Set status to false for draft
      
          notifications.forEach((notification, index) => {
            formData.append(`notifications[${index}][date]`, notification.date);
            formData.append(`notifications[${index}][text]`, notification.text);
            formData.append(`notifications[${index}][link]`, notification.link);
          });
          const randomNumber = Math.floor(10000 + Math.random() * 90000);
          formData.append("id", randomNumber)

          const currentDate = new Date()
          formData.append('added_on', currentDate);
          
          for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
      
        const result = await axios.put( `http://localhost:4000/api/UpdateCourse/${id}`, formData)
      
          const overviewdata = await result.data();
          console.log('Success:', overviewdata);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
     

      const optionss = [
        { value: 'Main Listing Page', label: 'Main Listing Page' },
        { value: 'Paramedical', label: 'Paramedical' },
        { value: 'Medical', label: 'Medical' },
        { value: 'Pharmacy', label: 'Pharmacy' },
        { value: 'Dental', label: 'Dental' },
        { value: 'Science', label: 'Science' },
        { value: 'Veterinary', label: 'Veterinary' },
        { value: 'Ayurveda', label: 'Ayurveda' }
      ];

      const imginput=createRef();
      
      const optionslevel = [
        { value: 'After 10th', label: 'After 10th' },
        { value: 'After 12th', label: 'After 12th' },
        { value: 'After UG', label: 'After UG' },
        { value: 'After PG', label: 'After PG' },
      ];

      useEffect(() => {
        const fetchNewsDetails = async () => {
          try {
            const response = await fetch(`http://localhost:4000/api/getcoursedetailsbyid/${id}`);
            if (response.ok) {
              const data = await response.json();
              console.log('Course Details:', data);
              setTitle(data.title)
              setHighlighted(data.highlight)
              setCategory(data.category)
              setLevel(data.level)
              setShortDesc(data.shortdesc)
              setLongDesc(data.longdesc)
              setTime(data.time)
              setAuthName(data.authname)
              setBreadt(data.breadt)
              setPaget(data.paget)
              setMetat(data.metat)
              setMetadesc(data.metadesc)
              setMetakey(data.metakey)
              setOgt(data.ogt)
              setOgdesc(data.ogdesc)
              setOgrobot(data.ogrobot)
              setOggogle(data.oggogle)
              setNotifications(data.notifications)
    
    
            } else {
              console.error('Error fetching course details:', response.statusText);
            }
          } catch (error) {
            console.error('Error in Fetching Exam Details:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchNewsDetails();
      }, [id]);
    


  return (
    <div>
      <form className="space-y-4" onSubmit={submitoverview}>
                          <div className="">
                          
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                                  
                              <div>
                                <label htmlFor="status"  className="form-label items-center">Trending Course</label>
                                   <div className="input-area relative flex">
                                       <div className="flex space-x-4 items-center mb-3">
                                           <input type="radio" id="Yes" name="NewsType" value="Yes" onChange={(e)=>setHighlighted(e.target.value)} checked={highlight==='Yes'}/>
                                           <label htmlFor="Yes" className="text-sm ml-1">Yes</label>
                                       </div>
                                       <div className="flex space-x-4 items-center mb-3 ml-5">
                                          <input type="radio" id="No" name="NewsType" value="No" onChange={(e)=>setHighlighted(e.target.value)} checked={highlight==='No'}/>
                                           <label htmlFor="No" className="text-sm ml-1">NO </label>
                                      </div>
                                   </div>
                              </div>
                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label"> Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                              </div>
                              
                              <div className="input-area" style={{ width: '100%' }}>
                                    <label htmlFor="select" className="form-label">News Category<span style={{ color: 'red' }}>*</span></label>
                                    <Select options={optionss} isMulti  closeMenuOnSelect={true} placeholder="Select options..." value={optionss.find((selectedOption) => selectedOption.value === category)} onChange={(selectedOption)=>setCategory(selectedOption ? selectedOption.value : null)} />
                              </div>
                             
                              </div>
                            

                            <div className="input-area relative"  >
                               <label for="Input" className="form-label">Short Description<span style={{ color: 'red' }}>*</span></label>
                               <textarea type="text" className="form-control" rows={3} value={shortdesc} onChange={(e)=>setShortDesc(e.target.value)} required/>
                            </div>

                            <div className="input-area relative"  >
                               <label for="Input" className="form-label" >Long Description<span style={{ color: 'red' }}>*</span></label>
                               <Editor textareaName='content' initialValue='Write your content here' onEditorChange={handleEditorChange}
                               init={{
                                height: 500,
                                menubar: true,
                                plugins: 'advlist autolink lists link image charmap preview anchor ' +
                                  'searchreplace visualblocks code fullscreen ' +
                                  'insertdatetime media table code help wordcount'
                                ,
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                              }}
                              required />
                            </div>
                            
                            <div className="flex items-center" style={{marginTop:'10px'}}  >
                               <label for="Input" className="form-label flex">Reading Time<span style={{ color: 'red' }}>*</span></label>
                                 <input type="text" className="form-control" style={{width:'500px', marginLeft:'-1000px'}} value={time} onChange={(e)=>setTime(e.target.value)} required/>
                            </div>
                            <div className="">
                                 <label htmlFor="select" className="form-label ">Candidate Level<span style={{ color: 'red' }}>*</span></label>
                                 <Select  options={optionslevel}  closeMenuOnSelect={true} placeholder="Select options..." value={optionslevel.find((selectedOption) => selectedOption.value === level)} onChange={(selectedOption)=>setLevel(selectedOption ? selectedOption.value : null)}  />
                              </div>

                            <div className="flex items-center" style={{marginTop:'10px'}}  >
                               <label for="Input" className="form-label flex">Author Name<span style={{ color: 'red' }}>*</span></label>
                                 <input type="text" className="form-control" style={{width:'500px', marginLeft:'-1000px'}} value={authname} onChange={(e)=>setAuthName(e.target.value)}/>
                               <button className="btn inline-flex justify-center btn-outline ml-3 bg-green-400 ml-10" type='button' onClick={addNotification}>Add Notification</button>
                            </div>
                            {notifications.map((notification, index) => (
                             <div key={index} className="flex items-center" style={{ marginTop: '10px' }}>
                               <label htmlFor={`notification-${index}`} className="form-label flex">Added Notification {index + 1}:</label>
                                 <input
                                 type="date" id={`date-notification-${index}`} className="date-control" style={{ width: '500px', marginLeft: '-450px', fontSize:'12px'  }} placeholder='dd-mm-yyyy' value={notification.date} onChange={(e) => {const updatedNotifications = [...notifications]; 
                                 updatedNotifications[index] = {...notification, date:e.target.value};  setNotifications(updatedNotifications); }} />
                                 <input
                                 type="text" id={`text-notification-${index}`} className="text-control" style={{ width: '500px', marginLeft: '10px', fontSize:'12px' }} placeholder='Notification Text' value={notification.text} onChange={(e) => {const updatedNotifications = [...notifications]; 
                                 updatedNotifications[index] = {...notification, text:e.target.value};  setNotifications(updatedNotifications); }} />
                                 <input
                                 type="link" id={`link-notification-${index}`} className="link-control" style={{ width: '500px', marginLeft: '10px', fontSize:'12px' }} placeholder='Notification Link' value={notification.link} onChange={(e) => {const updatedNotifications = [...notifications]; 
                                 updatedNotifications[index] = {...notification, link:e.target.value};  setNotifications(updatedNotifications); }} />
                                 <button className="btn inline-flex justify-center ml-3 bg-red-400" style={{ fontSize: '12px', padding: '4px 6px' }} type='button' onClick={() => deleteNotification(index)}>Delete</button>
                             </div>
                           ))}
                           
                             
                            <label for="Input" className="form-label mt-3" style={{ fontSize: '25px', color:'Grey' }}>SEO TAGS</label>
                        
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">BreadCrum Title<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control" value={breadt} onChange={(e)=>setBreadt(e.target.value)} required/>
                              </div>

                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">Page Title<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control" value={paget} onChange={(e)=>setPaget(e.target.value)} required/>
                              </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7">
                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">Meta Title<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control" value={metat} onChange={(e)=>setMetat(e.target.value)} required/>
                              </div>

                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">Meta Description</label>
                                    <input type="text" className="form-control" value={metadesc} onChange={(e)=>setMetadesc(e.target.value)}/>
                              </div>

                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">Meta Keyword</label>
                                    <input type="text" className="form-control" value={metakey} onChange={(e)=>setMetakey(e.target.value)}/>
                              </div>

                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">OG: Title</label>
                                    <input type="text" className="form-control" value={ogt} onChange={(e)=>setOgt(e.target.value)}/>
                              </div>

                              <div className="input-area relative">
                                    <label for="largeInput" className="form-label">OG: Description</label>
                                    <input type="text" className="form-control" value={ogdesc} onChange={(e) => setOgdesc(e.target.value)} />
                              </div>

                              <div className="form-group mt-2">
                                    <label htmlFor="exampleFormControlFile1">OG: Image</label>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile12" accept='.jpg, .jpeg, .png' ref={imginput} onChange={(e)=>setFile(e.target.files[0])}/>
                              </div>

                              <div className='mt-2'>
                                <label htmlFor="status" className="form-label items-center">OG: Robots</label>
                                   <div className="input-area relative flex">
                                       <div className="flex space-x-4 items-center mb-3">
                                           <input type="radio" id="NationalExam" name="case1" value="Follow" onChange={(e)=>setOgrobot(e.target.value)} checked={ogrobot==="Follow"}/>
                                           <label htmlFor="NationalExam" className="text-sm ml-1">Follow</label>
                                     </div>
                                       <div className="flex space-x-4 items-center mb-3 ml-5">
                                          <input type="radio" id="StateExam" name="examType" value="No Follow" onChange={(e)=>setOgrobot(e.target.value)} checked={ogrobot==="No Follow"}/>
                                           <label htmlFor="StateExam" className="text-sm ml-1">NO Follow</label>
                                      </div>
                                   </div>
                              </div>

                              <div>
                                <label htmlFor="status" className="form-label items-center">OG: googlebot</label>
                                   <div className="input-area relative flex">
                                       <div className="flex space-x-4 items-center mb-3">
                                           <input type="radio" id="NationalExam" name="case2" value="Follow" onChange={(e)=>setOggogle(e.target.value)} checked={oggogle==="Follow"}/>
                                           <label htmlFor="NationalExam" className="text-sm ml-1">Follow</label>
                                       </div>
                                       <div className="flex space-x-4 items-center mb-3 ml-5">
                                          <input type="radio" id="StateExam" name="examType" value="No Follow" onChange={(e)=>setOggogle(e.target.value)} checked={oggogle==="No Follow"}/>
                                           <label htmlFor="StateExam" className="text-sm ml-1">NO Follow</label>
                                      </div>
                                   </div>
                              </div>
                              </div>
                          </div>
                              <button className="btn inline-flex justify-center btn-outline-dark" type='button' onClick={saveAsDraft}>Save As Draft</button>
                              <button className="btn inline-flex justify-center btn-outline-dark ml-3 bg-green-400" type='submit'>Make News Live</button>
                          </form>
    </div>
  )
}

export default UpCourse
