import React, { useState } from 'react'



const Form = () => {
    const [formData, setFormData] = useState({
        fName: '', lName: '', email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store data in localStorage
        alert("Are you sure to Submit!")
        localStorage.setItem('formData', JSON.stringify(formData));
        setFormData({
            fName: '', lName: '', email: ''
        })
    };


    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="form" style={{
                        marginTop: '20px'
                    }} >
                    <h4>Our Newsletter</h4>
                    <p className='p'>Dialogue is an essential part of any script</p>

                    <input type="text"
                        placeholder='First Name'
                        name="fName"
                        className="custom-input"
                        value={formData.fName}
                        onChange={handleChange}
                        required
                    />
                    <input type="text"
                        placeholder='Last Name'
                        name="lName"
                        className="custom-input"
                        value={formData.lName}
                        onChange={handleChange}
                        required

                    />
                    <input type="email"
                        placeholder='Email'
                        name="email"
                        className="custom-input"
                        value={formData.email}
                        onChange={handleChange}
                        required

                    />

                    <input type='submit' value='CONTACT US' className='btn btn-w' />

                </form>
            </div>
        </>
    )
}

export default Form