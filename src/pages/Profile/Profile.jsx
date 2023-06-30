import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Profile.css";
import profileImage from "../../assets/Profile-image.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showTitle, setShowTitle] = useState(true);

  const navigate = useNavigate();

  const handleEdit = () => {
    // Replace "/Profil" with the actual path of your profile page
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setName("");
    setLastName("");
    setPhone("");
    setPassword("");

    try {
      await toast.promise(saveProfile(), {
        pending: "Saving profile...",
        success: "Profile saved successfully!",
        error: "Failed to save profile.",
      });
    } catch (error) {
      console.log("Failed to save profile:", error);
    }
  };

  const saveProfile = () => {
    // Simulating an asynchronous operation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a successful save
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="title-container">
        {showTitle && <h1 className="fade-out">Welcome back</h1>}
        {!showTitle && <h1 className="fade-in">Check your profile</h1>}
      </div>
      <div className="profile-container">
        <div className="main-content">
          <div className="sidebar">
            <div className="sidebar-content">
              <h2>User Profile</h2>
              <div className="sidebar-profile">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="sidebar-profile-img"
                />
                <div className="sidebar-profile-info">
                  <p>
                    <strong>Name:</strong> {name}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {lastName}
                  </p>
                  <p>
                    <strong>Phone:</strong> {phone}
                  </p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                eros at erat suscipit condimentum. Integer consequat ex non
                turpis iaculis dapibus.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="edit-profile-form">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="form-input"
              />

              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                /* value={email}  */ disabled
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-input"
              />
            </div>
            <div className="button-group">
              <button type="submit" className="form-button save-button">
                Return
              </button>
              <button
                type="submit"
                className="form-button return-button"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
