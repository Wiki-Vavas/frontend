export default function Agent(){
    return(
        
        <main className="flex gap-24 px-12 items-center">
        <div className="flex flex-col gap-6">
            <video src={""} className="bg-black w-[360px] h-[198px]"></video>
            <div className="flex gap-10">
                <button className="bg-black w-[60px] h-[60px] rounded-lg"><img src="" alt="" /></button>
                <button className="bg-black w-[60px] h-[60px] rounded-lg"><img src="" alt="" /></button>
                <button className="bg-black w-[60px] h-[60px] rounded-lg"><img src="" alt="" /></button>
                <button className="bg-black w-[60px] h-[60px] rounded-lg"><img src="" alt="" /></button>
            </div>
        </div>
        <div className="flex flex-col gap-20">
            <div>
                <h2 className="text-lg font-bold">BIOGRAPHY</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ut sit, vero eveniet cumque architecto fuga asperiores dolor fugit, consectetur quasi et quia cum quo sequi doloribus sunt obcaecati expedita.</p>
            </div>
            <div className="flex gap-7">
                <div>
                    <p className="text-lg font-bold">Information</p>
                    <h2 className="text-sm">Gender</h2>
                </div>
                <div>
                    <p className="text-lg font-bold">Information</p>
                    <h2 className="text-sm">Location</h2>
                </div>
                <div>
                    <p className="text-lg font-bold">Information</p>
                    <h2 className="text-sm">Role</h2>
                </div>
            </div>

        </div>
        <div className="flex shrink-0">
            <img className="bg-black h-[826px] w-[330px] -mb-[175px] shrink-0" src="" alt="" />
            <img className="bg-black h-[628px] w-[129px] shrink-0" src="" alt="" />
        </div>


        </main>



    )
}