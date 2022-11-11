import { useState } from "react";
import Button from "../Button/Button";

export default function Modal()
{
    return(
        <>
            <div className="viewEmployeeOverlay modalOverlay">
                <div className="viewEmployeeModal modalContent">
                    <span className="close">&times;</span>
                    <h2 className="heading">Sample header</h2>
                    <div className="details formContainer">
                    </div>
                    <div className="viewModalButtons modalButtonContainer flexbox">
                        <Button buttonClass={"buttonStyle editButton"} buttonText={(<strong>Edit</strong>)} />
                        <Button buttonClass={"buttonStyle okButton"} buttonText={(<strong>OK</strong>)}/>
                    </div>
                </div>
            </div>
        </>
    )
}