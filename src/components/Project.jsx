import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PicOne from './Screenshot from 2024-11-01 23-35-42.png';
import PicTwo  from './Screenshot from 2024-11-01 23-42-02.png';

const Projects = () => {
  const projects = [
    {
      title: "Algorithm Visualizer",
      description: "App which let's you visualize sorting algorithms",
      image: PicTwo,
      github: "https://github.com/kshitijchauhann/algorithm_visualizer",
      live: "https://algorithm-visualizer-omega-taupe.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Chat App",
      description: "Anonymous chat app which let's you connect with new people",
      image: PicOne,
      github: "https://github.com/kshitijchauhann/chat_app",
      live: "https://chat-app-omega-flame.vercel.app/",
      tech: ["React", "Chakra UI", "Firebase"]
    },
    
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
        Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#f5f5f5',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.tech.map((tech, i) => (
                    <Typography
                      key={i}
                      variant="caption"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton href={project.github} target="_blank" size="small">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href={project.live} target="_blank" size="small">
                    <OpenInNewIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
