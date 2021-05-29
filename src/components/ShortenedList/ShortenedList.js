import React, {useState} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const ShortenedList = ({ item }) => {
        //6. intial State of copied or not button
        const [copySuccess, setCopySuccess] = useState('Copy');
        const [copied, setCopied] = useState(false);
    
        const [isClicked, setIsClicked] = useState({
            status : false,
            copyMessage: 'Copy'
        })
        //7. onCick of button target it's short url right now it's selecting the last element 
        const copyToClipboard = (e) => {
            e.preventDefault();
            setCopySuccess('Copied');
            // console.log(index, 'this is the element clicked?');
          };
          console.log(item, 'this is the prop item');
    return (
        <div>
            <div>
                <h5>{item.original_link}</h5>
            </div>
            {
                /* Logical shortcut for only displaying the 
                button if the copy command exists */
                document.queryCommandSupported('copy') &&
            <form>
                <input defaultValue={item.full_short_link} />
                <CopyToClipboard 
                    text={item.full_short_link}
                    onCopy={() => setCopied(true) }>
                    <button onClick={copyToClipboard}>{copied && copySuccess === 'Copied' ? 'Copied' : 'Copy'}</button> 
                </CopyToClipboard>
            </form>
            }
        </div>
    )
}

export default ShortenedList;
// <ul>
// {
//     displayLinks.map((el, ) => {
//         return (
//             <li key={el.code}>


//             </li>
//         )
//     })
// }
// </ul>