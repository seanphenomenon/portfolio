import React from 'react';

export default class Contact extends React.Component {
    
    render() {
        return (
            <div>
               <section className=' p-5 align-items-center' id="contact">
                    <div className='w-100'>
                        <h2 className='p-2 mb-3 mt-2'>Contact</h2>
                        <div className="d-flex flex-column flex-md-row  mb-5" id='contact-info'>
                            <div className="p-2 mr-2" >
                                <p>Let's Connect! Send an email to seanvharrell@gmail.com<br/>
                                Thanks,<br/>
                                - Sean</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
            </div>
        )
    }
}