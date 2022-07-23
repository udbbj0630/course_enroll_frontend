import React from "react";
import CourseTable from "../components/CourseTable";
import { CoursesService } from "../service/CourseService";

export default class AllCourses extends React.Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    CoursesService.getAllCourses()
      .then((response) => {
        this.setState({
          courses: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <CourseTable courses={this.state.courses}
                     buttonLabel = "Enroll"
                     buttonColor = "primary"
                     handleButtonClick = {this.enrollCourse}
                    />
      </div>
    );
  }

  enrollCourse(courseName) {
    CoursesService.selectCourse(courseName).then(response => {
      alert(`${courseName} enrolled successfully!`);
    }).catch(error => {
      console.error(error);
      alert(`${courseName} enrolled failed`);
    })
  }
}
