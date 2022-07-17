import type { GetStaticProps, NextPage } from 'next'

import { HomeSearch } from '@components/search/home.search'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const About: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="columns-2">
      <div>เกี่ยวกับเรา</div>
      <div>
        Click and Go เป็นช่องทางการตลาดออนไลน์ สำหรับการจองโรงแรม ที่พัก
        ที่ดีที่สุด สำหรับทั้งลูกค้า และผู้ประกอบการไทย
        เรานำเสนอช่องทางที่รวดเร็วที่สุดในการค้นหาที่พัก
        ดูข้อมูลเปรียบเทียบราคาและบริการ ที่เกี่ยวข้อง ทั้งในประเทศและทั่วโลก
        ไม่ว่าคุณจะมองหาโรงแรมแบบไหน เรามีตัวเลือกที่เหมาะสมที่สุดสำหรับคุณ
        โดยมีช่องทางการบริการผ่าน Application Click and Go และ
        www.clickandgothailand.com เน้นการใช้งานที่สะดวกในทุกอุปกรณ์
        ซึ่งมีขั้นตอนการใช้งานไม่ยุ่งยาก สะดวกและรวดเร็ว
        ทั้งสำหรับลูกค้าและผู้ประกอบการ พร้อมทั้งมีทีมงานดูแล ช่วยเหลือ
        และให้คำปรึกษา Call Center ไทย - อังกฤษ
      </div>
      <div>บริการของเรา</div>
      <div>
        Click and Go นำเสนอทางเลือกของที่พักที่มีความหลากหลาย
        จากทุกพื้นที่ทั่วประเทศ รวมทั้งจุดหมายปลายทาง แหล่งท่องเที่ยวที่น่าสนใจ
        มีเสน่ห์ และน่าค้นหา รวบรวมแพ็คเกจที่พักสุดพิเศษ
        ไปยังจุดหมายปลายทางที่ดีที่สุด ทั้งในประเทศและต่างประเทศ
        เราให้บริการด้วยอัธยาศัยไมตรีแบบไทยๆ พูดคุยด้วยภาษาเดียวกัน
        โดยฝ่ายบริการลูกค้าชาวไทย
        เพื่อความสะดวกสำหรับลูกค้าและผู้ประกอบการชาวไทย
        รวมทั้งฝ่ายบริการลูกค้าภาคภาษาอังกฤษ
      </div>
      <div>ติดต่อเรา</div>
      <div>บริษัท คลิกแอนด์โก โอทีเอ (ไทยแลนด์) จำกัด</div>
      <div>
        555/23 ซอยสุขุมวิท 63 (เอกมัย) แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร
        10110
      </div>
      <div>
        Call Center. +66 (0) 2026 6255 | Email: cs@clickandgothailand.com
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home']))
    }
  }
}

export default About
