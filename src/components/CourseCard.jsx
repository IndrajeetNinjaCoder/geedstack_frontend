import React from 'react'
import { Link } from "react-router-dom"


// import web1 from "../assets/images/web 1.png";
import student_icon from "../assets/images/student-icon.png";

const CourseCard = ({ imgurl, category, subcategory, title, users, price }) => {
    return (

        <div className="course-card">

            <div className="course-banner">
                <img src={imgurl} alt="course banner" />

                <div className="course-tag-box">
                    <Link to="#" className="badge-tag orange">{category}</Link>
                    <Link to="#" className="badge-tag blue">{subcategory}</Link>
                </div>
            </div>

            <div className="course-content">

                <h3 className="card-title">
                    <Link to="#">{title}</Link>
                </h3>

                <div className="wrapper border-bottom">
                    <div className="enrolled">
                        <div className="icon-user">
                            <img src={student_icon} alt="user icon" />
                        </div>

                        <p>600k</p>
                    </div>



                    <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <p>5.0 (2k)</p>
                    </div>

                </div>

                <div className="wrapper">
                    <div className="course-view">
                        <Link to="https://pages.razorpay.com/geekstacks-training">Apply</Link>
                    </div>
                    <div className="course-price">₹{price}</div>

                </div>

            </div>

        </div>
    )
}

export default CourseCard