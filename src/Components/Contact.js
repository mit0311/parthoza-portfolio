import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    desc: "",
  });
  const contactFieldChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "ozaparth055@gmail.com"; // Replace with your email address
    const subject = "Message from Contact Form of portfolio";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPurposeOfMessage: ${formData.purpose}\nDescription:${formData.desc}`;
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const sendEmailHandler = () => {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        purpose: "",
        desc: "",
      });
    }, 3000);
  };
  return (
    <>

    <h1 style={{textAlign:"center",color:"white",fontSize:"20px",fontWeight:"bold"}}>Let's Connect</h1>
      <div className="contactform">
        <form>
          <div className="divTextField">
            <TextField
              label="Name"
              variant="outlined"
              onChange={(e) => {
                contactFieldChange(e);
              }}
              name="name"
              value={formData.name}
              className="
            textField"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Border color when focused
                  },
                  "& input": {
                    color: "white", // Input text color
                  },
                },
              }}
            />
          </div>
          <div className="divTextField">
            <TextField
              name="email"
              value={formData.email}
              className="
            textField"
              label="Email"
              onChange={(e) => {
                contactFieldChange(e);
              }}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Border color when focused
                  },
                  "& input": {
                    color: "white", // Input text color
                  },
                },
              }}
            />
          </div>
          <div className="divTextField">
            <TextField
              className="
            textField"
              name="purpose"
              value={formData.purpose}
              onChange={(e) => {
                contactFieldChange(e);
              }}
              label="Purpose To Connect"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Border color when focused
                  },
                  "& input": {
                    color: "white", // Input text color
                  },
                },
              }}
            />
          </div>
          <div className="divTextField">
            <TextField
              className="
            textField"
              onChange={(e) => {
                contactFieldChange(e);
              }}
              label="Detailed Description"
              variant="outlined"
              name="desc"
              value={formData.desc}
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color when hovered
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Border color when focused
                  },
                  "& textarea": {
                    color: "white", // Input text color
                  },
                },
              }}
            />
          </div>
          <div className="divTextField">
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={(e) => handleSubmit(e)}
            >
              Submit{" "}
              <EmailIcon sx={{ marginLeft: "5px", fontSize: "medium" }} />
            </Button>
          </div>
          {/* {emailLink && (
            <div>
              <p style={{ color: "white" }}>
                Click the Button below to send your message:
              </p>
              <Button
                variant="contained"
                onClick={sendEmailHandler}
                sx={{ textTransform: "none" }}
                style={{marginTop:"5px"}}
              >
                {" "}
                <a
                  href={emailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Send Email
                </a>
              </Button>
            </div>
          )} */}
        </form>
      </div>
    </>
  );
};

export default Contact;
