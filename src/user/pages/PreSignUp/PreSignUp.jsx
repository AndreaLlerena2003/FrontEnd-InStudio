import './preSignUp.css'; 

function PreSignUp(){
    return (
        <div className="tw-min-h-screen tw-py-10 sm:tw-py-20">
        <div className="tw-container tw-mx-auto">
            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-11/12 lg:tw-w-10/12 tw-bg-white tw-rounded-xl tw-mx-auto tw-shadow-lg tw-overflow-hidden">
                <div 
                    className="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-8 lg:tw-p-12 tw-background-image"
                >
                </div>
                <div className="tw-w-full lg:tw-w-1/2 tw-py-8 lg:tw-py-16 tw-px-6 lg:tw-px-12">
                    <h2 className="tw-text-2xl sm:tw-text-3xl tw-mb-3 sm:tw-mb-4">¿Quién eres?</h2>
                    <form action="#">
                        <div className="tw-mt-4">
                            <button className="tw-w-full tw-py-3 tw-text-center tw-text-white" style={{backgroundColor: "#7A7CE7"}}>Soy una persona</button>
                            <p className="tw-mb-3 sm:tw-mb-4 tw-text-center tw-font-bold" style={{color: "#7A7CE7", margin: "5px 0"}}>o</p>
                            <button className="tw-w-full tw-py-3 tw-text-center tw-text-white" style={{backgroundColor: "#7A7CE7"}}>Soy un salon de belleza</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PreSignUp;