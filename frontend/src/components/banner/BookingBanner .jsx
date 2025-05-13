import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./BookingBanner.css";

const BookingBanner = () => {
  return (
    <div className="bg-gray-200 p-8">
    <div className="relative font-[Montserrat] w-full  max-w-6xl mx-auto overflow-hidden  ">  
      {/* Top Section - Text */}
      <div className="p-8 pb-8 pt-8 md:p-12 bg-white">
        <h2 className="text-[#D26C44] text-xl font-semibold mb-1 uppercase">
          Consultation Booking
        </h2>
        <h1 className="text-gray-900 text-3xl md:text-4xl font-extrabold mb-4">
          Book Your Live Consultation Today
        </h1>
        <p  className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed mb-6">
          Connect instantly with top interior designers through live video calls using Google Meet or Zoom — directly accessible from our web app. Ideal for users, customers, B2B, and B2C clients.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button variant="contained" size="small" sx={{ backgroundColor: '#D26C44' }}>
            Book Now
          </Button>
          <Button variant="outlined" size="small" sx={{ borderColor: '#D26C44', color: '#D26C44' }}>
            Learn More
          </Button>
        </div>
      </div>

      {/* Bottom Section - Icons */}
      <div className=" py-6 pb-40 ps-4 flex flex-wrap  gap-8 relative z-0">
        {[
          { icon: "https://img.icons8.com/color/48/google-meet.png", label: "Google Meet" },
          { icon: "https://img.icons8.com/color/48/zoom.png", label: "Zoom Video" },
          { icon: "https://img.icons8.com/fluency/48/design.png", label: "Design Chat" },
          { icon: "https://img.icons8.com/fluency/48/planner.png", label: "Schedule" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-xs text-gray-700 w-24">
            <img src={item.icon} alt={`icon-${i}`} className="mb-2 w-12 h-12" />
            <span className="text-center">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Floating Form - Right Positioned */}
      <div className="absolute right-6 top-70 transform -translate-y-1/2 bg-gradient-to-tr from-[#D26C44] via-[#e2895f] to-[#D26C44] w-full max-w-md p-8 md:p-10 rounded-lg shadow-lg text-white z-10">
        <h2 className="text-2xl font-bold mb-6">Schedule a Free Consultation</h2>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <TextField
              fullWidth
              label="First Name"
              variant="filled"
              size="small"
              sx={{ bgcolor: "#fff", borderRadius: 1 }}
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="filled"
              size="small"
              sx={{ bgcolor: "#fff", borderRadius: 1 }}
            />
          </div>
          <TextField
            label="Contact Email or Phone"
            variant="filled"
            size="small"
            fullWidth
            sx={{ bgcolor: "#fff", borderRadius: 1 }}
          />
          <TextField
            label="Your Message"
            variant="filled"
            size="small"
            multiline
            rows={3}
            fullWidth
            sx={{ bgcolor: "#fff", borderRadius: 1 }}
          />
        
          <Button variant="contained" fullWidth sx={{ backgroundColor: '#fff', color: '#D26C44', mt: 2 }}>
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BookingBanner;
