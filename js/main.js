
edu_li = document.getElementById('edu-li');
pro_li = document.getElementById('pro-li');
edu_div = document.getElementById('edu-div');
pro_div = document.getElementById('pro-div');
course_li = document.getElementById('course-li');
course_div = document.getElementById('course-div');

edu_li.style.borderBottom = "2px  solid #999";

edu_li.addEventListener("click", ()=>{
    edu_div.style.display = "block";
    pro_div.style.display = "none";
    course_div.style.display = "none";
    edu_li.style.borderBottom = "2px  solid #999";
    pro_li.style.borderBottom = "";
    course_li.style.borderBottom = "";
});

pro_li.addEventListener("click", ()=>{
    edu_div.style.display = "none";
    course_div.style.display = "none";
    pro_div.style.display = "block";
    pro_li.style.borderBottom = "2px  solid #999";
    edu_li.style.borderBottom = "";
    course_li.style.borderBottom = "";
});

course_li.addEventListener("click", ()=>{
    edu_div.style.display = "none";
    pro_div.style.display = "none";
    course_div.style.display = "block";
    course_li.style.borderBottom = "2px  solid #999";
    edu_li.style.borderBottom = "";
    pro_li.style.borderBottom = "";
});