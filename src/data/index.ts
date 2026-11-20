import { BRANDS } from './brands';
import { PHONES_LATEST_AND_CLASSIC } from './phonesLatestAndClassic';
import { PHONES_PART_1 } from './phonesPart1';
import { PHONES_PART_2 } from './phonesPart2';
import { PHONES_EXTRA } from './phonesExtra';
import { PHONES_EXPANDED_1 } from './phonesExpanded1';
import { PHONES_EXPANDED_2 } from './phonesExpanded2';
import { PHONES_EXPANDED_3 } from './phonesExpanded3';
import { PHONES_EXPANDED_4 } from './phonesExpanded4';
import { PHONES_EXPANDED_5 } from './phonesExpanded5';
import { TABLETS_DATA } from './tablets';
import { TABLETS_DATA_2 } from './tablets2';
import { TABLETS_DATA_3 } from './tablets3';
import { TABLETS_DATA_4 } from './tablets4';
import { TABLETS_DATA_5 } from './tablets5';
import { LENOVO_DEVICES } from './lenovoDevices';
import { Brand, PhoneModel } from '../types/phone';

export const ALL_BRANDS: Brand[] = BRANDS;

export const ALL_PHONES: PhoneModel[] = [
  ...PHONES_LATEST_AND_CLASSIC,
  ...PHONES_PART_1,
  ...PHONES_PART_2,
  ...PHONES_EXTRA,
  ...PHONES_EXPANDED_1,
  ...PHONES_EXPANDED_2,
  ...PHONES_EXPANDED_3,
  ...PHONES_EXPANDED_4,
  ...PHONES_EXPANDED_5,
  ...TABLETS_DATA,
  ...TABLETS_DATA_2,
  ...TABLETS_DATA_3,
  ...TABLETS_DATA_4,
  ...TABLETS_DATA_5,
  ...LENOVO_DEVICES,
].sort((a, b) => b.releaseYear - a.releaseYear || a.name.localeCompare(b.name, 'tr'));

export function isTabletModel(model: PhoneModel): boolean {
  return model.deviceType === 'tablet' || model.segment === 'Tablet';
}

export function getBrandById(brandId: string): Brand | undefined {
  return ALL_BRANDS.find((b) => b.id === brandId);
}

export function getPhonesByBrand(brandId: string): PhoneModel[] {
  return ALL_PHONES.filter((p) => p.brandId === brandId);
}
