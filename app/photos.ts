import { assetPath } from './assets';
export type PhotoInfo = { imageUrl: string; sourceUrl: string; sourceLabel?: string; model: string; configuration: string; note: string; notice?: string; position?: string };

// Public source photographs; specifications in the catalog remain those supplied in Excel.
export const equipmentPhotos: Record<number, PhotoInfo> = {
  "8": {
    "imageUrl": "https://shacman.ru/upload/iblock/43b/v50dun2qibf1vz3cjk6fme3zpqp0yldl.jpeg",
    "sourceUrl": "https://shacman.ru/modeli/x6000-tyagach-4x2/",
    "model": "SHACMAN X6000",
    "configuration": "Тягач 4×2 · 480 л.с.",
    "note": "Фото модели с двухосным шасси 4×2. Индекс и год конкретного экземпляра в прайсе не указаны.",
    "position": "50% 58%"
  },
  "9": {
    "imageUrl": "https://static.tildacdn.com/tild3430-3963-4237-b965-383439613434/64_1.jpg",
    "sourceUrl": "https://avtbn.ru/all_tyagachi/6_4/6x4_tyagach_sx42584v324",
    "model": "SHACMAN X3000 SX42584V324",
    "configuration": "Тягач 6×4, 430 л.с.",
    "note": "Фото SHACMAN X3000 6×4, 430 л.с. Подвеска и точный индекс экземпляра из прайса по фото не подтверждены.",
    "position": "50% 58%"
  },
  "10": {
    "imageUrl": "https://shacmanopt.ru/wp-content/uploads/2023/02/9013204-1.jpg",
    "sourceUrl": "https://shacmanopt.ru/product/tyagach-shacman-x3000-sx42584v324-6x4/",
    "model": "SHACMAN X3000 SX42584V324",
    "configuration": "Тягач 6×4, 440 л.с., рессорная подвеска",
    "note": "Фото SHACMAN X3000 6×4, 440 л.с., с рессорной подвеской. Год и конкретный экземпляр могут отличаться.",
    "position": "50% 58%"
  },
  "12": {
    "imageUrl": "https://www.shacman.ru/upload/iblock/a59/dss8jtb8ef4dq3yp2secofa15xgrajdt.jpg",
    "sourceUrl": "https://www.shacman.ru/modeli/f3000-6x4/",
    "model": "SHACMAN F3000 6×4",
    "configuration": "Самосвал 6×4, Weichai WP10.336E53, 336 л.с.",
    "note": "Наружная фотография SHACMAN F3000 6×4, 336 л.с., с официального сайта производителя. Конкретный индекс и год экземпляра в прайсе не указаны.",
    "position": "50% 62%"
  },
  "13": {
    "imageUrl": "https://www.shacman.ru/upload/iblock/cda/rzcawxyeynrhwqtcx5x0q38qto0siiqz.jpg",
    "sourceUrl": "https://www.shacman.ru/modeli/samosval-kh3000-restayl-6x4/",
    "model": "SHACMAN X3000 рестайлинг",
    "configuration": "Самосвал 6×4, 430 л.с.",
    "note": "Фото SHACMAN X3000 6×4, 430 л.с. Конкретную комплектацию и год уточняйте.",
    "position": "50% 58%"
  },
  "14": {
    "imageUrl": "https://abngroup.ru/template/img/tovar/1/2.jpeg",
    "sourceUrl": "https://abngroup.ru/katalog/samosvaly/sx32586w384c",
    "model": "SHACMAN X3000 SX32586W384C",
    "configuration": "Самосвал 6×4, 440 л.с.",
    "note": "Фото SHACMAN X3000 6×4, 440 л.с. Конкретный индекс экземпляра в прайсе не указан.",
    "position": "50% 58%"
  },
  "15": {
    "imageUrl": "https://zwgroup-vehicle.com/wp-content/uploads/2025/07/1000-23.jpg",
    "sourceUrl": "https://www.zwgroup-vehicle.com/products/beiben-v3-8x4-tipper-truck-375hp-dump-box/",
    "model": "BEIBEN V3",
    "configuration": "Самосвал 8×4, 375 л.с., рессорная подвеска",
    "note": "Фото BEIBEN V3 8×4, 375 л.с. В исходном прайсе марка записана как BIEBEN.",
    "position": "50% 58%"
  },
  "16": {
    "imageUrl": "https://www.garant-tehnika.ru/storage/files/products/1517/OviisvkFRopv23OTW1daVrY8Mwcl0j-meta0KHQkNCc0J7QodCS0JDQmyDQpTMwMDAg0KDQldCh0KLQkNCZ0JsgOMOXNCA0NDDQm9ChLmpwZw%3D%3D-.jpg",
    "sourceUrl": "https://www.garant-tehnika.ru/catalog/samosvaly/samosval-shacman-x3000-8x4-35-kubm-restyle",
    "model": "SHACMAN X3000 рестайлинг",
    "configuration": "Самосвал 8×4",
    "note": "На фото SHACMAN X3000 8×4 в версии 440 л.с. В прайсе — 560 л.с.; точная комплектация по этому снимку не подтверждается.",
    "notice": "Фото версии 440 л.с.; в прайсе — 560 л.с.",
    "position": "50% 58%"
  },
  "17": {
    "imageUrl": "https://shacman-centr.ru/files/whatsapp-image-2023-01-26-at-13.29.22-1-1067x800.jpeg",
    "sourceUrl": "https://shacman-centr.ru/catalog/shacman-sx331863366-8x4/",
    "model": "SHACMAN X3000 SX331863366",
    "configuration": "Самосвал 8×4, 550 л.с.",
    "note": "Фото SHACMAN X3000 8×4, 550 л.с. Год и конкретный экземпляр могут отличаться.",
    "position": "50% 58%"
  },
  "18": {
    "imageUrl": "https://ehkskavator.ru/moduls/doska/userfiles/bigfoto/woa5z3qd3puoqr3sbdvif5tnsa975foa.jpg",
    "sourceUrl": "https://ehkskavator.ru/item/1041517",
    "model": "SHACMAN X3000 SX32586V385",
    "configuration": "Самосвал 6×6, 430 л.с.",
    "note": "Фото SHACMAN X3000 6×6, 430 л.с., с внедорожным шасси. Конкретный экземпляр уточняйте.",
    "position": "50% 58%"
  },
  "22": {
    "imageUrl": "https://uzst.ru/images/stories/contentimages/catalog2/22155-95431.jpg",
    "sourceUrl": "https://uzst.ru/tech/tjagachi/sedelnye-tyagachi-beiben/sedelnyj-tyagach-beiben-3343sa-1-skatnaya-oshinovka",
    "model": "BEIBEN 3343SA",
    "configuration": "Тягач 6×6, 430 л.с., односкатная ошиновка",
    "note": "Фото односкатного BEIBEN 3343SA 6×6. На фото шины 14.00R20; в прайсе указаны 425/85R21.",
    "notice": "Размер шин на фото отличается от прайса.",
    "position": "50% 58%"
  },
  "23": {
    "imageUrl": "https://uzst.ru/images/stories/contentimages/catalog2/22070-93412.jpg",
    "sourceUrl": "https://uzst.ru/tech/tjagachi/sedelnye-tyagachi-beiben/sedelnyj-tyagach-beiben-2643sa",
    "model": "BEIBEN 2643SA",
    "configuration": "Тягач 6×6, 430 л.с., двухскатная ошиновка",
    "note": "Фото двухскатного BEIBEN 2643SA 6×6. У источника шины 14R22.5; в прайсе указаны 12.00R24.",
    "notice": "Размер шин на фото отличается от прайса.",
    "position": "50% 58%"
  },
  "24": {
    "imageUrl": "https://www.kacheren.com/uploadfile/2020/1212/20201212105132555.jpg",
    "sourceUrl": "https://www.kacheren.com/product/21_4529.html",
    "model": "BEIBEN V3ET ND4250BD5J7Z12",
    "configuration": "Тягач 6×4, 550 л.с.",
    "note": "Фото BEIBEN V3ET 6×4, 550 л.с. Ретардер и комплектация конкретного экземпляра по фото не подтверждены.",
    "position": "50% 58%"
  },
  "35": {
    "imageUrl": "https://isuzucl.cn/uploads/allimg/20250909/1-250Z91500124K.jpg",
    "sourceUrl": "https://isuzucl.cn/?a=index&aid=100&c=View&m=home",
    "model": "ISUZU 700P",
    "configuration": "Автобетоносмеситель 4×2 · 3 м³",
    "note": "Наружное фото ISUZU 700P 4×2, 3 м³, на заводской площадке. У источника 190 л.с.; в прайсе — 230 л.с.",
    "notice": "Фото версии 190 л.с.; в прайсе — 230 л.с.",
    "position": "50% 60%"
  },
  "36": {
    "imageUrl": "https://spbmb.ru/upload/iblock/640/gex7kpx82kfqtq2z2kvl0a9ujkdp3e8l.jpeg",
    "sourceUrl": "https://spbmb.ru/product/novaya-gruzovaya-tekhnika/avtobetonosmesiteli/avtobetonosmesitel-10-kub-m-howo-t5g-6kh4/",
    "model": "HOWO T5G",
    "configuration": "Автобетоносмеситель 6×4 · 10 м³",
    "note": "Фото HOWO T5G 6×4, 400 л.с., с барабаном 10 м³. Год и конкретный экземпляр могут отличаться.",
    "position": "50% 58%"
  },
  "37": {
    "imageUrl": "https://trucks.dakar-auto.ru/image/cache/catalog/cat_img/abs/abs-sitrak-c7h-10m3-800x600.jpg",
    "sourceUrl": "https://trucks.dakar-auto.ru/abs/abs-sitrak/abs-sitrak-c7h-10m3",
    "model": "SITRAK C7H",
    "configuration": "Автобетоносмеситель 6×4 · 10 м³",
    "note": "Фото SITRAK C7H 6×4, 10 м³. У источника 440 л.с.; в прайсе — 400 л.с.",
    "notice": "Фото версии 440 л.с.; в прайсе — 400 л.с.",
    "position": "50% 58%"
  },
  "38": {
    "imageUrl": "https://spb.gkgross.ru/upload/iblock/223/p0axa0ieyximyh1ck6olaa20vnfwf1n6.jpg",
    "sourceUrl": "https://spb.gkgross.ru/about/news/ogranicheniya-snyaty-tekhnika-sitrak-i-howo-sootvetstvuet-trebovaniyam-bezopasnosti/",
    "model": "SITRAK C7H",
    "configuration": "Автобетоносмеситель 8×4",
    "note": "Фото четырёхосного SITRAK C7H 8×4. Мощность и объём барабана конкретной машины по фото не подтверждены.",
    "notice": "Объём 11 м³ по этому фото не подтверждён.",
    "position": "50% 58%"
  },
  "40": {
    "imageUrl": "https://exkavator.ru/fcpics/images/jpg_67fcab2ce23ec.jpg",
    "sourceUrl": "https://exkavator.ru/mining/news/inf_news/144706_bbtr_vivodit_na_rinok_sedelniy_tyagach_beiben_6h6_s_kmu_i_burovoy_naveskoy.html",
    "model": "BEIBEN 2543LA с КМУ и буровой навеской",
    "configuration": "6×6 · КМУ + бур",
    "note": "Фото BEIBEN 2543LA 6×6 с КМУ и буром. На снимке версия с КМУ 8 т; в прайсе — 9 т.",
    "notice": "На фото КМУ 8 т; в прайсе — 9 т.",
    "position": "50% 58%"
  },
  "43": {
    "imageUrl": "https://static.cargurus.com/images/forsale/2024/03/03/20/58/2024_ford_bronco-pic-3592574271359464062-1024x768.jpeg?auto=webp&fit=bounds&format=jpg&height=480&io=true&width=640",
    "sourceUrl": "https://www.cargurus.com/Cars/l-Used-2024-Ford-Bronco-Big-Bend-4-Door-4WD-Harrisburg-t109614_L30148",
    "model": "Ford Bronco Big Bend 2024",
    "configuration": "Полноразмерный Bronco · четыре двери · 4WD",
    "note": "Наружное фото полноразмерного Ford Bronco Big Bend 2024 у дилерского центра. Цвет, количество дверей и комплектация экземпляра из прайса не указаны.",
    "position": "50% 58%"
  },
  "45": {
    "imageUrl": "https://s12.auto.drom.ru/photo/v2/X2fSpkcoKclpbpGAZ6z5OmXloP-PNeXrgwerE3rz4eFgd66wKg7KaSgyGWTXKchqstSX9kr_52fLj7ok/gen1200.jpg",
    "sourceUrl": "https://auto.drom.ru/kovrov/zeekr/9x/754537113.html",
    "model": "ZEEKR 9X ULTRA 2025",
    "configuration": "Внедорожник · гибрид · полный привод · 900 л.с.",
    "note": "Наружное фото ZEEKR 9X ULTRA 2025, гибрид, 900 л.с. Цвет и конкретная комплектация экземпляра из прайса могут отличаться.",
    "position": "50% 58%"
  },
  "47": {
    "imageUrl": "https://www.vertumotors.ro/storage/2022/03/Toyota-Land-Cruiser-GR-Sport-2022-2.jpg",
    "sourceUrl": "https://www.vertumotors.ro/cars/toyota-land-cruiser-gr-sport-2022/",
    "model": "Toyota Land Cruiser 300 GR Sport 2022",
    "configuration": "Внедорожник · GR Sport",
    "note": "Фото Land Cruiser 300 GR Sport 2022. У источника бензиновая версия; в прайсе — дизельная.",
    "notice": "На фото бензиновая версия; в прайсе — дизельная.",
    "position": "50% 58%"
  },
  "49": {
    "imageUrl": "https://media.whichcar.com.au/uploads/2025/02/0c447bd9-2018-Range-Rover-SV-Autobiography-1-1024x683.jpg",
    "sourceUrl": "https://www.whichcar.com.au/reviews/2018-range-rover-sv-autobiography-review",
    "model": "Range Rover SV Autobiography Dynamic 2018",
    "configuration": "Внедорожник · SV · поколение L405",
    "note": "Фото Range Rover SV Autobiography 2018, поколение L405. Мощность и пробег экземпляра из прайса по фото не подтверждены.",
    "notice": "Мощность версии по фото не подтверждена.",
    "position": "50% 58%"
  },
  "27": {
    "imageUrl": assetPath("/images/trailer-3-axles-user.jpg"),
    "sourceUrl": assetPath("/images/trailer-3-axles-user.jpg"),
    "sourceLabel": "Открыть оригинал",
    "model": "Трал · 3 оси",
    "configuration": "3 оси · задние аппарели",
    "note": "Оригинальная фотография предоставлена пользователем для этой позиции каталога. На снимке видны три оси и задние аппарели. Марка и точная комплектация по фото не подтверждены.",
    "position": "50% 100%"
  },
  "28": {
    "imageUrl": "https://frontwill.ru/upload/iblock/1a5/ln37yqoi2afbzh6s63tulp39zzfkw29z.jpg",
    "sourceUrl": "https://frontwill.ru/product/pritsepy-polupritsepy/polupritsepy/luxuda/polupritsep-tral-60-tonn-s-bortami-i-rasshiritelyami-4-kh-osnyy-luxuda/",
    "model": "LUXUDA трал 60 тонн",
    "configuration": "4 оси BPW, пневматическая подвеска",
    "note": "Реальное фото четырёхосного трала LUXUDA с пневмоподвеской. Точный индекс в прайсе не указан.",
    "position": "65% 60%"
  },
  "33": {
    "imageUrl": "https://www.gruzovik.com/img/xxl/43664/Polupricep-shtorka-LUXUDA-3-osi-FUWA-pnevmopodveska-40-tonn-lenivaya-perednyaya-os-13750h2550h-Rossiya_43664_4179855045667.jpg",
    "sourceUrl": "https://www.gruzovik.com/polupricepy/tentovannye-polupricepy/polupricep-shtorka-luxuda-3-osi-fuwa-pnevmopodveska-40-tonn-lenivaya-perednyaya-os-13750h2550h-a9756947.html",
    "model": "LUXUDA шторка, 3 оси FUWA",
    "configuration": "3 оси FUWA, пневматическая подвеска, передняя ось подъёмная",
    "note": "На фото LUXUDA с 3 осями FUWA и передней подъёмной осью. В прайсе указаны оси SAF.",
    "notice": "На фото оси FUWA; в прайсе — SAF.",
    "position": "65% 60%"
  },
  "32": {
    "imageUrl": "https://www.gruzovik.com/img/ful/43664/Polupricep-shtorka-LUXUDA-4-osi-FUWA-pnevmopodveska-40-tonn-SSU-1250-16000-2550-3980-Rossiya_43664_2069086056008.jpg",
    "sourceUrl": "https://www.gruzovik.com/polupricepy/tentovannye-polupricepy/polupricep-shtorka-luxuda-4-osi-fuwa-pnevmopodveska-40-tonn-ssu-1250-16000-2550-3980-a9746504.html",
    "model": "LUXUDA шторка, 4 оси FUWA",
    "configuration": "4 оси FUWA, пневматическая подвеска",
    "note": "На фото LUXUDA с 4 осями FUWA. В прайсе — SAF и 2 подъёмные оси; эта комплектация по фото не подтверждается.",
    "notice": "На фото оси FUWA; в прайсе — SAF. Две подъёмные оси по фото не подтверждены.",
    "position": "65% 60%"
  }
};
