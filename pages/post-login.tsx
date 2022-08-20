import { gql, useLazyQuery, useQuery } from "@apollo/client";

import React, { useEffect, useState } from "react";
import client from "../src/components/apollo-client";
import { Header } from "../src/components/header";

const PostLogin = () => {
    const authQuery = gql `
        query authorization($token: String){
            authorization(code: $token)
        }
    `

    const [ code, setCode ] = useState<String>("");
    const [ getAuth, { loading, error, data }] = useLazyQuery(authQuery, {
        variables: {
            code
        }
    });

    // async function authorizeUser(){
    //     await client.query(authQuery);
    // }
    
        
        setCode(window.location.search.substr(6,));
        getAuth();
    

    
    
    useEffect(() =>{
        
    }, [])

    if(loading)
        return <p>Hang on while we log you in...</p>

    if(error)
        return <p>Oops, something went wrong!</p>
    
        return(
        <>
        <Header/>
            { data.authorization }
        </>
    );
}

export default PostLogin;