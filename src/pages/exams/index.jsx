import React, {useState} from 'react';
import Examlisting from './Examlisting';
import Overview from './Overview';
import Addexam from './AdddExam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlankPage() {
  const [activeTab, setActiveTab] = useState('exam-listing');
  const [examListingSubmitted, setExamListingSubmitted] = useState(false);
  const[examName, setExamName]=useState('');
  const [subOverviewCount, setSubOverviewCount] = useState(1);
  const[modal, setModal]=useState(false);
  const[bar, setBar]=useState(false)

  const toastii = ()=>{
    toast("Exam Listing Submitted Successfully");
  }

  const toastiyy = ()=>{
    toast("Overview Submitted");
  }

 

  const showaddexam=()=>{
    setModal(true);
  }
  const closeaddexam=()=>{
    setModal(false);
  }
  
  const handleExamListingSubmit = () => {
    console.log('Handling Exam Listing Submission:');
    setExamListingSubmitted(true);
    setActiveTab('exam-overview');
    // alert("Exam Listing Submitted");
    toastii();
  };

  const handleExamOverviewSubmit = (data) => {
    console.log('Handling Exam Overview Submission:', data);
    // alert("Overview Submitted");
    toastiyy();
  };
 
  return (
    <div className="content-wrapper transition-all duration-150" id="content_wrapper">
      <div className="page-content bg-blue-50">
        <div id="content_layout">
          {/* <!-- BEGIN: Breadcrumb --> */}
          {/* <div className="mb-5" >
            <ul className="m-0 p-0 list-none">
              <li className="inline-block relative top-[3px] text-base text-primary-500 font-Inter">
                <a href="index.php">
                  <iconify-icon icon="heroicons-outline:home"></iconify-icon>
                  <iconify-icon icon="heroicons-outline:chevron-right" className="relative text-slate-500 text-sm rtl:rotate-180"></iconify-icon>
                </a>
              </li>
              <li className="inline-block relative text-sm text-primary-500 font-Inter" style={{color:'black'}}>
                Exam
                <iconify-icon icon="heroicons-outline:chevron-right" className="relative top-[3px] text-slate-500 rtl:rotate-180"></iconify-icon>
              </li>
              <li className="inline-block relative text-sm text-slate-500 font-Inter dark:text-black" style={{color:'black'}} >
                Add Exam
                </li>

            </ul>
          </div> */}
          {/* <!-- END: BreadCrumb --> */}
          <div className="space-y-5" style={{marginTop:'-30px'}}>
            <div className="grid grid-cols-1">
              <div className="card">
                <div className="card-body flex flex-col p-6">
                  <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                    <div className="flex-1">
                      <div className="card-title text-slate-900 dark:text-white" style={{color:'black', marginBottom:'-100px'}}>
                        Add Exam <div style={{ display: 'inline-block', marginLeft: '5px', cursor:'pointer' }} >
                        <iconify-icon icon="heroicons:exclamation-triangle" ></iconify-icon>
                      </div>
                        </div>
                      <div style={{marginTop:'75px', marginLeft:'1000px'}}>
                      <button style={{color:'white', background:'grey', borderRadius:'7px', padding:'2px'}} onClick={showaddexam}>Add Exam Details</button>
                      </div>
                    </div>
                  </header>
                  
                  <div className="card-text h-full" >
                    <div className="active" style={{marginTop:'-30px'}}>
                      <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 menu-open" id="tabs-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <a href="#exam-listing" className="nav-link w-full block font-medium text-sm font-Inter leading-tight capitalize border-x-0 border-t-0 border-b border-transparent px-4 pb-2 my-2 hover:border-transparent focus:border-transparent dark:text-slate-300 active" id="exam-listing-tab" data-bs-toggle="pill" data-bs-target="#exam-listing" role="tab" aria-controls="exam-listing" aria-selected="true">
                            Exam Listing
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a href="#exam-overview" className="nav-link w-full block font-medium text-sm font-Inter leading-tight capitalize border-x-0 border-t-0 border-b border-transparent px-4 pb-2 my-2 hover:border-transparent focus:border-transparent dark:text-slate-300 " id="exam-overview-tab" data-bs-toggle="pill" data-bs-target="#exam-overview" role="tab" aria-controls="exam-overview" aria-selected="false">
                            Overview
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="tabs-tabContent">
                        
                      <div className={`tab-pane fade ${activeTab === 'exam-listing' ? 'active show' : ''}`} id="exam-listing" role="tabpanel" aria-labelledby="exam-listing-tab">
                          
                          {examListingSubmitted ? (
                            <Examlisting setExamName={setExamName} />
                          ) : (
                            <Examlisting onSubmit={handleExamListingSubmit} setExamName={setExamName} />
                          )}
                        </div>

                        


                        <div className={`tab-pane fade ${activeTab === 'exam-overview' ? 'active show' : ''}`} id="exam-overview" role="tabpanel" aria-labelledby="exam-overview-tab">
                        
                         <Overview onSubmitt={handleExamOverviewSubmit} examName={examName} />

                          </div>
                          {modal && <Addexam onclose={closeaddexam}/>}
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


export default BlankPage; 


