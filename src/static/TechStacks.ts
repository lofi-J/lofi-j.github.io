const TechStack = {
  frontend: {
    fullName: 'Frontend',
    skills: [
      { name: 'HTML5', svg: 'html', color: '#E34F26' },
      { name: 'JavaScript', svg: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', svg: 'typescript', color: '#3178C6' },
      { name: 'React.js', svg: 'react', color: '#61DAFB' },
      { name: 'Next.js', svg: 'next', color: '#000' },
      { name: 'Recoil', svg: 'recoil', color: '#3578E5' },
      { name: 'Redux', svg: 'redux', color: '#764ABC' },
    ],
  },
  styles: {
    fullName: 'Styles',
    skills: [
      { name: 'CSS3', svg: 'css', color: '#1572B6' },
      { name: 'CSS Modules', svg: 'cssmodule', color: '#fff' },
      { name: 'styled-components', svg: 'styledcomponents', color: '#DB7093' },
      { name: 'Emotion', svg: 'emotion', color: '' },
    ],
  },
  deployment: {
    fullName: 'Deployment',
    skills: [
      { name: 'Railway', svg: 'railway', color: '#0B0D0E' },
      { name: 'Netlify', svg: 'netlify', color: '#00C7B7' },
      { name: 'Github Pages', svg: 'githubpages', color: '#fff' },
    ],
  },
  devOps: {
    fullName: 'DevOps',
    skills: [
      { name: 'Git', svg: 'git', color: '#F05032' },
      { name: 'Github', svg: 'github', color: '#181717' },
      { name: 'GitLab', svg: 'gitlab', color: '#FC6D26' },
    ],
  },
} as const;

export default TechStack;
