import React, { useState } from 'react';
import './App.css';

const Dashboard = () => {
  const totalStudents = 1500;
  const enrolledStudents = 1200;
  const newStudents = 300;

  const activities = [
    {
      id: 1,
      activity: 'New course added: Introduction to Computer Science',
      timestamp: '2023-05-08 10:15 AM',
    },
    {
      id: 2,
      activity: 'Student enrollment: Mohan enrolled in Engineering Mathematics ',
      timestamp: '2023-05-07 02:30 PM',
    },
    {
      id: 3,
      activity: 'Grade updated: Manoj received an A in English Literature',
      timestamp: '2023-05-06 04:45 PM',
    },
  ];

  return (
    <div>
      <h3>Student Statistics</h3>
      <div>
        <p>Total Students: {totalStudents}</p>
        <p>Enrolled Students: {enrolledStudents}</p>
        <p>New Students: {newStudents}</p>
      </div>
      <h3>Recent Activities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.activity}</p>
            <p>{activity.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Mohan', grade: 'A' },
    { id: 2, name: 'Manoj', grade: 'B' },
    { id: 3, name: 'Sathya', grade: 'C' },
  ]);

  return (
    <div>
      <h3>Student List</h3>
      <input type="text" placeholder="Search students..." />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CourseList = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Introduction to Computer Science', instructor: 'Mohan' },
    { id: 2, name: 'Engineering Mathematics', instructor: 'Manoj' },
    { id: 3, name: 'English Literature', instructor: 'Sathya' },
  ]);

  return (
    <div>
      <h3>Course List</h3>
      <input type="text" placeholder="Search courses..." />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Settings = () => {
  const [user, setUser] = useState({
    name: 'abc',
    email: 'abc.xx@example.com',
    password: 'mypassword',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings Saved!');
  };

  return (
    <div className="settings-container">
      <h3>Settings</h3>
      <form onSubmit={handleSubmit} className="settings-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={user.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />
        
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderMainContent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Students':
        return <StudentList />;
      case 'Courses':
        return <CourseList />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Student Admin</div>
        <nav className="navigation">
          <a href="#" className="nav-link" onClick={() => setActiveComponent('Dashboard')}>
            Dashboard
          </a>
          <a href="#" className="nav-link" onClick={() => setActiveComponent('Students')}>
            Students
          </a>
          <a href="#" className="nav-link" onClick={() => setActiveComponent('Courses')}>
            Courses
          </a>
          <a href="#" className="nav-link" onClick={() => setActiveComponent('Settings')}>
            Settings
          </a>
        </nav>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <a href="#" className="nav-link" onClick={() => setActiveComponent('Dashboard')}>
              Dashboard
            </a>
            <a href="#" className="nav-link" onClick={() => setActiveComponent('Students')}>
              Students
            </a>
            <a href="#" className="nav-link" onClick={() => setActiveComponent('Courses')}>
              Courses
            </a>
            <a href="#" className="nav-link" onClick={() => setActiveComponent('Settings')}>
              Settings
            </a>
          </nav>
        </aside>
        <main>
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
