import React from 'react'
import { Icon } from "semantic-ui-react"
import { toast } from "react-toastify"

export const showNotify = (msg, err) => {
    const string = <React.Fragment><Icon name='check' />{msg}</React.Fragment>;
    const element = React.createElement('div', {}, string);
    const config = {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
    };

    if(err){
        toast.error(element, config); 
    }else{
        toast.success(element, config); 
    }

}