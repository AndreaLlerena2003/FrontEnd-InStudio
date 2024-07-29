// src/user/SignUp.js
import React from 'react';
import './signUp.css';  // Ensure the CSS file exists and has the right path
const Image = "url('C:/Users/aplle/OneDrive/Documentos/2024-2/ArquitecturaDeSoftware/FrontEnd-InStudio/src/assets/Register-Background.png')";
function SignUp() {
    return (
        <div className="tw-min-h-screen tw-py-40" >
           <div className="tw-container tw-mx-auto">
                <div className="tw-flex tw-flex-row tw-w-10/12 lg:tw-w-8/12 tw-bg-white tw-rounded-xl tw-mx-auto tw-shadow-lg tw-overflow-hidden">
                    <div 
                    className="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-12 tw-bg-no-repeat tw-bg-cover tw-bg-center" 
                    style={{ backgroundImage: `url(${Image})` }} 
                    >
                         <h1 className="tw-text-white tw-text-3xl tw-mb-3">Welcome</h1>
                         <div>
                            <p className="tw-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac
                            </p>
                         </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-1/2 tw-py-16 tw-px-12">
                        <h2  className="tw-text-3xl tw-mb-4">Register</h2>
                        <p className="tw-mb-4">
                             Create your account. It’s free and only take a minute
                        </p>
                        <form action="#">
                            <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                                 <input type="text" placeholder="Firstname" className="tw-border tw-border-gray-400 tw-py-1 tw-px-2"/>
                                 <input type="text" placeholder="Surname" class="tw-border tw-border-gray-400 tw-py-1 tw-px-2"></input>
                            </div>
                            <div className="tw-mt-5">
                                <input type="text" placeholder="Email" className="tw-border tw-border-gray-400 tw-py-1 tw-px-2 tw-w-full"></input>
                            </div>
                            <div class="tw-mt-5">
                                <input type="password" placeholder="Password" className="tw-border tw-border-gray-400 tw-py-1 tw-px-2 tw-w-full"/>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default SignUp;
