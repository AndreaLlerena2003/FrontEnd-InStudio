import React from 'react';
import './signIn.css'; 

function SignIn() {
    return (
        <div className="tw-min-h-screen tw-py-10 sm:tw-py-20">
            <div className="tw-container tw-mx-auto">
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-11/12 lg:tw-w-10/12 tw-bg-white tw-rounded-xl tw-mx-auto tw-shadow-lg tw-overflow-hidden">
                    <div 
                        className="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-8 lg:tw-p-12 tw-background-image"
                    >
                    </div>
                    <div className="tw-w-full lg:tw-w-1/2 tw-py-8 lg:tw-py-16 tw-px-6 lg:tw-px-12">
                        <h2 className="tw-text-2xl sm:tw-text-3xl tw-mb-3 sm:tw-mb-4">Login</h2>
                        <p className="tw-mb-3 sm:tw-mb-4">
                            Welcome Back! We’re thrilled to have you with us again.
                        </p>
                        <form action="#">
                            <div className="tw-mt-4">
                                <input type="text" placeholder="Email" className="tw-border tw-border-gray-400 tw-py-2 tw-px-3 tw-w-full"/>
                            </div>
                            <div className="tw-mt-4">
                                <input type="password" placeholder="Password" className="tw-border tw-border-gray-400 tw-py-2 tw-px-3 tw-w-full"/>
                            </div>
                            <div className="tw-mt-4">
                                <button type="submit" className="tw-w-full tw-py-3 tw-text-center tw-text-white" style={{backgroundColor: "#7A7CE7"}}>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
