import { useQuery } from "react-query";
import { fetchHelmetTooltip } from "../../api/api";
import React from "react";

const Helmet = () => {
  const { data } = useQuery("helmet", fetchHelmetTooltip);

  let parsedData;
  try {
    parsedData = JSON.parse(data); // data를 JSON.parse
    console.log(parsedData);
  } catch (err) {
    return <div>에러</div>; // 파싱 오류 처리
  }

  const name = parsedData.Element_000.value.replace(/<[^>]*>/g, "");

  const quality = parsedData.Element_001.value.leftStr1.replace(/<[^>]*>/g, "");
  const qualityVal = parsedData.Element_001.value.qualityValue;
  const grade = parsedData.Element_001.value.leftStr0.replace(/<[^>]*>/g, "");
  const tier = parsedData.Element_001.value.leftStr2.replace(/<[^>]*>/g, "");

  // const effect = parsedData.Element_005.value.Element_000.replace(
  //   /<[^>]*>/g,
  //   ""
  // );
  // const effectVal = parsedData.Element_005.value.Element_001;
  // const add = parsedData.Element_006.value.Element_000.replace(/<[^>]*>/g, "");
  // const addVal = parsedData.Element_006.value.Element_001;
  // const setVal = parsedData.Element_009.value.Element_001.replace(
  //   /<[^>]*>/g,
  //   ""
  // );
  return (
    <>
      <div>투구</div>
      <div> {name}</div>

      <div>
        {grade}, {tier}
      </div>
      <div>
        {quality} : {qualityVal}
      </div>
      {/*
      <div>
        {effect} : {effectVal}
      </div>
      <div>
        {add} : {addVal}
      </div>
      <div>{setVal}</div> */}
    </>
  );
};
export default Helmet;
