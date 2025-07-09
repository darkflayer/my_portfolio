import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts (optional - uses default fonts if not available)
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfA.ttf', fontWeight: 'normal' },
    { src: 'https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfB.ttf', fontWeight: 'bold' },
  ]
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
    borderBottom: '3px solid #F59E0B',
    paddingBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#F59E0B',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: 10,
    color: '#6b7280',
    gap: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    borderBottom: '2px solid #F59E0B',
    paddingBottom: 4,
    marginBottom: 12,
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  position: {
    fontSize: 11,
    color: '#F59E0B',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    color: '#6b7280',
  },
  description: {
    fontSize: 10,
    color: '#4b5563',
    marginTop: 6,
    lineHeight: 1.4,
  },
  projectItem: {
    marginBottom: 16,
  },
  projectHeader: {
    marginBottom: 6,
  },
  projectName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  techStack: {
    fontSize: 10,
    color: '#F59E0B',
    fontWeight: 'bold',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  skillCategory: {
    width: '48%',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 4,
    borderLeft: '4px solid #F59E0B',
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
  },
  skillList: {
    fontSize: 9,
    color: '#4b5563',
  },
  skillItem: {
    marginBottom: 2,
  },
  educationItem: {
    marginBottom: 16,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  degree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  university: {
    fontSize: 11,
    color: '#F59E0B',
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 11,
    color: '#4b5563',
    lineHeight: 1.5,
    marginBottom: 20,
  },
  certifications: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.4,
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>HEMANT SINGH</Text>
        <Text style={styles.title}>Full Stack Software Developer</Text>
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text>📧 rautanhemu@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>📱 +91 7017862900</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>📍 Haridwar, Uttarakhand, India</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>🔗 linkedin.com/in/hemant-singh-dev</Text>
          </View>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.summary}>
          Passionate Full Stack Developer with expertise in modern web technologies and a strong foundation in computer science. 
          Experienced in building scalable applications using React, Node.js, and cloud technologies. 
          Committed to writing clean, maintainable code and staying updated with industry best practices.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        
        <View style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <View>
              <Text style={styles.company}>Farmicon</Text>
              <Text style={styles.position}>Software Development Intern</Text>
            </View>
            <Text style={styles.date}>June 2024 - August 2024</Text>
          </View>
          <Text style={styles.description}>
            • Developed and maintained web applications using React.js and Node.js{'\n'}
            • Collaborated with cross-functional teams to deliver high-quality software solutions{'\n'}
            • Implemented responsive design principles and ensured cross-browser compatibility{'\n'}
            • Participated in code reviews and contributed to team knowledge sharing
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <View>
              <Text style={styles.company}>Creomind Innovations</Text>
              <Text style={styles.position}>Frontend Developer Intern</Text>
            </View>
            <Text style={styles.date}>January 2024 - May 2024</Text>
          </View>
          <Text style={styles.description}>
            • Built user-friendly interfaces using React.js and modern CSS frameworks{'\n'}
            • Optimized application performance and improved user experience{'\n'}
            • Worked with REST APIs and integrated third-party services{'\n'}
            • Assisted in testing and debugging of frontend applications
          </Text>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        
        <View style={styles.projectItem}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>Flip-Shop E-Commerce Platform</Text>
            <Text style={styles.techStack}>React.js • Node.js • MongoDB • Express.js</Text>
          </View>
          <Text style={styles.description}>
            • Developed a full-stack e-commerce platform with user authentication, product management, and payment integration{'\n'}
            • Implemented responsive design and optimized for mobile devices{'\n'}
            • Integrated payment gateway and order management system{'\n'}
            • Deployed on cloud platform with CI/CD pipeline
          </Text>
        </View>

        <View style={styles.projectItem}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>Abhaya News Portal</Text>
            <Text style={styles.techStack}>React.js • Node.js • MySQL • REST API</Text>
          </View>
          <Text style={styles.description}>
            • Built a news aggregation platform with real-time updates and user preferences{'\n'}
            • Implemented search functionality and category filtering{'\n'}
            • Created admin panel for content management{'\n'}
            • Optimized database queries for better performance
          </Text>
        </View>

        <View style={styles.projectItem}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>Real-Time Analytics Dashboard</Text>
            <Text style={styles.techStack}>React.js • Node.js • Socket.io • Chart.js</Text>
          </View>
          <Text style={styles.description}>
            • Developed a real-time data visualization dashboard with live updates{'\n'}
            • Implemented WebSocket connections for real-time data streaming{'\n'}
            • Created interactive charts and graphs for data analysis{'\n'}
            • Built responsive design for various screen sizes
          </Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.skillsGrid}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Frontend Development</Text>
            <View style={styles.skillList}>
              <Text style={styles.skillItem}>• React.js & React Native</Text>
              <Text style={styles.skillItem}>• JavaScript (ES6+) & TypeScript</Text>
              <Text style={styles.skillItem}>• HTML5 & CSS3</Text>
              <Text style={styles.skillItem}>• Tailwind CSS & Bootstrap</Text>
              <Text style={styles.skillItem}>• Redux & Context API</Text>
            </View>
          </View>
          
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Backend Development</Text>
            <View style={styles.skillList}>
              <Text style={styles.skillItem}>• Node.js & Express.js</Text>
              <Text style={styles.skillItem}>• Python & Django</Text>
              <Text style={styles.skillItem}>• Java & Spring Boot</Text>
              <Text style={styles.skillItem}>• RESTful APIs</Text>
              <Text style={styles.skillItem}>• GraphQL</Text>
            </View>
          </View>
          
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Database & Cloud</Text>
            <View style={styles.skillList}>
              <Text style={styles.skillItem}>• MongoDB & MySQL</Text>
              <Text style={styles.skillItem}>• PostgreSQL & Redis</Text>
              <Text style={styles.skillItem}>• AWS & Google Cloud</Text>
              <Text style={styles.skillItem}>• Docker & Kubernetes</Text>
              <Text style={styles.skillItem}>• Firebase</Text>
            </View>
          </View>
          
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Tools & Technologies</Text>
            <View style={styles.skillList}>
              <Text style={styles.skillItem}>• Git & GitHub</Text>
              <Text style={styles.skillItem}>• VS Code & IntelliJ</Text>
              <Text style={styles.skillItem}>• Postman & Insomnia</Text>
              <Text style={styles.skillItem}>• Jest & Testing Library</Text>
              <Text style={styles.skillItem}>• Webpack & Vite</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.educationItem}>
          <View style={styles.educationHeader}>
            <View>
              <Text style={styles.degree}>Bachelor of Technology in Computer Science Engineering</Text>
              <Text style={styles.university}>University Name</Text>
            </View>
            <Text style={styles.date}>Expected 2025</Text>
          </View>
          <Text style={styles.description}>
            • Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Software Engineering{'\n'}
            • GPA: 8.5/10{'\n'}
            • Active member of coding clubs and technical societies
          </Text>
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CERTIFICATIONS & ACHIEVEMENTS</Text>
        <Text style={styles.certifications}>
          • AWS Certified Cloud Practitioner{'\n'}
          • MongoDB Database Administrator{'\n'}
          • Google Cloud Platform Fundamentals{'\n'}
          • Winner of University Hackathon 2024{'\n'}
          • Active contributor to open-source projects on GitHub
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF; 