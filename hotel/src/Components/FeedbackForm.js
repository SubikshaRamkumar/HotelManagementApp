import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Cookies from "js-cookie";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { useNavigate } from "react-router-dom";

const FormContainer = styled("div")({
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid black",
  borderRadius: "4px",
  backgroundColor: "lightblue",
  boxShadow:'-10px -10px 30px darkblue '
});

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:  Cookies.get("email"),
    feedback: "",
    areas: "",
    star: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target)
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, star: newValue });
  };

  const [openDialog, setOpenDialog] = useState(false); 

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/feedback/addf", formData)
      .then((response) => {
        console.log("Feedback submitted successfully!");
        setOpenDialog(true); // Open the dialog on successful submission
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: Cookies.get("email"),
          experience: "",
          areas: "",
          star: 0,
        });
        // nav('/')
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
      });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="ww" style={{paddingTop:'100px',height:'100vh',backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSGXywXcPE5Sp27Q3RVkd2KcH2VgGNz48v1W1uZZ_ovsJP1DTYy-JQiWW2-JepQVqMoA&usqp=CAU)`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

    <FormContainer>
      <Typography variant="h5" gutterBottom>
        Feedback Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          />
        <TextField
        // label="Email"
        name="email"
        type="email"
        value={Cookies.get('email')}
        // onChange={handleChange}
        fullWidth
        margin="normal"
        required
        disabled // Set the disabled prop to make it disabled
        />
        <TextField
          label="Experience"
          placeholder="Share your experience with us!"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          required
          />
        <TextField
          label="Improvement"
          name="areas"
          placeholder="Do you find any areas of improvement?"
          value={formData.areas}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          />
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={formData.star} // Set the value from formData
            onChange={handleRatingChange} // Update the formData on rating change
          />
        </Box>
        <Button variant="contained" type="submit" color="primary">
          Submit Feedback
        </Button>
      </form>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Feedback Sent Successfully!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your feedback. We appreciate your time and insights.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button
            onClick={() => {
              // Navigate back to info.js page (replace '/info' with the correct path)
              window.location.href = "/";
            }}
            color="primary"
            autoFocus
            >
            Back to Info
          </Button>
        </DialogActions>
      </Dialog>


    </FormContainer>
            </div>
  );
};

export default FeedbackForm;