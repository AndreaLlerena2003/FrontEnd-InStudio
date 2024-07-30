import React from 'react';
import './signUp.css'; 

function SignUp() {
    return (
        <div className="tw-min-h-screen tw-py-10 sm:tw-py-20">
            <div className="tw-container tw-mx-auto">
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-11/12 lg:tw-w-10/12 tw-bg-white tw-rounded-xl tw-mx-auto tw-shadow-lg tw-overflow-hidden">
                    <div 
                        className="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-8 lg:tw-p-12 tw-background-image"
                    >
                    </div>
                    <div className="tw-w-full lg:tw-w-1/2 tw-py-8 lg:tw-py-16 tw-px-6 lg:tw-px-12">
                        <h2 className="tw-text-2xl sm:tw-text-3xl tw-mb-3 sm:tw-mb-4">Register</h2>
                        <p className="tw-mb-3 sm:tw-mb-4">
                            Create your account. It’s free and only takes a minute.
                        </p>
                        <form action="#">
                            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                                <input type="text" placeholder="Firstname" className="tw-border tw-border-gray-400 tw-py-2 tw-px-3 tw-w-full"/>
                                <input type="text" placeholder="Surname" className="tw-border tw-border-gray-400 tw-py-2 tw-px-3 tw-w-full"/>
                            </div>
                            <div className="tw-mt-4">
                                <input type="text" placeholder="Email" className="tw-border tw-border-gray-400 tw-py-2 tw-px-3 tw-w-full"/>
                            </div>
                            <div className="tw-mt-4">
                                <input type="password" placeholder="Password" className="tw-border tw-border-gray-400 tw-py-2 tw-px-3 tw-w-full"/>
                            </div>
                            <div className="tw-mt-4">
                                <label className="tw-inline-flex tw-items-center">
                                    <input type="checkbox" className="tw-border tw-border-gray-400"/>
                                    <span className="tw-ml-2 tw-text-sm sm:tw-text-base">
                                        I accept the <a href="#" style={{color: "#7A7CE7"}} className="tw-font-semibold">Terms of Use</a> and <a href="#" style={{color: "#7A7CE7"}} className="tw-font-semibold">Privacy Policy</a>
                                    </span>
                                </label>
                            </div>
                            <div className="tw-mt-4">
                                <button type="submit" className="tw-w-full tw-py-3 tw-text-center tw-text-white" style={{backgroundColor: "#7A7CE7"}}>Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
