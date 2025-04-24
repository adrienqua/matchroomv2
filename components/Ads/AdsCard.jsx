"use client"

const AdsCard = () => {
    return (
        <div>
            <div className="w-full bg-gray-300 h-[200px] rounded-md mb-1">
                <img src="/img/ads1.jpg" alt="" className="w-full" />
            </div>

            <h3 className="font-bold text-[10px]">Bel maison 4 pieces, France</h3>
            <div className="flex justify-between items-center text-[9px]">
                <span>Hotel Neyer</span>
                <span>4.5</span>
            </div>
            <span className="text-[9px]">Du 4 mai - 9 mai</span>
        </div>
    )
}

export default AdsCard
