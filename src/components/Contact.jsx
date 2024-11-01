import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/kshitij-chauhan-6861a4247",
      label: "LinkedIn"
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/kshitijchauhann",
      label: "GitHub"
    },
    {
      icon: <EmailIcon />,
      url: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: 2, sm: 4 },
        marginLeft: { xs: '10vw', sm: '20vw' },
        marginRight: { xs: '5vw', sm: '10vw' }
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '2.5rem' },
          mb: 2
        }}
      >
        Get In Touch
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Let's Connect
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Feel free to reach out for collaborations or just a friendly hello!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            {socialLinks.map((social, index) => (
              <IconButton 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              bgcolor: '#f5f5f5',
              p: 3,
              borderRadius: 2,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <TextField
              required
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <Button 
              type="submit"
              variant="contained"
              sx={{ 
                mt: 2,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
