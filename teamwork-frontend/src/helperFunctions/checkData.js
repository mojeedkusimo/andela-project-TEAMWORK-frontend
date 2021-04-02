import getUser from './getUser';

let checkData = (inputFields) => {
    let user = getUser();
    let result = Object.values(inputFields).find((input) => {
        return input === "";
    });

    if (result !== undefined ) {
        return "Please fill all fields";   
    } 
    // else if ( user === null || user.isadmin !== true ) {
    //     return "Unauthorized!";
    // }

    return null;
}

export default checkData;