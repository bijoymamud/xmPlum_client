import React from 'react'

const About = () => {
  return (
    <section className='min-h-[70vh] bg-[#221F42] p-4 flex items-center justify-center pb-20'>
      <div className='flex items-center justify-between container mx-auto'>

        <div className='basis-5/12'>
            <img src="https://i.ibb.co.com/L38nXPQ/Group-1597883252.png" alt="" className='flex items-center justify-center'/>
        </div>

        <div className='basis-6/12'>
            <h1 className='text-[#D0CDEF] text-4xl font-bold mb-4'>About Us</h1>
            <p className='text-[#D0CDEF]'>At Luxbot, we are committed to providing reliable and accessible legal support to individuals and businesses. Our team of experienced legal professionals and AI-powered solutions ensure that you receive accurate guidance, tailored advice, and efficient legal assistance whenever you need it. <br /> <br />

Ai specialize in legal consultation, contract drafting, dispute resolution, compliance assistance helping our user’s navigate legal complexities with confidence. Whether he is seeking advice or quick legal insights, we are here to support you every step of the way. <br /> <br />

Your legal concerns, our Ai based solutions.</p>
        </div>

      </div>
    </section>
  )
}

export default About
