import React, {useEffect, useState} from 'react'
import {CoursesService} from "../service/CourseService";
import CourseTable from "../components/CourseTable";

export default function EnrolledCourses() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        CoursesService.getStudentCourse().then(response => {
            setCourses(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <CourseTable courses={courses}
                         buttonLabel = "Drop"
                         buttonColor = "error"
                         handleButtonClick = {dropCourse}
            />
        </div>
    );

    function dropCourse(courseName) {
        CoursesService.deleteCourse(courseName).then(response => {
            alert(`${courseName} dropped successfully!`);
            window.location.reload();
        }).catch(error => {
            console.error(error);
            alert(`${courseName} dropped failed!`);
        })
    }
}
