import { useState } from 'react'

const HotelDescriptionCard = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="border border-gray-200 p-4">
      <div className="text-primary text-2xl">Noble Place</div>
      <div className="text-xl">โนเบิล เพลส</div>
      <div className="text-xl text-orange-400 gap-1 flex">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </div>
      <div className="flex gap-1 items-center">
        <i className="text-2xl bi bi-geo-alt"></i>
        <div>Chiang Mai</div>
      </div>
      <div className="">
        <p className={readMore ? '' : 'line-clamp-3'}>
                This hotel&apos;s location is perfect for newcomers to the city, as it is situated opposite the Central Airport Department Store, as well as enjoying simple and fast connections to the city centre and being only 1 minute away from the Chiang Mai International Airport. The air-conditioned hotel is a high-class, comfortable place to stay with 45 rooms of a high standard mixed with stunning, classical Lanna style. Warm, cosy and practical design corresponds with the needs of all types of guests, staying here either in order to relax or conduct business matters. The hotel provides a 24-hour reception and check-out service, a hotel safe and a TV lounge, where guests can unwind. Dining takes place in the hotel restaurant and the hotel offers Internet access and a car park, for those arriving by car, while guests may take advantage of the room and laundry services for an extra fee. The hotel provides 3 types of rooms: superior, deluxe and suite, which are decorated in beautiful traditional Lanna style and feature convenient facilities with air conditioning and king-size beds. Other facilities, such as a shower with hot and cold stream, a bath, hairdryer, microwave in the kitchen annex, as well as free WLAN Internet access are also included as standard. A direct dial telephone, satellite TV, cooker, minibar, tea and coffee making facilities, ironing set and a safe also feature. Guests can enjoy the fresh air from their terrace The nearest golf course is a 30-minute drive away. The restaurant provides international buffet dining at breakfast, lunch and dinner, as well as á la carte and set menu options at lunch and dinner.
        </p>
        <a
          className="text-primary cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            setReadMore(!readMore)
          }}
        >{ !readMore ? 'Read More' : 'Read Less' }</a>
      </div>
    </div>
  )
}

export { HotelDescriptionCard }