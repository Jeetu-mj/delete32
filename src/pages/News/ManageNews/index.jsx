import React, {useState} from 'react'
import ManageNews from './ManageNews'

function MainManageNews() {
    const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] xl:rtl:mr-[248px]" id="content_wrapper">
    <div className="page-content bg-blue-50">
      <div id="content_layout">
        {/* <!-- BEGIN: Breadcrumb --> */}
        <div className="mb-5" >
          <ul className="m-0 p-0 list-none">
            <li className="inline-block relative top-[3px] text-base text-primary-500 font-Inter">
              <a href="index.php">
                <iconify-icon icon="heroicons-outline:home"></iconify-icon>
                <iconify-icon icon="heroicons-outline:chevron-right" className="relative text-slate-500 text-sm rtl:rotate-180"></iconify-icon>
              </a>
            </li>
            <li className="inline-block relative text-sm text-primary-500 font-Inter" style={{color:'black'}}>
              News
              <iconify-icon icon="heroicons-outline:chevron-right" className="relative top-[3px] text-slate-500 rtl:rotate-180"></iconify-icon>
            </li>
            <li className="inline-block relative text-sm text-slate-500 font-Inter dark:text-black" style={{color:'black'}} >
              Manage News
              </li>

          </ul>
        </div>
        {/* <!-- END: BreadCrumb --> */}
        <div className="space-y-5" style={{marginTop:'-30px'}}>
          <div className="grid grid-cols-1">
            <div className="card">
              <div className="card-body flex flex-col p-6">
                <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                  <div className="flex-1">
                    <div className="card-title text-slate-900 dark:text-white" style={{color:'black', marginBottom:'-100px'}}>
                      Manage News <iconify-icon icon="heroicons:exclamation-triangle" style={{ display: 'inline-block', marginLeft: '5px' }}></iconify-icon>
                    </div>
                  </div>
                </header>
                <div className="card-text h-full" >
                  <div className="active" style={{marginTop:'-30px'}}>
                    
                    <div className="tab-content" id="tabs-tabContent">
                      
                    <div className={`tab-pane fade ${activeTab === 'news' ? 'show active' : ''}`} id="news" role="tabpanel" aria-labelledby="news-tab">
                      <ManageNews/>
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
    </div>
  )
}

export default MainManageNews
