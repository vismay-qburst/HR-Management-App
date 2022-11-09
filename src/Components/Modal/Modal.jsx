export default function Modal()
{
    return(
        <>
            <div id="viewEmployeeOverlay" class="modal">
                <div id="viewEmployeeModal" class="modalContent">
                    <span class="close">&times;</span>
                    <h2 class="heading">Sample header</h2>
                    <div id="details" class="formContainer">
                    </div>
                    <div id="viewModalButtons" class="modalButtonContainer flexbox">
                        <button class="buttonStyle" id="editButton"><strong>Edit</strong></button>
                        <button class="buttonStyle" id="okButton"><strong>OK</strong></button>
                    </div>
                </div>
            </div>
        </>
    )
}