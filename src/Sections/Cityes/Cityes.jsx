import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import BiletCard from '../../Components/BiletCard/BiletCard'

//images
import dubai22 from '../../Photes/dubai-wallpaper.jpg'
import antalya22 from '../../Photes/country-02.jpg'
import sharm22 from '../../Photes/sharm22.jpg'
import istanbul33 from '../../Photes/istanbul33.jpg'

export default function Cityes() {
  return (
    <div className='container py-3'>
        {/* section header */}
        <SectionHeader infoTitle={'Shaharlardan Biriga Hoziroq Tashrif Buyuring'} infoSubtile={'Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz uchun. O\'zingiz uchun yangi dunyosni oching va misli ko\'rilmagan sarguzashtlar ega bo\'ling.'} textPosition={'text-start plan my-4'} />
        {/* cards in cityes section */}
        <BiletCard population={'8.66 mln kishi'} area={' 41.290 km2'} summa={'1.100.200'} card2__img={dubai22}  card2__title={'Dubai'} card2__subtitle={'Birlashgan Arab Amirliklari'} card2__description={'Dubay - Birlashgan Arab Amirliklaridagi shahar va amirlik, hashamatli xaridlar, ultramodern arxitektura va jonli tungi hayot sahnasi bilan mashhur. Balandligi 830 m bo\'lgan Burj Xalifa minorasi osmono\'par binolar bilan to\'ldirilgan osmon chizig\'ida hukmronlik qiladi. Uning etagida musiqaga xoreografiya qilingan samolyotlar va chiroqlar bilan jihozlangan Dubay favvorasi joylashgan. Sun\'iy orollarda Atlantis, Palm, suv va dengiz hayvonlari bog\'lari joylashgan kurort joylashgan.'}/>
        <BiletCard population={'44.48 mln kishi'} area={'275.400 km2'} summa={'946.000'} card2__img={antalya22} card2__title={'Antalya'} card2__subtitle={'Turkiya'} card2__description={'Antaliya Turkiyaning eng tez rivojlanayotgan shahri bo\'lib, butun dunyodan kelgan sayyohlar uning ajoyib plyajlari va an\'anaviy turk madaniyatining ajoyib aralashmasini kashf qilmoqdalar. Bolalarga Aqua Land (suvli slaydni yaxshi ko\'radiganlar orzusi) va Dolphin Land (delfinlar, dengiz sherlari va oq kitlarning uyi) o\'rin olgan Beach Park yoqadi. Eski shahar markazini o\'rganing va Hadrian darvozasini ko\'ring.'}/>
        <BiletCard population={'67.41 mln kishi'} area={'551.500 km2'} summa={'425.600'} card2__img={sharm22} card2__title={'Sharm El-Sheikh'} card2__subtitle={'Misr'} card2__description={'Sharm El Sheikh - Sinay yarim orolidagi sayyohlik markazi bo\'lib, unda dunyodagi eng yaxshi sho\'ng\'in joylari mavjud. Sharm shahrini butunlay boshqa darajaga olib chiqqan Ras Muhammad milliy bog\'ining suv osti mo\'jizalari. Shaharda Qizil dengiz tubidagi parallel dengiz hayotini kashf qilish uchun dunyoning turli burchaklaridan ilg\'or va rekreatsion g\'avvoslarni jalb qiladigan sho\'ng\'in va kema halokat joylari mavjud.'}/>
        <BiletCard population={'67.41 mln kishi'} area={'551.500 km2'} summa={'425.600'} card2__img={istanbul33} card2__title={'Istanbul'} card2__subtitle={'Turkiya'} card2__description={'Istanbul Turkiyaning eng gavjum shahri va uning madaniy, iqtisodiy va tarixiy markazidir. U Turkiyaning shimoli-g\'arbiy qismida joylashgan bo\'lib, Marmara va Qora dengizni bog\'laydigan Bosfor bo\'g\'ozi orqali Yevropa va Osiyo tomoniga bo\'linadi. Bu ikki qit\'ada joylashgan dunyodagi yagona shahar.'}/>
    </div>
  )
}
