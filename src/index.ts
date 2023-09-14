import { getAmphureAndProvinceByTambonId } from "./address-helper";
import Zip from "./raw/zip_codes.json";
import {
  getTambonListFromZipCodeGroup,
  getTambonListFromZipCodeTest,
  getTambonsIdListFromZipCode,
} from "./tambon";

async function main() {
  // const a = binarySearchByZipCode(Zip, "zip_code", 10100);
  // console.log("a", a);
  // extractZipCode();
  // setOfZipCode();

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

  const ap = getAmphureAndProvinceByTambonId(tambons[2].tumbon_id);
  console.log(ap);
}

main();
