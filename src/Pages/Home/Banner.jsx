import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import slider1 from '../../assets/cover-1.jpg'
import slider2 from '../../assets/cover-2.jpg'

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider mb-8">
                <div className="keen-slider__slide number-slide1 relative">
                    <img src={slider1} alt="" className="h-[60%] w-[100%]" />
                    <div className="absolute inset-0 bg-black opacity-50 h-[60%] w-[100%]"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 h-[60%] w-[100%]">
                        <h2 className="text-4xl font-bold mb-4">Slide 1 Heading</h2>
                        <button className="px-6 py-2 font-medium bg-transparent text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Join as Employee
                        </button>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2 relative">
                    <img src={slider2} alt="" className="h-[60%] w-[100%]" />
                    <div className="absolute inset-0 bg-black opacity-50 h-[60%] w-[100%]"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 h-[60%] w-[100%]">
                        <h2 className="text-4xl font-bold mb-4">Slide 2 Heading</h2>
                        <button className="px-6 py-2 font-medium bg-transparent text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Join as HR Manager
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Banner;