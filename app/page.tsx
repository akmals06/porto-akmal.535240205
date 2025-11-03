'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Home() {
  const skills = [
    { name: 'Kali Linux', icon: 'https://img.icons8.com/color/96/kali-linux.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
    { name: 'Nmap', icon: 'https://img.icons8.com/color/96/network.png' },
    { name: 'Burpsuite', icon: 'https://img.icons8.com/color/96/security-checked.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/96/c-plus-plus-logo.png' },
    { name: 'C#', icon: 'https://img.icons8.com/color/96/c-sharp-logo.png' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/96/html-5.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/96/css3.png' },
    { name: 'MATLAB', icon: 'https://img.icons8.com/fluency/96/matlab.png' },
    { name: 'Oracle', icon: 'https://img.icons8.com/color/96/oracle-logo.png' }
  ];

  return (
    <div className="page">
      <div className="container">
        
        {/* Header */}
        <div className="header">
          <div className="info-section">
            <h1>Akmal Fadhlul Rohman</h1>
            <p className="title">Cybersecurity Specialist</p>
            <div className="meta">
              <span>535240205</span>
              <div className="separator"></div>
              <span>Universitas Tarumanagara</span>
            </div>
          </div>

          <div className="avatar-section">
            <div className="avatar-photo">
              <Image 
                src="/profile.jpg" 
                alt="Akmal Fadhlul Rohman"
                width={160}
                height={160}
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content-grid">
          
          {/* About Me */}
          <section className="section">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Saya adalah seorang mahasiswa Informatika di Universitas Tarumanagara dengan fokus pada bidang Cybersecurity. 
              Memiliki passion yang kuat dalam penetration testing, network security, dan pengembangan aplikasi berbasis web. 
              Terus belajar dan berkembang untuk menghadapi tantangan keamanan siber di era digital.
            </p>
          </section>

          {/* Contact */}
          <section className="section">
            <h2 className="section-title">Contact</h2>
            <div className="contact-grid">
              <a href="mailto:sapiselfie06@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-info">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">sapiselfie06@gmail.com</div>
                </div>
              </a>

              <a href="https://github.com/akmals06" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="contact-info">
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">akmals06</div>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-info">
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrapper">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="skill-icon"
                    />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}