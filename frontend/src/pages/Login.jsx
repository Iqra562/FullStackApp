// import React, { useState } from 'react'
// import { useMutation } from 'react-query'
// import { AuthServices } from '../Services/Auth.services.js'

// const Login = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         username: '',
//         email: '',
//         avatar: '',
//         password: ''
//     })
//     const onChangeHandle = (e) => {
//         setFormData({ ...formData, [e.target.name]: [e.target.value] })
//     }
//     const { mutateAsync: createAccountRequest } = useMutation(
//         AuthServices.CreateAccount,
//         {
//             onSuccess: () => {
//                 setFormData({
//                     fullName: '',
//                     username: '',
//                     email: '',
//                     avatar: '',
//                     password: ''
//                 })
//             },
//             onError: (err) => {
//                 console.log('error logging in', err)
//             }
//         }
//     )
//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         console.log('slkh')
//         if (formData?.fullName && formData?.username && formData?.email && formData?.avatar && formData?.password) {
//             await createAccountRequest(formData)
//         }
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmitHandler}>
//                 <div>
//                     <label htmlFor="">Fullname</label>
//                     <input type="text" name='fullName' value={formData?.fullName} onChange={onChangeHandle} />
//                 </div>
//                 <div>
//                     <label htmlFor="">Username</label>
//                     <input type="text" name='username' value={formData?.username} onChange={onChangeHandle} />
//                 </div>
//                 <div>
//                     <label htmlFor="">Email</label>
//                     <input type="text" name='email' value={formData?.email} onChange={onChangeHandle} />
//                 </div>
//                 {/* <div>
//                     <label htmlFor="">Photo</label>
//                     <input type="file" name='avatar' value={formData?.avatar} onChange={onChangeHandle} />
//                 </div> */}
//                 <div>
//                     <label htmlFor="">Password</label>
//                     <input type="text" name='password' value={formData?.password} onChange={onChangeHandle} />
//                 </div>
//                 <div>
//                     <button type='submit'>Signup</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Login;
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { AuthServices } from '../Services/Auth.services.js';

const Login = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        avatar: '',
        password: ''
    });

    const onChangeHandle = (e) => {
        const { name, value, files, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const { mutateAsync: createAccountRequest } = useMutation(
        AuthServices.CreateAccount,
        {
            onSuccess: () => {
                setFormData({
                    fullName: '',
                    username: '',
                    email: '',
                    avatar: '',
                    password: ''
                });
            },
            onError: (err) => {
                console.error('error logging in', err);
            }
        }
    );

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (formData.fullName && formData.username && formData.email && formData.password) {
            await createAccountRequest(formData);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Fullname</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={onChangeHandle} />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={onChangeHandle} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={onChangeHandle} />
                </div>
                {/* Uncomment when needed
                <div>
                    <label>Photo</label>
                    <input type="file" name="avatar" onChange={onChangeHandle} />
                </div> */}
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={onChangeHandle} />
                </div>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
