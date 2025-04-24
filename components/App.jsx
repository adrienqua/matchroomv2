import { useState } from "react"
import AdsCard from "./Ads/AdsCard"

function App() {
    return (
        <>
            <div>
                <h2 className="text-md text-main font-bold mb-2">Les HOT ONES</h2>
                <div className="flex flex-nowrap gap-3 aspect-square">
                    <AdsCard />
                    <AdsCard />
                    <AdsCard />
                    <AdsCard />
                </div>
            </div>
        </>
    )
}

export default App
