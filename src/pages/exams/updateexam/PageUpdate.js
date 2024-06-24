import React, { useState, useEffect } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import { useParams } from 'react-router-dom';
import Subpage from './Subpage';
import { Button, Drawer } from 'antd';
import Child from './Child';

function PageUpdate() {
  const [activeTab, setActiveTab] = useState('exam-listing');
  const [examListingSubmitted, setExamListingSubmitted] = useState(false);
  const { name } = useParams();
  const [namee, setNamee] = useState('');
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [overviewTabs, setOverviewTabs] = useState(['overview']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [childComponents, setChildComponents] = useState([]);

  const [childTabs, setChildTabs] = useState([]);





  const openSideBar=()=>{
    console.log("Clicking")
    setSidebarOpen((prev)=>(!prev));
  }

  const closeSlideBar=()=>{
    setSidebarOpen(false);
  }

  const showsubpage = () => {
    setModal(true);
  };

  const closesubpage = () => {
    setModal(false);
  };

  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/getcompletedinfo/${name}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Exam Details:', data);

          setNamee(data.examDetails[0].name);
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

  const handleExamListingSubmit = () => {
    setExamListingSubmitted(true);
    setActiveTab('exam-overview');
    alert('Exam Listing Submitted');
  };

  const addOverviewTab = () => {
    const newTabLabel = `overview ${overviewTabs.length + 1}`;
    setOverviewTabs((prevTabs) => [...prevTabs, newTabLabel]);
    setActiveTab(newTabLabel);
  };

  

  return (
    <div className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] xl:rtl:mr-[248px]" id="content_wrapper">
      <div className="page-content bg-blue-50">
        <div id="content_layout">
          {/* <!-- BEGIN: Breadcrumb --> */}
          <div className="mb-5">
            <ul className="m-0 p-0 list-none">
              <button className="button btn-primary" style={{ background: 'green', padding: '4px' }} onClick={showsubpage}>
                Add Submenu Page
              </button>
              <button className="button btn-primary" style={{ background: 'green', padding: '4px', marginLeft:'20px' }} onClick={showsubpage}>
                View Page
              </button>
              
            </ul>
          </div>
          {/* <!-- END: BreadCrumb --> */}
          <div className="space-y-5" style={{ marginTop: '-30px' }}>
            <div className="grid grid-cols-1">
              <div className="card">
                <div className="card-body flex flex-col p-6">
                  <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                    <div className="flex-1">
                      <div className="card-title text-slate-900 dark:text-white" style={{ color: 'black', marginBottom: '-100px' }}>
                        {namee} Exam Details{' '}
                        <button onClick={openSideBar}>
                        <div style={{ display: 'inline-block', marginLeft: '5px', cursor: 'pointer' }} >
                        <iconify-icon icon="heroicons:exclamation-triangle"></iconify-icon>
                        </div>
                        </button>
                        {/* <Button type="primary" icon={<ExclamationTriangleOutlined />} onClick={openSideBar}>
          Open Drawer
        </Button> */}

                      </div>
                      <div style={{ marginTop: '75px', marginLeft: '1000px' }}></div>
                    </div>
                  </header>

                  <div className="card-text h-full">
                    <div className="active" style={{ marginTop: '-30px' }}>
                      <ul
                        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 menu-open"
                        id="tabs-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a href="#exam-listing"
                            className={`nav-link w-full block font-medium text-sm font-Inter leading-tight capitalize border-x-0 border-t-0 border-b border-transparent px-4 pb-2 my-2 hover:border-transparent focus:border-transparent dark:text-slate-300 ${
                              activeTab === 'exam-listing' ? 'active' : ''
                            }`} id="exam-listing-tab" data-bs-toggle="pill" data-bs-target="#exam-listing" role="tab" aria-controls="exam-listing" aria-selected={activeTab === 'exam-listing'}>
                            Exam Listing
                          </a>
                        </li>
                        {overviewTabs.map((tab) => (
                          <li className="nav-item" role="presentation" key={tab}>
                            <a
                              href={`#${tab.replace(' ', '-')}`}
                              className={`nav-link w-full block font-medium text-sm font-Inter leading-tight capitalize border-x-0 border-t-0 border-b border-transparent px-4 pb-2 my-2 hover:border-transparent focus:border-transparent dark:text-slate-300 ${
                                activeTab === tab ? 'active' : ''
                              }`}
                              id={`${tab.replace(' ', '-')}-tab`}
                              data-bs-toggle="pill"
                              data-bs-target={`#${tab.replace(' ', '-')}`}
                              role="tab"
                              aria-controls={`${tab.replace(' ', '-')}`}
                              aria-selected={activeTab === tab}
                            >
                              {tab}
                            </a>
                          </li>
                        ))}
                       
                      </ul>
                      <div className="tab-content" id="tabs-tabContent">
                        <div
                          className={`tab-pane fade ${activeTab === 'exam-listing' ? 'active show' : ''}`}
                          id="exam-listing"
                          role="tabpanel"
                          aria-labelledby="exam-listing-tab"
                        >
                          {examListingSubmitted ? <Form1 /> : <Form1 onsubmit={handleExamListingSubmit} />}
                        </div>
                        {overviewTabs.map((tab) => (
                          <div
                            className={`tab-pane fade ${activeTab === tab ? 'active show' : ''}`}
                            id={tab.replace(' ', '-')}
                            role="tabpanel"
                            aria-labelledby={`${tab.replace(' ', '-')}-tab`}
                            key={tab}
                          >
                            {/* Render the content for each overview tab */}
                            <Form2 />
                          </div>
                        ))}
                        {modal && <Subpage onClose={closesubpage} added={addOverviewTab} />}
                        <Drawer title="Drawer Title" placement="left" closable={true} onClose={closeSlideBar} visible={sidebarOpen} maskClosable={false} mask={false}>
                        <p>1.Image size : 300px;</p>
                           <p>2.contain * is required</p>
                           <p>3.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in ipsum tenetur veniam sint, aspernatur
                             ratione! Dolore tempora accusantium veritatis assumenda, doloremque accusamus magnam. Mollitia natus quibusdam explicabo tenetur quaerat?</p>            
                         </Drawer>
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

export default PageUpdate;
