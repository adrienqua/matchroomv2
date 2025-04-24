import AdsCard from "@/components/Ads/AdsCard"

export default function Home() {
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
