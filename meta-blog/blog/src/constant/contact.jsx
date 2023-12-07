const data = [
    {
        h1: 'Address',
        info: '1328 Oak Ridge Drive, Saint Louis, Missouri'
    },
    {
        h1: 'Contact',
        info: '313-332-8662 info@email.com'
    },
]

const ContactUs = () => {
    return (
        <div className="flex gap-5 border-3">
            {
                data.map((props) => {
                    return (
                        <div className="border-3"> 
                            <h1>{props.h1}</h1>
                            <p>{props.info}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactUs