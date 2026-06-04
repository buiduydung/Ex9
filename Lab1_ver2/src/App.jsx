import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.student = {
      avatar:
        "https://cdn-media.sforum.vn/storage/app/media/anh-hoat-hinh-cute-9.jpg",
      fullName: "Bùi Duy Dũng",
      studentId: "HE194358",
      className: "SE2009",
      major: "Software Engineering",
      hobbies: ["Coding", "Gym", "Photography", "Listening to music"],
    };

    this.state = {
      isOnline: true,
      isDarkMode: false,
      likes: 0,
    };
  }

  toggleStatus = () => {
    this.setState((prevState) => ({
      isOnline: !prevState.isOnline,
    }));
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  increaseLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  render() {
    const student = this.student;
    const { isOnline, isDarkMode, likes } = this.state;

    return (
      <div className={isDarkMode ? "app dark" : "app light"}>
        <div className="profile-card">
          <img className="avatar" src={student.avatar} alt="Student Avatar" />

          <h1>{student.fullName}</h1>

          <p>
            <strong>Student ID:</strong> {student.studentId}
          </p>

          <p>
            <strong>Class:</strong> {student.className}
          </p>

          <p>
            <strong>Major:</strong> {student.major}
          </p>

          <p className={isOnline ? "status online" : "status offline"}>
            {isOnline ? "Online" : "Offline"}
          </p>

          <h2>Hobbies</h2>

          <ul>
            {student.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>

          <p className="like-text">Total Likes: {likes}</p>

          <div className="button-group">
            <button onClick={this.toggleStatus}>
              Change to {isOnline ? "Offline" : "Online"}
            </button>

            <button onClick={this.toggleDarkMode}>
              Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <button onClick={this.increaseLike}>Like</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
