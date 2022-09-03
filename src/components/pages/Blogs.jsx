import React, {useEffect} from 'react'
import Banner from './common/Banner'
import blogData from '../data/blogData'
import AOS from 'aos';
import "aos/dist/aos.css"

const Blogs = () => {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <>
      <Banner title='Blog & News' />
      <div className="blogs">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row ">
            {
              blogData.data.map((blog, index) => (
                <div className="col-lg-6 p-4 " data-aos="zoom-in-up">
                  <div className="blog">
                    <img src={blog.img} />
                    <h2>{blog.title}</h2>
                    <p>{blog.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
