import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import axios from "axios";
import Fileinput from "@/components/ui/Fileinput";
import Radio from "@/components/ui/Radio";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

import { Editor } from "@tinymce/tinymce-react";

import cheerio from "cheerio";

import Icon from "@/components/ui/Icon";

import { useForm, useFieldArray } from "react-hook-form";
import Flatpickr from "react-flatpickr";
function Overview() {
  const [value, setValue] = useState("A");
  const [value1, setValue1] = useState("C");
  const [selectedFile, setSelectedFile] = useState(null);
  const [picker, setPicker] = useState(new Date());
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  //   const[examname, setExamName]=useState('');
  //   const[shortdesc, setShortDesc]=useState('')
  //   const[longdesc, setLongDesc]=useState('');
  //   const[authname, setAuthName]=useState('');
  //   const[breadt, setBreadt]=useState('');
  //   const[paget, setPaget]=useState('');
  //   const[metat, setMetat]=useState('');
  //   const[metadesc, setMetadesc]=useState('');
  //   const[metakey, setMetakey]=useState('');
  //   const[ogt, setOgt]=useState('');
  //   const[ogdesc, setOgdesc]=useState('');
  //   const[time, setTime]=useState('')
  //   const[file, setFile]=useState('');
  //   const[ogrobot, setOgrobot]=useState('');
  //   const[oggogle, setOggogle]=useState('');
  //   const[notifications, setNotifications] = useState([]);

  //   const extractTextFromHtml = (html) => {
  //     const $ = cheerio.load(html); // Load HTML content using cheerio
  //     // Extract text from each element
  //     return $('body').text();
  //   };

  //   // Handler function for editor change
  //   const handleEditorChange = (content) => {
  //     // Extract text from HTML content while preserving structure
  //     const plainText = extractTextFromHtml(content);
  //     // Set the plain text to the state variable
  //     setLongDesc(plainText);
  //   };

  const addNotification = () => {
    setNotifications([...notifications, { date: "", text: "", link: "" }]);
  };
  const deleteNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };
  const addSubPage = () => {
    onAddSubPage();
  };

  //   const fileinput = createRef();
  const submitoverview = async (e) => {
    e.preventDefault();

    //       try {
    //         const formData = new FormData();
    //         formData.append('file',file);
    //         formData.append('examName', examName);
    //         formData.append('shortdesc', shortdesc);
    //         formData.append('longdesc', longdesc);
    //         formData.append('authname', authname);
    //         formData.append('breadt', breadt);
    //         formData.append('paget', paget);
    //         formData.append('metat', metat);
    //         formData.append('metadesc', metadesc);
    //         formData.append('metakey', metakey);
    //         formData.append('ogt', ogt);
    //         formData.append('ogdesc', ogdesc);
    //         formData.append('ogrobot', ogrobot);
    //         formData.append('oggogle', oggogle);
    //         formData.append('time',time)
    //         formData.append('status',true)

    //         notifications.forEach((notification, index) => {
    //             formData.append(`notifications[${index}][date]`, notification.date);
    //             formData.append(`notifications[${index}][text]`, notification.text);
    //             formData.append(`notifications[${index}][link]`, notification.link);
    //             console.log('Notification:', notification);
    //           });

    //         const result = await axios.post( "http://localhost:4000/api/overviewdetails", formData)

    //         const overviewdata = await result.data();
    //         console.log('Success:', overviewdata);
    //         onSubmitt();

    //       } catch (error) {
    //         console.error('Error:', error);
    //       }
    //     }

    // const saveAsDraft = async (e) => {
    //   e.preventDefault();
    // };

    //       try {
    //         const formData = new FormData();
    //         formData.append('file', file);
    //         formData.append('examName', examName);
    //         formData.append('shortdesc', shortdesc);
    //         formData.append('longdesc', longdesc);
    //         formData.append('authname', authname);
    //         formData.append('breadt', breadt);
    //         formData.append('paget', paget);
    //         formData.append('metat', metat);
    //         formData.append('metadesc', metadesc);
    //         formData.append('metakey', metakey);
    //         formData.append('ogt', ogt);
    //         formData.append('ogdesc', ogdesc);
    //         formData.append('ogrobot', ogrobot);
    //         formData.append('oggogle', oggogle);
    //         formData.append('time', time);
    //         formData.append('status', false); // Set status to false for draft

    //         notifications.forEach((notification, index) => {
    //           formData.append(`notifications[${index}][date]`, notification.date);
    //           formData.append(`notifications[${index}][text]`, notification.text);
    //           formData.append(`notifications[${index}][link]`, notification.link);
    //         });

    //         const result = await axios.post("http://localhost:4000/api/overviewdetails", formData);
    //         alert("Overview Data Saved as Draft");

    //         const overviewdata = await result.data();
    //         console.log('Success:', overviewdata);
    //       } catch (error) {
    //         console.error('Error:', error);
    //       }
    //     };

    // const extractTextFromHtml = (html) => {
    //   const $ = cheerio.load(html); // Load HTML content using cheerio
    //   // Extract text from each element
    //   return $('body').text();
    // };

    // // Handler function for editor change
    // const handleEditorChange = (content) => {
    //   // Extract text from HTML content while preserving structure
    //   const plainText = extractTextFromHtml(content);
    //   // Set the plain text to the state variable
    //   setLongDesc(plainText);
    // };

    //   //form repeater
  };
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        test: [{ firstName: "Bill", lastName: "Luo", phone: "123456" }],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const index = 1;

  return (
    <div>
      <form className="space-y-4" onSubmit={submitoverview}>
        <p htmlFor="Input" className="mb-4">
          Exam Name :<span style={{ marginLeft: "50px" }}>examname</span>
        </p>

        <div style={{ width: "100%" }}>
          <label htmlFor="Input" className="block capitalize form-label  ">
            Short description<span style={{ color: "red" }}>*</span>
          </label>
          <Textinput
            type="text"
            placeholder=""
            value=""
            onChange={(e) => setShortDesc(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="input-area relative">
            <label htmlFor="Input" className="form-label">
              Long Description<span style={{ color: "red" }}>*</span>
            </label>

            <Editor
              apiKey="kf062o0jcq27qmkwkgj36iqry9987s9bbb12au6nrwo8eszd"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker markdown",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
              initialValue="Welcome to TinyMCE!"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap" style={{ gap: "1rem" }}>
          <div style={{ width: "38rem" }}>
            <label htmlFor="Input" className="block capitalize form-label  ">
              Author Name<span style={{ color: "red" }}>*</span>
            </label>

            <Textinput
              type="text"
              placeholder=""
              value=""
              // onChange={(e)=>setAuthName(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Modal
              title="Add Latest Notification"
              label="Add Notification"
              labelClass="btn-outline-success"
              uncontrol
              className="max-w-5xl"
            >
              <div className="flex justify-end">
                <Button
                  text="Add more"
                  icon="heroicons-outline:plus"
                  className="btn-light"
                  onClick={() => append()}
                />
              </div>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                {fields.map((item, index) => (
                  <div
                    className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"
                    key={index}
                  >
                    <div>
                      <label
                        // htmlFor={`notification-${index}`}
                        // id={`date-notification-${index}`}
                        className="block capitalize form-label  "
                      >
                        Date<span style={{ color: "red" }}>*</span>
                      </label>
                      <Flatpickr
                        className="form-control py-2"
                        onChange={(date) => setPicker(date)}
                        value={picker}
                        // onChange={(e) => {const updatedNotifications = [...notifications];
                        //                                  updatedNotifications[index] = {...notification, date:e.target.value};  setNotifications(updatedNotifications); }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="ValidState"
                        className="block capitalize form-label  "
                      >
                        Notification Text<span style={{ color: "red" }}>*</span>
                      </label>
                      <Textinput
                        label=""
                        type="text"
                        // id={`name2${index}`}
                        placeholder=""
                        register={register}
                        // name={`test[${index}].notificationText`}
                      />
                    </div>

                    <div className="flex justify-between items-end space-x-5">
                      <div className="flex-1">
                        <label
                          htmlFor="ValidState"
                          className="block capitalize form-label  "
                        >
                          Notification Link
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <Textinput
                          type="text"
                          // id={`name3${index}`}
                          placeholder=""
                          register={register}
                          // name={`test[${index}].notificationLink`}
                          // value={notification.link}
                          // onChange={(e) => {const updatedNotifications = [...notifications];
                          //                                  updatedNotifications[index] = {...notification, link:e.target.value};  setNotifications(updatedNotifications); }}
                        />
                      </div>
                      <div className="flex-none relative">
                        <button
                          onClick={() => remove(index)}
                          type="button"
                          className="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                        >
                          <Icon icon="heroicons-outline:trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="ltr:text-right rtl:text-left">
                  <Button text="Submit" className="btn-dark" />
                </div>
              </form>
            </Modal>
          </div>
        </div>

        <div className="mt-6">
          <div className="md:flex justify-between items-center mb-4 ml-4">
            <h5 className="font-light text-blue-500">SEO Tags</h5>
          </div>

          <div className="flex flex-wrap" style={{ gap: "1rem" }}>
            <div style={{ width: "38rem" }}>
              <label
                htmlFor="largeInput"
                className="block capitalize form-label  "
              >
                Breadcrum Title<span style={{ color: "red" }}>*</span>
              </label>
              <Textinput
                type="text"
                placeholder=""
                value=""
                onChange={(e) => setBreadt(e.target.value)}
                required
              />
            </div>
            <div style={{ width: "38rem" }}>
              <label
                htmlFor="largeInput"
                className="block capitalize form-label  "
              >
                Page Title<span style={{ color: "red" }}>*</span>
              </label>
              <Textinput
                type="text"
                placeholder=""
                value=""
                onChange={(e) => setPaget(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap" style={{ gap: "1rem" }}>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Meta Title<span style={{ color: "red" }}>*</span>
            </label>
            <Textinput
              type="text"
              placeholder=""
              value=""
              onChange={(e) => setMetat(e.target.value)}
              required
            />
          </div>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Meta Description
            </label>
            <Textinput
              type="text"
              placeholder=""
              value=""
              onChange={(e) => setMetadesc(e.target.value)}
            />
          </div>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              Meta Keyword
            </label>
            <Textinput
              type="text"
              placeholder=""
              value=""
              onChange={(e) => setMetakey(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-4" style={{ gap: "1rem" }}>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              OG: Title
            </label>
            <Textinput
              type="text"
              placeholder=""
              value="{ogt}"
              onChange={(e) => setOgt(e.target.value)}
            />
          </div>
          <div style={{ width: "25rem" }}>
            <label
              htmlFor="largeInput"
              className="block capitalize form-label  "
            >
              OG: Description
            </label>
            <Textinput
              type="text"
              placeholder=""
              value="{ogdesc}"
              onChange={(e) => setOgdesc(e.target.value)}
            />
          </div>

          <div style={{ width: "25rem" }}>
            <label
              htmlFor="exampleFormControlFile1"
              className="block capitalize form-label  "
            >
              OG: Image
            </label>
            <Fileinput
              selectedFile={selectedFile}
              id="exampleFormControlFile12"
              accept=".jpg, .jpeg, .png"
              // ref={fileinput}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4  xl:gap-24">
          <div
            className="flex flex-wrap space-x-10"
            style={{ marginLeft: "-2.3rem" }}
          >
            <label
              htmlFor="status"
              className="block capitalize form-label"
              style={{ marginLeft: "2.5rem" }}
            >
              OG: Robots
            </label>
            <Radio
              label="Follow"
              htmlFor="NationalExam"
              id="NationalExam"
              name="case1"
              value="Follow"
              onChange={(e) => setOgrobot(e.target.value)}
            />
            <Radio
              label="NO follow"
              htmlFor="StateExam"
              id="StateExam"
              name="examType"
              value="No Follow"
              onChange={(e) => setOgrobot(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap space-x-10 -ml-9  xl:mr-40">
            <label
              htmlFor="status"
              className="block capitalize form-label"
              style={{ marginLeft: "2.5rem" }}
            >
              OG: googlebot
            </label>
            <Radio
              label="Follow"
              htmlFor="NationalExam"
              id="NationalExam"
              name="case2"
              value="Follow"
              onChange={(e) => setOggogle(e.target.value)}
            />
            <Radio
              label="NO follow"
              htmlFor="StateExam"
              id="StateExam"
              name="examType"
              value="No Follow"
              onChange={(e) => setOggogle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-6" style={{ gap: "1rem" }}>
          <div className="">
            <Button
              text="Save as Draft"
              className="btn-light"
              type="button"
              // onClick={saveAsDraft}
            />
          </div>
          <div className="">
            <Button
              text="Make Exam Live"
              className="btn-success"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Overview;
