import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import AppDrawer from './components/Drawer.jsx';

const CodeContainer = styled(Box)(({ theme }) => ({
  background: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  overflowX: "auto",
  maxWidth: "90%",
  fontSize: "1rem",
  marginTop: theme.spacing(2),
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    padding: "8px",
    whiteSpace: "pre-wrap",
    maxWidth: "95%",
  },
}));

const BlueUnderline = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '4px',
  backgroundColor: theme.palette.primary.main,
  marginTop: theme.spacing(2),
}));

const App = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Box 
        sx={{
          bgcolor: '#20B2AA',
          width: '100vw',
          height: '10vh',
          position: 'fixed',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          px: 2, // Add horizontal padding
        }}
      >
    
        <AppDrawer />
      </Box>
      <Grid container sx={{ flexGrow: 1, marginTop: '10vh' }}>
        <Grid 
          item 
          xs={2} 
          sm={2} 
          sx={{ 
            height: '100vh', 
            width: { xs: '10vw', sm: '20vw' },
            position: 'fixed', 
            zIndex: 0, 
            left: 0, 
            bgcolor: '#BCC8B8',
            display: { xs: 'block', sm: 'block' }
          }} 
        />
        <Grid 
          item 
          xs={1} 
          sm={1} 
          sx={{ 
            height: '100vh', 
            width: { xs: '5vw', sm: '10vw' },
            position: 'fixed', 
            zIndex: 0, 
            right: 0, 
            bgcolor: '#FF6F61',
            display: { xs: 'block', sm: 'block' }
          }} 
        />
        <Grid item xs>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
              padding: { xs: 1, sm: 2 },
              marginLeft: { xs: '10vw', sm: '20vw' },
              marginRight: { xs: '5vw', sm: '10vw' }
            }}
          >
            {/* Heading Section */}
            <Box sx={{ mb: 4, width: '90%' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary',
                  mb: 1,
                  fontSize: { xs: '1rem', sm: '1.25rem' }
                }}
              >
                Hello, I'm
              </Typography>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', sm: '3.5rem' },
                  letterSpacing: '0.02em',
                  mb: 1,
                }}
              >
                KSHITIJ CHAUHNAN
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  letterSpacing: '0.02em'
                }}
              >
                WEB DEVELOPER
              </Typography>
              <BlueUnderline />
            </Box>

            <CodeContainer>
              <pre>
                {`class Developer {
  constructor() {
    this.name = "KSHITIJ CHAUHNAN";
    this.role = "WEB DEVELOPER";
    this.skills = ["HTML", "CSS", "JavaScript", "React"];
    this.experience = new Date().getFullYear() - 2003;
  }
}`}
              </pre>
            </CodeContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
