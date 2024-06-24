const express = require("express");
const app = express();
const cors = require('cors');
const Port = 4000;

const detailsController = require('./routes/detailsController');
const fetchdetailsController = require('./routes/fetchdetailsController');
const fetchbynameController = require('./routes/fetchbynameController');
const overviewcontroller = require('./routes/overviewcontroller');
const examnameController = require('./routes/examnameController');
const namesController=require('./routes/namesController')
const fetch2Controller = require('./routes/fetch2Controller')
const updateStatusController=require('./routes/updateStatusController')
const completedetailsbyname=require('./routes/completedetailsbyname')
const addexamController=require('./routes/addexamController')
const updatelistingdetails=require('./routes/updatelistingdetails')
const updatedOverview = require('./routes/updateoverview')
const overviewsubpage = require('./routes/subpageoverview')
const genupdate=require('./routes/collegeroutes/genupdate')
const FetchMapping=require('./routes/collegeroutes/FetchMapping')
const FetchingLocation=require('./routes/collegeroutes/FetchingLocation')
const coloverview=require('./routes/collegeroutes/coloverview')
const BothDetails=require('./routes/collegeroutes/BothDetails')
const updatecolstatus = require('./routes/collegeroutes/UpdateStatusCol')
const AllCollegeDetailsByName=require('./routes/collegeroutes/AllCollegeDetailsByName')
const UpdateColGen=require('./routes/collegeroutes/UpdateColGen')
const UpdateCollegeOverview=require("./routes/collegeroutes/UpdadeColOver")
const FetchColoverDetails=require('./routes/collegeroutes/FetchColoverDetails')

// Institute Routes
const AllInstituteDetailsByName=require('./routes/InstitutesRoutes/AllInstituteDetailsByName')
const insBothDetails=require('./routes/InstitutesRoutes/BothDetails')
const insgenupdate=require("./routes/InstitutesRoutes/genupdate")
const insoverview=require('./routes/InstitutesRoutes/insoveriew')
const UpdateInsGen=require('./routes/InstitutesRoutes/UpdateInsGen')
const UpdateInsOver=require('./routes/InstitutesRoutes/UpdateInsOver')
const UpdateStatusIns=require('./routes/InstitutesRoutes/UpdateStatusIns')

// Hospital Routes
const hsdetail=require('./routes/HospitalRoutes/HsGenpost')
const hsoverdetail=require('./routes/HospitalRoutes/HsOverPost')
const HsBothDetails=require('./routes/HospitalRoutes/HsBothDetails')
const HsDetailsByName=require('./routes/HospitalRoutes/HsDetailsByName')
const UpdateHsGen=require('./routes/HospitalRoutes/UpdateHsGen')
const UpdateHsOver=require('./routes/HospitalRoutes/UpdateHsOver')
const UpdateHsStatus=require('./routes/HospitalRoutes/UpdateHsStatus')

// Nugget Routes
const AddMediData=require('./routes/MediListing/AddMediData')
const FetchData=require('./routes/MediListing/FetchData')

// Product Article Routes
const AddArticleRoute=require('./routes/ProductArticle/AddArticleRoute')
const FetchArticleBYName=require('./routes/ProductArticle/FetchArticleByName')
const updatearticlestatus=require('./routes/ProductArticle/UpdateArticleStatus')
const UpdateArticle=require('./routes/ProductArticle/UpdateArticle')
const FetchById= require('./routes/ProductArticle/FetchById')

// University Routes
const ungenpost = require('./routes/universityroutes/ungenpost')
const univerviewpost=require('./routes/universityroutes/unoverviewpost')
const FetchAll=require('./routes/universityroutes/FetchAll')
const UnUpdateStatus=require('./routes/universityroutes/UnUpdateStatus')

// News Routes
const Addnewsroute=require("./routes/News/Addnewsroute")
const FetchNewsbyId=require('./routes/News/FetchNewsbyId')
const FetchAllNews=require('./routes/News/FetchAllNews')
const UpdateNewsStatus=require('./routes/News/UpdateNewsStatus')
const UpdateNews=require("./routes/News/UpdateNews")

// Course Routes
const addcourseroute=require('./routes/courseroutes/addcourseroute')
const getallcourses=require('./routes/courseroutes/getallcourses')
const fetchcoursebyid=require('./routes/courseroutes/fetchcoursebyid')
const UpdateCourse=require('./routes/courseroutes/updatecourse')
const updatecoursestatus=require('./routes/courseroutes/updatecoursestatus')
const fetchbylevel=require('./routes/courseroutes/fetchbylevel')


const dbconnect = require('./mongodb');


app.use(cors());
app.use(express.json());
// app.use('/files', express.static(__dirname + '/../files'));

async function startServer() {
    await dbconnect();

    app.listen(Port, () => {
        console.log("Server is running on port 4000");
    });
}

startServer();

app.get('/', (req, res) => {
    res.send("Welcome to the app");
});

app.use('/api', detailsController);
app.use('/api', fetchdetailsController);
app.use('/api', fetchbynameController);
app.use('/api', overviewcontroller);
app.use('/api', examnameController);
app.use('/api', namesController)
app.use('/api', fetch2Controller)
app.use('/api',updateStatusController)
app.use('/api',completedetailsbyname)
app.use('/api',addexamController)
app.use('/api',updatelistingdetails)
app.use('/api',updatedOverview)
app.use('/api',overviewsubpage)
app.use('/api',genupdate)
app.use('/api',FetchMapping)
app.use('/api',FetchingLocation)
app.use('/api',coloverview)
app.use('/api',BothDetails)
app.use('/api',updatecolstatus)
app.use('/api',AllCollegeDetailsByName)
app.use('/api',UpdateColGen)
app.use('/api',UpdateCollegeOverview)
app.use('/api',AllInstituteDetailsByName)
app.use('/api',insBothDetails)
app.use('/api',insgenupdate)
app.use('/api',insoverview)
app.use('/api',UpdateInsGen)
app.use('/api',UpdateInsOver)
app.use('/api',UpdateStatusIns)
app.use('/api',hsdetail)
app.use('/api',hsoverdetail)
app.use('/api',HsBothDetails)
app.use('/api',HsDetailsByName)
app.use('/api',UpdateHsGen)
app.use('/api',UpdateHsOver)
app.use('/api',UpdateHsStatus)
app.use('/api',AddMediData)
app.use('/api',FetchData)
app.use('/api',AddArticleRoute)
app.use('/api',FetchArticleBYName)
app.use('/api',updatearticlestatus)
app.use('/api',UpdateArticle)
app.use('/api',FetchById)
app.use('/api',ungenpost)
app.use('/api',univerviewpost)
app.use('/api',FetchAll)
app.use('/api',UnUpdateStatus)
app.use('/api',Addnewsroute)
app.use('/api',FetchNewsbyId)
app.use('/api',FetchAllNews)
app.use('/api',UpdateNewsStatus)
app.use('/api',UpdateNews)
app.use('/api',addcourseroute)
app.use('/api',getallcourses)
app.use('/api',fetchcoursebyid)
app.use('/api',UpdateCourse)
app.use('/api',updatecoursestatus)
app.use('/api',FetchColoverDetails)
app.use('/api',fetchbylevel)












