import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const CollegeList = ({ colleges, isAdmin, onDelete, onUpdate }) => {
  return (
      <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <div style={{ marginTop: '20px' }}>
        <h2>Yoga Centers</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {colleges.map((college) => (
            <li key={college.id} style={{ marginBottom: '40px', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={college.image}
                    alt={`${college.name} Image`}
                    style={{ width: '500px', height: '300px', marginBottom: '10px', borderRadius: '10px' }}
                  />
                  <strong style={{ fontSize: '20px' }}>{college.name}</strong>
                  <p style={{ fontSize: '16px', justifyContent: 'center' }}>{college.description}</p>
                </div>
              </Link>
              {isAdmin && (
                <div>
                  <button onClick={() => onDelete(college.id)} className="mr-7" style={{ backgroundColor: 'red', marginRight: '10px' }}>
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      onUpdate(
                        college.id,
                        prompt('Enter new name:', college.name),
                        prompt('Enter new image URL:', college.image),
                        prompt('Enter new description:', college.description)
                      )
                    }
                    style={{ backgroundColor: 'green' }}>
                    Update
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default CollegeList;
