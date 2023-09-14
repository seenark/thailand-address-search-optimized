import { binarySearchByZipCode } from "./bs-filter";
import { Option, Tambon, ZipCode, none, some } from "./types";
import tambons from "./raw/thai_tambons.json";
import ZipCodeToTambonGroup from "./raw/zip_code_to_tambon_group.json";
import Zip from "./raw/zip_codes.json";

const tambonsMap = new Map<number, Tambon>(
  tambons.RECORDS.map((t) => {
    return [
      t.id,
      {
        id: t.id,
        zip_code: t.zip_code,
        name_th: t.name_th,
        name_en: t.name_en,
        amphure_id: t.amphure_id,
      },
    ];
  }),
);

export function getTambonByTambonId(id: number): Option<Tambon> {
  const tb = tambonsMap.get(id);
  if (!tb) return none();
  return some(tb);
}

export function getTambonListFromZipCodeGroup(zipcode: number) {
  // const tp = await zipCodeGroupMap.get(zipcode)
  const tp = ZipCodeToTambonGroup[zipcode] as Tambon[];
  if (!tp) return none();
  return tp;
}

export function getTambonsIdListFromZipCode(
  zipCodeList: ZipCode[],
  targetZipCode: number,
): ZipCode[] {
  return binarySearchByZipCode(zipCodeList, "zip_code", targetZipCode);
}

export function getTambonListFromZipCodeTest(zipcode: number) {
  return Zip.filter((a) => a.zip_code === zipcode);
}
