import { equipmentPhotos, type PhotoInfo } from './photos';
export type Machine = {
 id: string; name: string; optionLabel: string; code: string; type: string; brand: string;
 location: string; year: number; quantity: number | null; specs: {label:string;value:string}[];
 salePrice: number; image: string; sourceRow: number; photo: PhotoInfo;
};
export const catalogSource = { label: 'Прайс от 14.09.2026', validFrom: '14.09.2026', validUntil: '30.09.2026', vat: 22 };
export const categories = ['Вся техника', 'Тягачи', 'Самосвалы', 'Тралы', 'Шторные полуприцепы', 'Автобетоносмесители', 'КМУ', 'Легковые автомобили'];
const excelMachines: Omit<Machine, 'image' | 'photo'>[] = [
  {
    "id": "excel-8",
    "name": "Тягач SHACMAN 4×2",
    "optionLabel": "Тягач SHACMAN 4×2 · 480 л.с. · 2023",
    "code": "SHACMAN / 2023",
    "type": "Тягачи",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2023,
    "quantity": 3,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2023"
      },
      {
        "label": "Мощность",
        "value": "480 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Пневматическая"
      },
      {
        "label": "Количество в прайсе",
        "value": "3 шт."
      }
    ],
    "salePrice": 8200000,
    "sourceRow": 8
  },
  {
    "id": "excel-9",
    "name": "Тягач SHACMAN 6×4",
    "optionLabel": "Тягач SHACMAN 6×4 · 430 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Тягачи",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 5,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "430 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Пневматическая"
      },
      {
        "label": "Количество в прайсе",
        "value": "5 шт."
      }
    ],
    "salePrice": 8700000,
    "sourceRow": 9
  },
  {
    "id": "excel-10",
    "name": "Тягач SHACMAN 6×4",
    "optionLabel": "Тягач SHACMAN 6×4 · 440 л.с. · 2023",
    "code": "SHACMAN / 2023",
    "type": "Тягачи",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2023,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2023"
      },
      {
        "label": "Мощность",
        "value": "440 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 7450000,
    "sourceRow": 10
  },
  {
    "id": "excel-12",
    "name": "Самосвал SHACMAN 6×4",
    "optionLabel": "Самосвал SHACMAN 6×4 · 336 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Самосвалы",
    "brand": "SHACMAN",
    "location": "Москва-Благовещенск",
    "year": 2024,
    "quantity": 5,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "336 л.с."
      },
      {
        "label": "Количество в прайсе",
        "value": "5 шт."
      }
    ],
    "salePrice": 6500000,
    "sourceRow": 12
  },
  {
    "id": "excel-13",
    "name": "Самосвал SHACMAN 6×4",
    "optionLabel": "Самосвал SHACMAN 6×4 · 430 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Самосвалы",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 10,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "430 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Примечание",
        "value": "Цена в нал"
      },
      {
        "label": "Количество в прайсе",
        "value": "10 шт."
      }
    ],
    "salePrice": 7200000,
    "sourceRow": 13
  },
  {
    "id": "excel-14",
    "name": "Самосвал SHACMAN 6×4",
    "optionLabel": "Самосвал SHACMAN 6×4 · 440 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Самосвалы",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 7,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "440 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Примечание",
        "value": "Цена в нал"
      },
      {
        "label": "Количество в прайсе",
        "value": "7 шт."
      }
    ],
    "salePrice": 7000000,
    "sourceRow": 14
  },
  {
    "id": "excel-15",
    "name": "Самосвал BIEBEN 8×4",
    "optionLabel": "Самосвал BIEBEN 8×4 · 375 л.с. · 2023",
    "code": "BIEBEN / 2023",
    "type": "Самосвалы",
    "brand": "BIEBEN",
    "location": "Иркутск",
    "year": 2023,
    "quantity": 5,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2023"
      },
      {
        "label": "Мощность",
        "value": "375 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "5 шт."
      }
    ],
    "salePrice": 8400000,
    "sourceRow": 15
  },
  {
    "id": "excel-16",
    "name": "Самосвал SHACMAN 8×4",
    "optionLabel": "Самосвал SHACMAN 8×4 · 560 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Самосвалы",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 15,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "560 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "15 шт."
      }
    ],
    "salePrice": 10650000,
    "sourceRow": 16
  },
  {
    "id": "excel-17",
    "name": "Самосвал SHACMAN 8×4",
    "optionLabel": "Самосвал SHACMAN 8×4 · 550 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Самосвалы",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 19,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "550 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "19 шт."
      }
    ],
    "salePrice": 10850000,
    "sourceRow": 17
  },
  {
    "id": "excel-18",
    "name": "Самосвал SHACMAN 6×6",
    "optionLabel": "Самосвал SHACMAN 6×6 · 430 л.с. · 2024",
    "code": "SHACMAN / 2024",
    "type": "Самосвалы",
    "brand": "SHACMAN",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "430 л.с."
      },
      {
        "label": "Подвеска",
        "value": "Рессорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 12000000,
    "sourceRow": 18
  },
  {
    "id": "excel-22",
    "name": "Тягач BIEBEN 6×6",
    "optionLabel": "Тягач BIEBEN 6×6 · 430 л.с. · односкат 425/85R21 · 2023",
    "code": "BIEBEN / 2023",
    "type": "Тягачи",
    "brand": "BIEBEN",
    "location": "Иркутск,Красноярск,Нижневартовск.",
    "year": 2023,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2023"
      },
      {
        "label": "Мощность",
        "value": "430 л.с."
      },
      {
        "label": "Ошиновка",
        "value": "односкат 425/85R21"
      },
      {
        "label": "Подвеска",
        "value": "Рессорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 10300000,
    "sourceRow": 22
  },
  {
    "id": "excel-23",
    "name": "Тягач BIEBEN 6×6",
    "optionLabel": "Тягач BIEBEN 6×6 · 430 л.с. · двускат 12.00R24 · 2023",
    "code": "BIEBEN / 2023",
    "type": "Тягачи",
    "brand": "BIEBEN",
    "location": "Иркутск,Красноярск,Нижневартовск.",
    "year": 2023,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2023"
      },
      {
        "label": "Мощность",
        "value": "430 л.с."
      },
      {
        "label": "Ошиновка",
        "value": "двускат 12.00R24"
      },
      {
        "label": "Подвеска",
        "value": "Рессоры"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 9500000,
    "sourceRow": 23
  },
  {
    "id": "excel-24",
    "name": "Тягач BIEBEN 6×4",
    "optionLabel": "Тягач BIEBEN 6×4 · 550 л.с. · 2023",
    "code": "BIEBEN / 2023",
    "type": "Тягачи",
    "brand": "BIEBEN",
    "location": "Иркутск, Красноярск",
    "year": 2023,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2023"
      },
      {
        "label": "Мощность",
        "value": "550 л.с."
      },
      {
        "label": "Подвеска",
        "value": "рессоры"
      },
      {
        "label": "Примечание",
        "value": "Ретардер"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 7800000,
    "sourceRow": 24
  },
  {
    "id": "excel-27",
    "name": "Трал LUXUDA · 3 оси",
    "optionLabel": "Трал LUXUDA · 3 оси ·  · 2024",
    "code": "LUXUDA / 2024",
    "type": "Тралы",
    "brand": "LUXUDA",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 1,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Подвеска",
        "value": "Пневматическая"
      },
      {
        "label": "Количество в прайсе",
        "value": "1 шт."
      }
    ],
    "salePrice": 4500000,
    "sourceRow": 27
  },
  {
    "id": "excel-28",
    "name": "Трал LUXUDA · 4 оси",
    "optionLabel": "Трал LUXUDA · 4 оси ·  · 2024",
    "code": "LUXUDA / 2024",
    "type": "Тралы",
    "brand": "LUXUDA",
    "location": "Иркутск, Москва",
    "year": 2024,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Подвеска",
        "value": "Пневматическая"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 4800000,
    "sourceRow": 28
  },
  {
    "id": "excel-32",
    "name": "Шторный LUXUDA · SAF 4 оси",
    "optionLabel": "Шторный LUXUDA · SAF 4 оси ·  · 2024",
    "code": "LUXUDA / 2024",
    "type": "Шторные полуприцепы",
    "brand": "LUXUDA",
    "location": "Иркутск",
    "year": 2024,
    "quantity": null,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Ошиновка",
        "value": "односкат"
      },
      {
        "label": "Подвеска",
        "value": "Пневматическая"
      },
      {
        "label": "Подъёмные оси",
        "value": "2"
      },
      {
        "label": "Количество в прайсе",
        "value": "Не указано"
      }
    ],
    "salePrice": 4400000,
    "sourceRow": 32
  },
  {
    "id": "excel-33",
    "name": "Шторный LUXUDA · SAF 3 оси",
    "optionLabel": "Шторный LUXUDA · SAF 3 оси ·  · 2024",
    "code": "LUXUDA / 2024",
    "type": "Шторные полуприцепы",
    "brand": "LUXUDA",
    "location": "Иркутск",
    "year": 2024,
    "quantity": null,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Ошиновка",
        "value": "односкат"
      },
      {
        "label": "Подвеска",
        "value": "Пневматическая"
      },
      {
        "label": "Подъёмные оси",
        "value": "1"
      },
      {
        "label": "Количество в прайсе",
        "value": "Не указано"
      }
    ],
    "salePrice": 4000000,
    "sourceRow": 33
  },
  {
    "id": "excel-35",
    "name": "АБС ISUZU 4×2",
    "optionLabel": "АБС ISUZU 4×2 · 230 л.с. · 2024",
    "code": "ISUZU / 2024",
    "type": "Автобетоносмесители",
    "brand": "ISUZU",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "230 л.с."
      },
      {
        "label": "Объём барабана",
        "value": "3 м³"
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 6400000,
    "sourceRow": 35
  },
  {
    "id": "excel-36",
    "name": "АБС ХОВО 6×4",
    "optionLabel": "АБС ХОВО 6×4 · 400 л.с. · 2024",
    "code": "ХОВО / 2024",
    "type": "Автобетоносмесители",
    "brand": "ХОВО",
    "location": "Иркутск",
    "year": 2024,
    "quantity": 5,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "400 л.с."
      },
      {
        "label": "Объём барабана",
        "value": "10 м³"
      },
      {
        "label": "Количество в прайсе",
        "value": "5 шт."
      }
    ],
    "salePrice": 11350000,
    "sourceRow": 36
  },
  {
    "id": "excel-37",
    "name": "АБС Ситрак 6×4",
    "optionLabel": "АБС Ситрак 6×4 · 400 л.с. · 2024",
    "code": "Ситрак / 2024",
    "type": "Автобетоносмесители",
    "brand": "Ситрак",
    "location": "Красноярск",
    "year": 2024,
    "quantity": 4,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "400 л.с."
      },
      {
        "label": "Объём барабана",
        "value": "10 м³"
      },
      {
        "label": "Количество в прайсе",
        "value": "4 шт."
      }
    ],
    "salePrice": 11700000,
    "sourceRow": 37
  },
  {
    "id": "excel-38",
    "name": "АБС Ситрак 8×4",
    "optionLabel": "АБС Ситрак 8×4 · 440 л.с. · 2024",
    "code": "Ситрак / 2024",
    "type": "Автобетоносмесители",
    "brand": "Ситрак",
    "location": "Красноярск, Иркутск",
    "year": 2024,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Мощность",
        "value": "440 л.с."
      },
      {
        "label": "Объём барабана",
        "value": "11 м³"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 13200000,
    "sourceRow": 38
  },
  {
    "id": "excel-40",
    "name": "КМУ BIEBEN 6×6",
    "optionLabel": "КМУ BIEBEN 6×6 · 430 л.с. · 2026",
    "code": "BIEBEN / 2026",
    "type": "КМУ",
    "brand": "BIEBEN",
    "location": "Иркутск",
    "year": 2026,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2026"
      },
      {
        "label": "Мощность",
        "value": "430 л.с."
      },
      {
        "label": "КМУ / оборудование",
        "value": "9 тон+ бур."
      },
      {
        "label": "Подвеска",
        "value": "Ресорная"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 15400000,
    "sourceRow": 40
  },
  {
    "id": "excel-43",
    "name": "FORD BRONCO",
    "optionLabel": "FORD BRONCO ·  · 2024",
    "code": "FORD / 2024",
    "type": "Легковые автомобили",
    "brand": "FORD",
    "location": "Москва, Иркутск.",
    "year": 2024,
    "quantity": 2,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2024"
      },
      {
        "label": "Тип топлива",
        "value": "бензин"
      },
      {
        "label": "Количество в прайсе",
        "value": "2 шт."
      }
    ],
    "salePrice": 8000000,
    "sourceRow": 43
  },
  {
    "id": "excel-45",
    "name": "ZEEKR 9Х",
    "optionLabel": "ZEEKR 9Х · 900 л.с. · 2025",
    "code": "ZEEKR / 2025",
    "type": "Легковые автомобили",
    "brand": "ZEEKR",
    "location": "Иркутск",
    "year": 2025,
    "quantity": 4,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2025"
      },
      {
        "label": "Мощность",
        "value": "900 л.с."
      },
      {
        "label": "Тип топлива",
        "value": "Гибрид"
      },
      {
        "label": "Подвеска",
        "value": "пневмотическая"
      },
      {
        "label": "Количество в прайсе",
        "value": "4 шт."
      }
    ],
    "salePrice": 15500000,
    "sourceRow": 45
  },
  {
    "id": "excel-47",
    "name": "TOYOTA Land Cruser 300 ( GR)",
    "optionLabel": "TOYOTA Land Cruser 300 ( GR) · 304 л.с. · 2022",
    "code": "TOYOTA / 2022",
    "type": "Легковые автомобили",
    "brand": "TOYOTA",
    "location": "Иркутск",
    "year": 2022,
    "quantity": 1,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2022"
      },
      {
        "label": "Мощность",
        "value": "304 л.с."
      },
      {
        "label": "Тип топлива",
        "value": "Дизель"
      },
      {
        "label": "Пробег",
        "value": "83 000 км"
      },
      {
        "label": "Количество в прайсе",
        "value": "1 шт."
      }
    ],
    "salePrice": 11700000,
    "sourceRow": 47
  },
  {
    "id": "excel-49",
    "name": "Land Rover Range Rover (SV)",
    "optionLabel": "Land Rover Range Rover (SV) · 560 л.с. · 2018",
    "code": "Land Rover / 2018",
    "type": "Легковые автомобили",
    "brand": "Land Rover",
    "location": "Иркутск",
    "year": 2018,
    "quantity": 1,
    "specs": [
      {
        "label": "Год выпуска",
        "value": "2018"
      },
      {
        "label": "Мощность",
        "value": "560 л.с."
      },
      {
        "label": "Тип топлива",
        "value": "Бензин"
      },
      {
        "label": "Пробег",
        "value": "78 000 км"
      },
      {
        "label": "Количество в прайсе",
        "value": "1 шт."
      }
    ],
    "salePrice": 11500000,
    "sourceRow": 49
  }
];
export const machines: Machine[] = excelMachines.map(machine => {
 const photo = equipmentPhotos[machine.sourceRow];
 if (!photo) throw new Error(`Missing photograph for Excel row ${machine.sourceRow}`);
 return { ...machine, image: photo.imageUrl, photo };
});
export const money = (value: number) => new Intl.NumberFormat('ru-RU').format(value);
