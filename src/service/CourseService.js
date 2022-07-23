import axios from '../axios';

//用axios 调取api 返回一个promise
//千万不能前端直接collect数据库
// 其实调用的是一个后端服务器
//注意http method!!需要结合后端的实际意义

export const CoursesService = {
  getAllCourses: function () {
    return axios.get('/api/courses');
  },
  selectCourse: function (courseName) {
    courseName = encodeURI(courseName)
    return axios.post(`/api/student/course/${courseName}`);
  },
  getStudentCourse: function () {
    return axios.get('/api/student/courses');
  },
  deleteCourse: function (courseName) {
    courseName = encodeURI(courseName)
    return axios.delete(`/api/student/course/${courseName}`);
  }
};
