import Provinces from "./raw/thai_provinces.json";
import { Option, Province, none, some } from "./types";

const provinceMap = new Map(
  Provinces.RECORDS.map((p) => [
    p.id,
    {
      id: p.id,
      name_th: p.name_th,
      name_en: p.name_en,
      geography_id: p.geography_id,
    },
  ]),
);

export function getProvinceByProvinceId(id: number): Option<Province> {
  const province = provinceMap.get(id);
  if (!province) return none();
  return some(province);
}
