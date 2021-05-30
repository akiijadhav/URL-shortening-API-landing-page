import React, {useState} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { 
        LinksListContainer,
        OriginalLink,
        ClipboardForm,
        CopyBtn,
        Input
            } from './ShortenedList.Styled';

const ShortenedList = ({ item }) => {
        //6. intial State of copied or not button
        const [copySuccess, setCopySuccess] = useState('Copy');
        const [copied, setCopied] = useState(false);
    
        //7. onCick of button prevent page from rerendering and set text to Copied
        const copyToClipboard = (e) => {
            e.preventDefault();
            setCopySuccess('Copied');
            // console.log(index, 'this is the element clicked?');
          };
          console.log(item, 'this is the prop item');
    return (
        <LinksListContainer>
            <OriginalLink>
                <h5>{item.original_link}</h5>
            </OriginalLink>
            {
                /* Logical shortcut for only displaying the 
                button if the copy command exists */
                document.queryCommandSupported('copy') &&
            <ClipboardForm>
                <Input type="url" defaultValue={item.full_short_link} disabled={true} />
                <CopyToClipboard 
                    text={item.full_short_link}
                    onCopy={() => setCopied(true) }>
                    <CopyBtn onClick={copyToClipboard}>{copied && copySuccess === 'Copied' ? 'Copied' : 'Copy'}</CopyBtn> 
                </CopyToClipboard>
            </ClipboardForm>
            }
        </LinksListContainer>
    )
}

export default ShortenedList;