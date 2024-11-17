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

  const hmjcName = parsedData.Element_005.value.Element_000.replace(
    /<[^>]*>/g,
    ""
  );
  const hmjcValue = parsedData.Element_005.value.Element_001.replace(
    /<[^>]*>/g,
    " / "
  );
  const addEfName = parsedData.Element_006.value.Element_000.replace(
    /<[^>]*>/g,
    ""
  );
  const addEfValue = parsedData.Element_006.value.Element_001.replace(
    /<[^>]*>/g,
    " | "
  );

  let helmetSetName;
  let elixirName01;
  let elixirName02;
  if (parsedData.Element_009.type === "ItemPartBox") {
    helmetSetName = parsedData.Element_009.value.Element_001.replace(
      /<[^>]*>/g,
      ""
    );
  } else if (parsedData.Element_009.type === "IndentStringGroup") {
    elixirName01 =
      parsedData.Element_009.value.Element_000.contentStr.Element_000.contentStr.replace(
        /<[^>]*>/g,
        "  "
      );
    elixirName02 =
      parsedData.Element_009.value.Element_000.contentStr.Element_001.contentStr.replace(
        /<[^>]*>/g,
        "  "
      );
  }
  // 초월 엘릭서 없는 방어구는 element5가 활성 수치(공통) element6이 추가 효과(공통) element9가 세트 효과

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
      <div>
        {hmjcName} : {hmjcValue}
      </div>
      <div>
        {addEfName} : {addEfValue}
      </div>
      {parsedData.Element_009.type === "ItemPartBox" && (
        <div>{helmetSetName}</div>
      )}
      {parsedData.Element_009.type === "IndentStringGroup" && (
        <>
          <div>{elixirName01}</div>
          <div>{elixirName02}</div>
        </>
      )}

      {/* <div>
        {info01} : {info02}
      </div>
      <div>
        {info03} : {info04}
      </div>
      <div>{info05}</div> */}
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
