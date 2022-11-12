import { IHotelsDetailSearch, IHotelsSearch } from '@model/hotel-search'

import { AppUrl } from '@utils/app.config'
import Image from 'next/image'
import { LanguageEnum } from '__generated__/globalTypes'
import { toISOLocal } from '@utils/func'
import { useEffect } from 'react'
import { usePopular } from '@graphql/services/popular'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LocationSearch = () => {
  const router = useRouter()
  const { locale } = router

  const { t } = useTranslation()

  const [queryPopular, { data, loading }] = usePopular()

  const onSubmit = (data: IHotelsSearch) => {
    let query = {}
    query = {
      name: data.name,
      adults: data.adults,
      children: data.children,
      rooms: data.rooms,
      checkIn: toISOLocal(data.checkIn)?.slice(0, 10),
      checkOut: toISOLocal(data.checkOut)?.slice(0, 10),
    }

    router.push({
      pathname: AppUrl.hotels,
      query: query,
    })
  }

  useEffect(() => {
    const init = () => {
      queryPopular({ variables: {
        input: {
          language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
          pagination: {
            page: 1,
            pageSize: 10,
          },
        },
      }})
    }

    return () => {
      init()
    }
  }, [locale, queryPopular])

  return (
    <>
      { !loading && data?.getAllPopular &&
    <>
      <div className="text-2xl text-center">
        <h3>{ t('home:popular') }</h3>
      </div>
      <div>
        <div className="flex flex-nowrap gap-8 overflow-auto max-w-screen-xl">
          { data?.getAllPopular.data.map((v, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => {
                onSubmit({
                  adults: 1,
                  checkIn: new Date(),
                  checkOut: new Date(),
                  children: 0,
                  name: v.name && v.name || '',
                  rooms: 1,
                })
              }}
            >
              <div className="transition ease-in-out delay-150 hover:scale-110 p-2">
                <div className="relative w-28 h-28 rounded-full overflow-hidden">
                  {
                    v.image &&
              <Image
                unoptimized
                placeholder="blur"
                blurDataURL={v.image}
                src={v.image}
                layout="fill"
                // width={100}
                // height={100}
                alt="footer-logo"
              />
                  }

                </div>
              </div>
              <div className="text-center whitespace-nowrap text-xs">{ v.name }</div>
              <div className="text-center whitespace-nowrap text-xs text-zinc-400">{ v.count } { t('home:popular-accommodation') }</div>
            </div>
          )) }
        </div>
      </div>
    </>
      }

    </>

  )
}

export { LocationSearch }