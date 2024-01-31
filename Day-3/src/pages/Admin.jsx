import React, { useState } from 'react';
import CollegeList from './CollegeList';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'Central Yoga Centre', image: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5b1f793f79ed9.jpg', description: 'Located in the heart of the city, Central Yoga Centre offers a diverse range of yoga classes suitable for practitioners of all levels. Known for its serene ambiance and experienced instructors, Central Yoga Centre focuses on traditional yoga practices aimed at enhancing physical, mental, and spiritual well-being.With convenient class schedules and personalized attention, Central Yoga Centre provides a nurturing environment for individuals seeking holistic health and inner peace.' },
    { id: 2, name: 'Integral Yoga Centre', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XA8GzDKdU9Fi8gUIQqMRXOOhEk4ZLcq5Zs18_8FxQjDcn1MNW0tCOuRFSBi4Q0aS1t8&usqp=CAU', description: ' Integral Yoga Center stands out for its comprehensive approach to yoga, integrating various yoga styles, meditation techniques, and spiritual teachings. Founded on the principles of Sri Aurobindo and The Mother, Integral Yoga Center emphasizes the harmonious development of body, mind, and soul.Through its workshops, retreats, and community events, Integral Yoga Center fosters a sense of unity, self-discovery, and holistic growth among its practitioners.' },
    { id: 3, name: 'Harmony Yoga Centre', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLizzehkhILTgt3NKTIRdPenjG1v1eVBUot4SjbJoCT0LBy6w35eNUDiqDxzButkLr_HE&usqp=CAU', description: 'Harmony Yoga Center offers a modern and inclusive space for individuals to explore the transformative power of yoga and mindfulness practices. With a focus on alignment-based yoga and breath awareness, Harmony Yoga Center helps students cultivate strength, flexibility, and inner balance.Led by passionate instructors, Harmony Yoga Center encourages students to explore their potential, fostering a supportive community dedicated to personal growth and well-being.' },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddCollege = () => {
    const newCollege = {
      id: Date.now(),
      name: prompt('Enter new name:'),
      image: prompt('Enter new image URL:'),
      description: prompt('Enter new description:'),
    };

    setColleges([...colleges, newCollege]);
  };

  const handleDeleteCollege = (id) => {
    const updatedColleges = colleges.filter((college) => college.id !== id);
    setColleges(updatedColleges);
  };

  const handleUpdateCollege = (id, newName, newImage, newDescription) => {
    const updatedColleges = colleges.map((college) =>
      college.id === id
        ? {
            ...college,
            name: newName,
            image: newImage,
            description: newDescription,
          }
        : college
    );
    setColleges(updatedColleges);
  };

  return (
    <div>
      <button onClick={handleToggleSidebar} style={{ backgroundColor:'green',color: 'white', marginTop: '100px', padding: '10px' }}>MENU</button>
      {sidebarOpen && (
        <div style={{ width: '250px', backgroundColor: '#f0f0f0', height: '100vh', position: 'fixed', top: '0', left: '0', zIndex: '999' }}>
          <ul>
            <li><Link to="/admindash" style={{  padding: '10px', display: 'block', textDecoration: 'none' }}>Dashboard</Link></li>
            <li><button onClick={handleToggleSidebar} style={{ backgroundcolor:'red', padding: '10px', display: 'block', textDecoration: 'none' }}>Close</button></li>
          </ul>
        </div>
      )}
      <div style={{ marginLeft: sidebarOpen ? '250px' : '0', transition: 'margin-left 0.5s' }}>
        <div style={{ textAlign: 'center', margin: 'auto', width: '50%' }}>
          <CollegeList colleges={colleges} isAdmin onDelete={handleDeleteCollege} onUpdate={handleUpdateCollege} />
          <div style={{ marginTop: '20px' }}>
            <h2>ADD YOGA CENTRES</h2>
            <button onClick={handleAddCollege} style={{ backgroundColor: 'red' }}>Add</button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Admin;
