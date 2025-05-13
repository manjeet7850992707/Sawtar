import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import mockupImage from '../assets/img/banner.png';
import {
  FaLightbulb,       // For Expert Advice
  FaSlidersH,        // For Flexible Options
  FaHeadset,         // For 24/7 Support
  FaUserShield       // For Trusted Experts
} from 'react-icons/fa';

const ConsultationPage = () => {
  // Animation variants for the cards
  const zoomAnimation = {
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  // Card data with icons
  const featureCards = [
    {
      title: "Expert Advice",
      description: "Get personalized plans.",
      icon: <FaLightbulb size={24} color="#0072ff" />
    },
    {
      title: "Flexible Options",
      description: "Plans that fit your needs.",
      icon: <FaSlidersH size={24} color="#0072ff" />
    },
    {
      title: "24/7 Support",
      description: "Always here for you.",
      icon: <FaHeadset size={24} color="#0072ff" />
    },
    {
      title: "Trusted Experts",
      description: "Industry leading team.",
      icon: <FaUserShield size={24} color="#0072ff" />
    }
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Top Banner Section */}
      <Box
        sx={{
          minHeight: '80vh',
          backgroundColor: '#F3F4F6',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 3, md: 10 },
          py: 5,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Left Text */}
        <Box sx={{ 
          flex: 1, 
          textAlign: { xs: 'center', md: 'left' },
          zIndex: 2 
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Transform Your Dreams Into Reality
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Connect with our expert consultants and start your journey today!
          </Typography>
        </Box>

        {/* Right Mockup Image */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}>
          <img
            src={mockupImage}
            alt="Mockup"
            style={{ 
              width: '100%', 
              maxWidth: '600px',
              height: 'auto', 
              objectFit: 'contain' 
            }}
          />
        </Box>
      </Box>

      {/* Spacer between sections */}

      {/* Consultation Form Section */}
      <Box
        sx={{
          py: 10,
          px: { xs: 2, md: 10 },
          background: '#e0ae95',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: { xs: 4, md: 8 }
        }}
      >
        {/* Left Side - Cards in a responsive grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          width: '100%',
          maxWidth: { xs: '500px', md: '600px' }
        }}>
          {featureCards.map((card, index) => (
            <motion.div 
              key={index}
              {...zoomAnimation}
              style={{ height: '100%' }}
            >
              <Card sx={{ 
                p: 3, 
                boxShadow: 6, 
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  gap: 2
                }}>
                  <Box sx={{ 
                    backgroundColor: '#e6f2ff',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {card.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {card.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Right Side - Form */}
        <Box sx={{ 
          width: '100%',
          maxWidth: '500px',
          mt: { xs: 6, md: 0 }
        }}>
          <Card
            sx={{
              p: { xs: 3, md: 5 },
              boxShadow: 8,
              borderRadius: 4,
              textAlign: 'center',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
              Book a Free Consultation
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
                required
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ 
                  mt: 3,
                  py: 1.5,
                  fontSize: '1rem'
                }}
              >
                Submit
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultationPage;