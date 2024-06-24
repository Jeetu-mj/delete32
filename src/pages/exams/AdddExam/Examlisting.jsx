import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import axios from "axios";
import Radio from "@/components/ui/Radio";
import Textinput from "@/components/ui/Textinput";
import Fileinput from "@/components/ui/Fileinput";

import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";

// Fixed Options Select

const Examlisting = ({ onSubmit, setExamName, data }) => {
  // const furits = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  // const style = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     fontSize: "14px",
  //   }),
  // };
  const styles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, color: "#626262", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
  };
  const { register } = useForm();
  const [name, setName] = useState("");
  const [examfullname, setExamFullname] = useState("");
  const [examtype, setExamType] = useState("");
  const [exammode, setExamMode] = useState("");
  const [examcase, setExamCase] = useState("");
  const [examcategory, setExamCategory] = useState([]);
  const [coursemapping, setCourseMapping] = useState([]);
  const [formlink, setFormLink] = useState("");
  const [officialwebsite, setOfficialWebsite] = useState("");
  const [applicationdate, setApplicationDate] = useState("");
  const [startenddate, setStartEndDate] = useState("");
  const [resultannounce, setResultAnnounce] = useState("");
  const [general, setGeneral] = useState("");
  const [female, setFemale] = useState("");
  const [sc, setSc] = useState("");
  const [pwd, setPwd] = useState("");
  const [others, setOthers] = useState("");
  const [file, setFile] = useState(null);
  const [formlinkError, setFormLinkError] = useState("");
  const [officialwebsiteError, setOfficialWebsiteError] = useState("");
  const [imgsize, setImgsize] = useState("");
  const [nri, setNri] = useState("");
  const imginput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(file);
      formData.append("name", name);
      console.log(name);
      formData.append("examfullname", examfullname);
      console.log(examfullname);
      formData.append("examtype", examtype);
      console.log(examtype);
      formData.append("exammode", exammode);
      console.log(exammode);
      formData.append("examcase", examcase);
      console.log(examcase);
      formData.append("examcategory", examcategory.join(","));
      console.log(examcategory);
      formData.append("coursemapping", coursemapping.join(","));
      console.log(coursemapping);
      formData.append("formlink", formlink);
      console.log(formlink);
      formData.append("officialwebsite", officialwebsite);
      console.log(officialwebsite);
      formData.append("applicationdate", applicationdate);
      console.log(applicationdate);
      formData.append("startenddate", startenddate);
      console.log(startenddate);
      formData.append("resultannounce", resultannounce);
      console.log(resultannounce);
      formData.append("general", general);
      console.log(general);
      formData.append("female", female);
      console.log(female);
      formData.append("sc", sc);
      console.log(sc);
      formData.append("pwd", pwd);
      console.log(pwd);
      formData.append("others", others);
      console.log(others);
      formData.append("nri", nri);
      console.log(nri);
      const currentDate = new Date();
      formData.append("added_on", currentDate);

      const data = Object.fromEntries(formData);
      console.log(data);
      setFormLinkError("");
      if (!formlink.startsWith("https")) {
        setFormLinkError('Invalid link format. Link must start with "https".');
        return;
      }

      setOfficialWebsiteError("");
      if (!officialwebsite.startsWith("https")) {
        setOfficialWebsiteError(
          'Invalid link format. Link must start with "https".'
        );
        return;
      }

      setImgsize("");
      if (file && file.size > 200 * 1024) {
        setImgsize("Size must be less than 200KB");
        imginput.current.value = null;
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/api/details",
        data
      );
      // setExamName(name);
      onSubmit();
      console.log();
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const [shortNames, setShortNames] = useState([]);

  // useEffect(() => {
  //   const fetchShortNames = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/api/getallnames"
  //       );
  //       setShortNames(response.data.shortNames);
  //     } catch (error) {
  //       console.error("Error fetching short names:", error);
  //     }
  //   };

  //   fetchShortNames();
  // }, []);

  // const optionsfir = [
  //   ...shortNames.map((name) => ({ value: name, label: name })),
  //   { value: "createYourOwn", label: "Create Your Own" },
  // ];

  const optionssec = [
    { value: "Paramedical", label: "Paramedical" },
    { value: "Medical", label: "Medical" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Dental", label: "Dental" },
    { value: "Science", label: "Science" },
    { value: "Veterinary", label: "Veterinary" },
    { value: "Ayurved", label: "Ayurveda" },
  ];
  const optionsscategory = [
    { value: "Paramedical", label: "Paramedical" },
    { value: "Medical", label: "Medical" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Dental", label: "Dental" },
    { value: "Science", label: "Science" },
    { value: "Veterinary", label: "Veterinary" },
    { value: "Ayurved", label: "Ayurveda" },
  ];

  // const [examDetails, setExamDetails] = useState({});

  // const fetchDetailsByName = async (selectedName) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/api/getnamedetails/${selectedName}`
  //     );
  //     if (response.data && response.data.length > 0) {
  //       setExamDetails(response.data[0]);
  //       console.log(response.data);
  //     } else {
  //       setExamDetails({});
  //     }
  //   } catch (error) {
  //     console.error("Error fetching details:", error);
  //   }
  // };

  // const handleChangeName = (selectedOption) => {
  //   // if (selectedOption) {
  //   //   setName(selectedOption.value);
  //   //   fetchDetailsByName(selectedOption.value);
  //   // } else {
  //   //   setExamDetails({});
  //   // }
  //   setExamName(e.target.value);
  // };

  // useEffect(() => {
  //   setExamFullname(examDetails.full_name || "");
  //   setExamType(examDetails.type || "");
  //   setExamMode(examDetails.mode || "");
  //   setExamCase(examDetails.exam_type || "");
  //   setExamCategory(examDetails.category || []);
  // }, [examDetails]);

  // const [mapcourses, setMapCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/api/getallcourses"
  //       );
  //       setMapCourses(response.data.courses || []);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  // const optionsmap = [
  //   ...mapcourses.map((courses) => ({ value: courses, label: courses })),
  // ];

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap" style={{ gap: "1rem" }}>
          <div className="space-y-3" style={{ width: "33rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Exam Short Name<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              name="name"
              id="name"
              // options={optionsfir}
              register={register}
              // value={
              //   { name } ||
              //   optionsfir.find(
              //     (selectedOption) => selectedOption.value === name
              //   )
              // }
              value={name}
              issearchable="true"
              placeholder="Select or enter exam short name"
              onChange={(e) => setName(e.target.value)}
            />
            {/* <Select
              className="react-select"
              classNamePrefix="select"
              defaultValue={furits[0]}
              options={furits}
              styles={style}
              id="hh"
            /> */}
          </div>
          <div className="flex flex-wrap flex-row space-x-10 -ml-9  -mt-6 xl:-mt-16 xl:mr-44 xl:mb-8">
            <label
              htmlFor="status"
              className="block capitalize form-label mt-4 ml-10 xl:mt-16 xl:ml-9"
            >
              Exam List Type<span style={{ color: "red" }}>*</span>
            </label>
            <div className="flex sm:flex-row gap-9">
              <Radio
                id="Entrance Exam"
                name="status"
                htmlFor="Entrance Exam"
                value="Entrance Exam"
                label="Entrance Exam"
                checked={examtype === "Entrance Exam"}
                onChange={() => setExamType("Entrance Exam")}
              />
              <Radio
                id="Recruitment Exam"
                name="status"
                htmlFor="Recruitment Exam"
                value="Recruitment Exam"
                label="Recruitment Exam"
                checked={examtype === "Recruitment Exam"}
                onChange={() => setExamType("Recruitment Exam")}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-6" style={{ gap: "1rem" }}>
          <div style={{ width: "50rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Exam Full Name<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              name="examfullname"
              id="examfullname"
              value={examfullname}
              onChange={(e) => setExamFullname(e.target.value)}
              placeholder="Enter exam full name"
              register={register}
              required
            />
          </div>

          <div className=" w-70 lg:w-96">
            <label
              htmlFor="exampleFormControlFile1"
              className="block capitalize form-label  "
            >
              Exam logo<span style={{ color: "red" }}>*</span>
            </label>

            <Fileinput
              id="exampleFormControlFile1"
              accept=".jpg, .jpeg, .png"
              minSize="150kb"
              ref={imginput}
              onChange={(e) => setFile(e.target.files[0])}
              required
              name="basic"
              selectedFile={file}
            />
            {imgsize && (
              <div className="error-message text-red-500 text-xs mt-1">
                {imgsize}
              </div>
            )}
          </div>
        </div>

        <div className="flex mt-6  flex-wrap">
          <div
            className="flex flex-wrap space-x-10 "
            style={{
              marginTop: "-4.5rem",
              marginLeft: "-2rem",
              marginBottom: "2rem",
            }}
          >
            <label
              htmlFor="status"
              className="block capitalize form-label"
              style={{ marginTop: "4.5rem", marginLeft: "2.3rem" }}
            >
              Exam Mode<span style={{ color: "red" }}>*</span>
            </label>
            <Radio
              label="Online"
              htmlFor="Online"
              id="Online"
              name="status"
              value="Online"
              onChange={(e) => setExamMode(e.target.value)}
              checked={exammode === "Online"}
            />
            <Radio
              label="Offline"
              htmlFor="Offline"
              id="Offline"
              name="status"
              value="Offline"
              onChange={(e) => setExamMode(e.target.value)}
              checked={exammode === "Offline"}
            />
            <Radio
              label="Online & Offline Both"
              htmlFor="OnlineAndOfflineBoth"
              id="OnlineAndOfflineBoth"
              name="status"
              value="Online and Offline Both"
              onChange={(e) => setExamMode(e.target.value)}
              checked={exammode === "Online and Offline Both"}
            />
          </div>
          <div className="flex flex-wrap space-x-10 -ml-9  -mt-6 xl:-mt-16 xl:-ml-4 xl:mb-8">
            <label
              htmlFor="status"
              className="block capitalize form-label mt-4 ml-10 xl:mt-16 xl:ml-9"
            >
              Exam Type<span style={{ color: "red" }}>*</span>
            </label>
            <Radio
              label="National Exam"
              htmlFor="NationalExam"
              id="NationalExam"
              name="status"
              value="National Exam"
              onChange={(e) => setExamCase(e.target.value)}
              checked={examcase === "National Exam"}
            />
            <Radio
              label="State Exam"
              htmlFor="StateExam"
              id="StateExam"
              name="status"
              value="State Exam"
              onChange={(e) => setExamCase(e.target.value)}
              checked={examcase === "State Exam"}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap" style={{ gap: "1rem" }}>
          <div style={{ width: "25rem" }}>
            <label htmlFor="select" className="block capitalize form-label  ">
              Exam Category<span style={{ color: "red" }}>*</span>
            </label>

            <Select
              // isClearable={false}
              // styles={styles}
              // className="react-select"
              // classNamePrefix="select"
              // id="second-select"
              // name="select"
              // isMulti
              // options={optionssec}
              // value={
              //   typeof examcategory === "string"
              //     ? examcategory
              //         .split(",")
              //         .map((index) => parseInt(index, 10))
              //         .filter(
              //           (index) => index >= 1 && index <= optionssec.length
              //         )
              //         .map((index) => optionssec[index - 1])
              //     : optionssec.filter(
              //         (option) => examDetails.category == option.value
              //       )
              // }
              // onChange={(selectedOptions) =>
              //   setExamCategory(selectedOptions.map((option) => option.value))
              //}

              // value={
              //   typeof examDetails.category === "string"
              //     ? examDetails.category
              //         .split(",")
              //         .map((index) => parseInt(index, 10))
              //         .filter(
              //           (index) => index >= 1 && index <= optionssec.length
              //         )
              //         .map((index) => optionssec[index - 1])
              //     : optionssec.filter(
              //         (option) => examDetails.category == option.value
              //       )
              // }
              isClearable={false}
              id="first-select"
              styles={styles}
              isMulti
              name="select"
              options={optionssec}
              className="react-select"
              classNamePrefix="select"
              onChange={(selectedOptions) =>
                setCourseMapping(selectedOptions.map((option) => option.value))
              }
            />
          </div>

          <div style={{ width: "25rem" }}>
            <label htmlFor="select" className="block capitalize form-label  ">
              Course Mapping
            </label>

            <Select
              isClearable={false}
              id="second-select"
              styles={styles}
              isMulti
              name="select"
              options={optionsscategory}
              className="react-select"
              classNamePrefix="select"
              onChange={(selectedOptions) =>
                setExamCategory(selectedOptions.map((option) => option.value))
              }
              // isClearable={false}
              // styles={styles}
              // name="colors"
              // className="react-select"
              // classNamePrefix="select"
              // id="mul_1"
              // options={optionsmap}
              // isMulti
              // closeMenuOnSelect={false}
              // placeholder="Select options..."
              // value={optionsmap.find(
              //   (selectedOption) => selectedOption.value === coursemapping
              // )}
              // onChange={(selectedOptions) =>
              //   setCourseMapping(selectedOptions.map((option) => option.value))
              // }
            />
          </div>

          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Application Form Link
            </label>
            <Textinput
              type="text"
              name="Application Form Link"
              id="Application Form Link"
              placeholder=""
              value={formlink}
              register={register}
              onChange={(e) => setFormLink(e.target.value)}
              required
            />
            {formlinkError && (
              <div className="error-message text-red-500 text-xs mt-1">
                {formlinkError}
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap" style={{ gap: "1rem" }}>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Official Website<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              name="Official Website"
              id="Official Website"
              placeholder=""
              value={officialwebsite}
              register={register}
              onChange={(e) => setOfficialWebsite(e.target.value)}
              required
            />
            {officialwebsiteError && (
              <div className="error-message text-red-500 text-xs mt-1">
                {officialwebsiteError}
              </div>
            )}
          </div>

          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Application Date<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              name="Application Date"
              id="Application Date"
              placeholder="Yet to be announce"
              register={register}
              value={applicationdate}
              onChange={(e) => setApplicationDate(e.target.value)}
              required
            />
          </div>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Start & End Date<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              name="startanddate"
              id="tartanddate"
              placeholder="Yet to be announce"
              register={register}
              value={startenddate}
              onChange={(e) => setStartEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap" style={{ gap: "1rem" }}>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Result Announce<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              name="Result Announce"
              id="Result Announce"
              placeholder="Yet to be announce"
              register={register}
              value={resultannounce}
              onChange={(e) => setResultAnnounce(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap" style={{ gap: "1rem" }}>
          <label
            htmlFor="largeInput"
            className="block capitalize form-label"
            style={{ marginBottom: "-0.7rem" }}
          >
            Exam Fee<span style={{ color: "red" }}>*</span>
          </label>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              General
            </label>
            <Textinput
              type="text"
              name="general"
              id="general"
              register={register}
              placeholder=""
              value={general}
              onChange={(e) => setGeneral(e.target.value)}
            />
          </div>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Women
            </label>
            <Textinput
              type="text"
              name="female"
              id="female"
              placeholder=""
              register={register}
              value={female}
              onChange={(e) => setFemale(e.target.value)}
            />
          </div>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              SC
            </label>
            <Textinput
              type="text"
              name="SC"
              id="SC"
              placeholder=""
              register={register}
              value={sc}
              onChange={(e) => setSc(e.target.value)}
            />
          </div>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              PWD
            </label>
            <Textinput
              type="text"
              name="PWD"
              id="PWD"
              placeholder=""
              register={register}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Other
            </label>
            <Textinput
              type="text"
              name="others"
              id="others"
              placeholder=""
              register={register}
              value={others}
              onChange={(e) => setOthers(e.target.value)}
            />
          </div>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Notes
            </label>
            {/* <Textinput
              type="text"
                name="others"
              id="others"
              placeholder=""
              register={register}
              value={others}
              onChange={(e) => setOthers(e.target.value)}
            /> */}
          </div>
          <div style={{ width: "10rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Foreigner
            </label>
            <Textinput
              type="text"
              name="Foreigner"
              id="Foreigner"
              placeholder=""
              register={register}
              value={nri}
              onChange={(e) => setNri(e.target.value)}
            />
          </div>
        </div>
        <Button text="Go to Overview" className="btn-success" type="submit" />
      </form>
    </div>
  );
};

export default Examlisting;
