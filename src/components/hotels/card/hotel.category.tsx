type HotelCategory = {
  categoryGroup?: string | null
  category?: string
}

const HotelCategory = (prop: HotelCategory) => {

  return (
    <div className="text-2xl text-orange-400 gap-1 flex">
      { prop.categoryGroup === 'GRUPO1' && (
        <>
          <i className="bi bi-star-fill"></i>
        </>
      ) }
      { prop.categoryGroup === 'GRUPO2' && (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </>
      ) }
      { prop.categoryGroup === 'GRUPO3' && (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </>
      ) }
      { prop.categoryGroup === 'GRUPO4' && (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </>
      ) }
      { prop.categoryGroup === 'GRUPO5' && (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </>
      ) }

      { prop.categoryGroup === 'GRUPO6' && (
        <>
        </>
      ) }

      { prop.categoryGroup === 'GRUPO7' && (
        <>
        </>
      ) }
    </div>
  )
}

export { HotelCategory }