import React, { useEffect, useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Loading from '../../images/Ripple-1s-200px.svg';
import ShortenedList from '../ShortenedList/ShortenedList';




const Shorten = () => {
    // get built in props of react hook form i.e. register,handleSubmit & errors / watch is for devs
    const { register, handleSubmit, formState: {errors} } = useForm();

    //1. set user original values to pass as params to url
    const [link, setLink] = useState('');

    //2. set loader initial values to false 
    const [loading, setLoading] = useState(false);

    //3. pass the fetched short link object into an array so we can map
    const [displayLinks, setDisplayLinks] = useState([]);

    //4. onSubmit form log data into link & showLoader for a breif moment
    const onSubmit = (data, event) => {
                event.preventDefault();
                //puttin data in a variable to pass as url parameter if valid
                setLink(data.userLink);
                //add loading here after data is set to state
                setLoading(!false);
            }

    //5. fetch the shortened url link using async method to show loading
    useEffect(() => {
        let unmounted = false;
        async function makeGetRequest() {
            try {
                let res = await axios.get('https://api.shrtco.de/v2/shorten', { params: { url: link } });
                //hid loader if u get response from api call
                    if (!unmounted && res.data.result.original_link) {
                        setLoading(false);

                        //add the data to displayLinks array to map
                        return setDisplayLinks(displayLinks => [...displayLinks, res.data.result]);
                    }

                } 
            catch (error) {
                console.log(error, "inital mount request with no data");
            }

        }
        //invoke the makeGetRequest here 
        makeGetRequest();
       
        return () => {
            unmounted = true;
        }

        //passing dependency to re-render on change of state value
    }, [link]);



      //gereal idea to see the list of mapped links
      console.log(displayLinks);
    return (
        <div>
            {
                loading ?
                    <div className="loader" id="loader">
                        <img src={Loading} alt="Loading" />
                    </div>
                        : null
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <label></label>
                <input
                    {...register("userLink", {required: "Please add a link"})}
                    type="url"
                    id="userLink"
                />
                {errors.userLink && <span>{errors.userLink.message}</span>}
                <input type="submit" />
            </form>

            <ul>
                {
                    displayLinks.map((el, i) => {
                        return (
                            <li key={i}>
                                <ShortenedList item={el} />
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default Shorten;
