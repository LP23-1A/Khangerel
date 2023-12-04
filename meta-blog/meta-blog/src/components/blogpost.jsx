const data = [
    {
        url: 'https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        btn: 'Technology',
        desc: 'The Impact of Technology on the Workplace: How Technology is Changing',
        day: 'August 20, 2022'
    }
]

const AllPost = () => {
    return (
        <div className="h-[444px] w-[360px] rounded-xl border-2 p-4">
            {
                data.map((props) => {
                    return (
                        <div className="flex flex-col gap-3"> 
                            <img className="rounded-lg bg-cover" src={props.url} alt="" />
                            <button className="bg-indigo-50 text-indigo-500 w-fit p-1 px-3 rounded-xl text-white">{props.btn}</button>
                            <p className="text-xl font-bold">{props.desc}</p>
                            <p className="text-gray-500">{props.day}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllPost