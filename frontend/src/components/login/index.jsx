import React from 'react';
import { TextField, Button, Typography, Link, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import loginimage from "../../assets/img/homepage.png"; // 👈 your imported image

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundImage: `url(${loginimage})`, // 👈 using the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        flexDirection: { xs: 'column', md: 'row' }, // responsive: column on mobile
      }}
    >
      {/* Left side - Heading and Description */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          color: '#fff',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 👈 darker overlay
          backdropFilter: 'blur(4px)',
        }}
      >
        <Box>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Welcome to Our Community
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Join us and explore endless opportunities.
            <br />
            Stay connected, stay updated.
          </Typography>
        </Box>
      </motion.div>

      {/* Right side - Login Card */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 400,
            p: { xs: 3, md: 4 },
            boxShadow: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 4,
          }}
        >
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Login
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom align="center">
              Access your account
            </Typography>

            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>

              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Link href="/signup" underline="hover">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Login;
