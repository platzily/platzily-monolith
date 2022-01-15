 
export function sendLoginWithCredentials(email, password) {
    return(         
    // provisory false fetch
    new Promise((resolve, reject) => {
        setTimeout(() => {
            
                if(email ==='sergio@gmail.com') {
                    resolve({
                        email: email,
                        status: "200",
                        id: "1",
                        name: "userNameTest",
                        error: false
                    })    
                } else {
                    resolve({
                        email: email,
                        status: "401",
                        id: "1",
                        name: "userNameTest",
                        error: true
                    })
                }
        }, 1500);
    })
    // definitive fetch
    
    // fetch('http://localhost:7789/login', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": `application/x-www-form-urlencoded`,
    //         // "Access-Control-Allow-Origin": "http://localhost:7789",
    //         "Authorization": `${Buffer.from(email).toString('base64')}.${Buffer.from(password).toString('base64')}`,
    //     },
    //     //body: JSON.stringify({data: data})
    //     //  JSON.stringify(data)
        
    // })
    )
};
 



