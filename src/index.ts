import { getTambonAndAmphureAndProvinceByTambonId } from "./address-helper";
import Zip from "./raw/zip_codes.json";
import {
  getTambonListFromZipCodeGroup,
  getTambonListFromZipCodeTest,
  getTambonsIdListFromZipCode,
} from "./tambon";
import Tambons from "./raw/thai_tambons.json";
import { Tambon } from "./types";

function makeGroupForTambon() {
  const map = new Map<string, Tambon[]>();
  Tambons.RECORDS.forEach((t) => {
    const value = {
      id: t.id,
      name_en: t.name_en,
      name_th: t.name_th,
      zip_code: t.zip_code,
      amphure_id: t.amphure_id,
    };
    const key = `${t.zip_code}`;
    const find = map.get(key);
    if (!find) {
      map.set(key, [value]);
    } else {
      map.set(key, [...find, value]);
    }
  });

  // console.log("map", map);
  const obj = Object.fromEntries(map);
  console.log(obj);
  // Bun.write("./zip_code_to_tambon_group.json", JSON.stringify(obj));
}

async function main() {
  console.time("1");
  const tambons = getTambonsIdListFromZipCode(Zip, 10100);
  console.log("tambons", tambons);
  console.timeEnd("1");

  console.time("2");
  const tambons2 = getTambonListFromZipCodeGroup(10100);
  console.log("tambons2", tambons2);
  console.timeEnd("2");

  console.time("3");
  const tambons3 = getTambonListFromZipCodeTest(10100);
  console.log("tambons3", tambons3);
  console.timeEnd("3");

  const ap = getTambonAndAmphureAndProvinceByTambonId(tambons[2].tumbon_id);
  console.log(ap);

  makeGroupForTambon();
}

main();
