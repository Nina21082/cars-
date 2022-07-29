import React from "react";

export const ErrorRegister = () => {

    return(
        <div className="flex space-x-2 justify-center">
            <div
                className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
                id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                <div
                    className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="p-3 bg-white rounded-b-lg break-words text-gray-700 text-red-600">
                    User already registered
                </div>
            </div>
        </div>
    )
}

export const ErrorLogin = () => {
    return(
        <div className="flex space-x-2 justify-center">
            <div
                className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
                id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                <div
                    className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="p-3 bg-white rounded-b-lg break-words text-gray-700 text-red-600">
                    You entered the wrong password or email
                </div>
            </div>
        </div>
    )
}