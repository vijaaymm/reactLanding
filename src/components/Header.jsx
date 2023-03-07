import React from 'react';
import Button from 'react-bootstrap/Button';
import header from '../images/header.svg';


const Header = () => {
  return (
    <>
      <section className='header-area'>
        <div className='container'>
          <section>
            <div className='d-sm-flex'>
              <div className='col-md-6 '>
                <h1 className='header-text '><strong>Let’s Build Something
                  amazing with GPT-3
                  OpenAI</strong></h1>
                <p className='p-text '>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <Button className='btn btn-primary'>Get Started</Button>
              </div>
              <div className='col-md-6'>
                <img className='img-fluid' src={header} alt='header'></img>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Header