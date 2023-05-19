import React from 'react'

const Forcollege = () => {



    return (
        <>
            <div className="forcollege">
                <h1>Request Workshop in Your College/School</h1>
                <div className="mainContainer">
                    <form action="">
                        <div className="form-item">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="fname" id="fname" placeholder='Name' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Email' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone" placeholder='Phone' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" name="designation" id="designation" placeholder='Designation' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="organization">Organization</label>
                            <input type="text" name="organization" id="organization" placeholder='Organization' required />
                        </div>


                        <div className="form-item">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" rows='3' name="message" id="message" placeholder='Message' required />
                        </div>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default Forcollege