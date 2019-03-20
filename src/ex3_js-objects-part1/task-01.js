var student = {};
student.name = "John";
student.surname = "Jackson";
student.gender = "male";
student.age = 22;
student.job = false;
student.SayHello = function () {
  console.log("Hello");
};

delete student.gender;
