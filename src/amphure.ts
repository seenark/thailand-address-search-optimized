import Amphures from "./raw/thai_amphures.json";
import { Amphure, Option, none, some } from "./types";

const amphureMap = new Map(
  Amphures.RECORDS.map((a) => [
    a.id,
    {
      id: a.id,
      name_th: a.name_th,
      name_en: a.name_en,
      province_id: a.province_id,
    },
  ]),
);

export function getAmphureByAmphureId(id: number): Option<Amphure> {
  const amphure = amphureMap.get(id);
  if (!amphure) return none();
  return some(amphure);
}
