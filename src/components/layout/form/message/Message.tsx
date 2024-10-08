import { IoIosWarning } from "react-icons/io";
import './Message.scss';

function Message(props: any) {
    return (
        <div className='messageAlert secondaryText displayFlex flexWrap centerText'>
            <div className='alertIcon displayFlex centerText'><IoIosWarning/></div>
            <div className='alertText'>{props.children}</div>
            <div className='alertIcon displayFlex centerText'><IoIosWarning/></div>
        </div>
    );
}

export default Message;