import React, {useState} from 'react';
import axios from 'axios';

function Subpage({onClose, added}) {

   

  const [et, setEt] = useState('');
  const [sl, setSl] = useState('');

  const handleExamTitleChange = (e) => {
    const title = e.target.value;

    // Replace spaces with dashes for the slug
    const slugValue = title.replace(/\s+/g, '-').toLowerCase();

    setEt(title);
    setSl(slugValue);
  };

  
  const submitoverview = async(e)=>{
      e.preventDefault();

      try {
        const requestData = {
          et: et,
          sl: sl
        };
  
        const result = await axios.post("http://localhost:4000/api/overviewsubpage", requestData);
  
        const overviewdata = result.data;
        console.log('Success:', overviewdata);
        onClose();
  
      } catch (error) {
        console.error('Error:', error);
      }
    }


  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center' style={{ zIndex: 1000, marginTop:'-20px' }}>
      <div className='mt-10 flex flex-col gap-5 bg-white rounded-xl px-10 py-5 felx flex-col' style={{ overflowY: 'auto', maxHeight: '100vh' }}>
           <button className='place-self-end' onClick={onClose}>Close</button>
        <div>
           <h1 className='text-xl '>Add Submenu</h1>
           <div>
      <form className="space-y-4" onSubmit={submitoverview}>
                          <div className="">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                          <div className="input-area relative flex flex-col"  >
                               <label for="Input" className="form-label flex">Exam Title<span style={{marginLeft:'50px'}}></span></label>
                               <input type="text" className="form-control"  onChange={handleExamTitleChange} required/>
                            </div>
                            <div className="input-area relative flex flex-col"  >
                               <label for="Input" className="form-label flex">Slug<span style={{marginLeft:'50px'}}></span></label>
                               <input type="text" className="form-control" value={sl} required disabled/>
                            </div>
                            </div>

                           
                          </div>
                              <button className="btn inline-flex justify-center btn-outline-dark ml-3 bg-green-400" type='submit' onClick={added}>Add Submenu</button>
                          </form>
    </div>
        </div>
        
      </div>
    </div>
  )
}

export default Subpage
