import './Button.css'

export default function Button({ buttonClass, buttonText, onClick })
{
    return(
        <button className={ buttonClass } onClick={ onClick }>{ buttonText }</button>
    )
}