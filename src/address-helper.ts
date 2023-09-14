import { getAmphureByAmphureId } from "./amphure";
import { getProvinceByProvinceId } from "./province";
import { getTambonByTambonId } from "./tambon";
import { Amphure, Province, none, some, Option } from "./types";

export function getTambonAndAmphureAndProvinceByTambonId(
  id: number,
): Option<{ amphure: Amphure; province: Province }> {
  const tambonOption = getTambonByTambonId(id);

  if (tambonOption._tag === "None") return none();

  const amphureOption = getAmphureByAmphureId(tambonOption.value.amphure_id);
  if (amphureOption._tag === "None") return none();

  const provinceOption = getProvinceByProvinceId(
    amphureOption.value.province_id,
  );
  if (provinceOption._tag === "None") return none();

  return some({
    tambon: tambonOption.value,
    amphure: amphureOption.value,
    province: provinceOption.value,
  });
}
