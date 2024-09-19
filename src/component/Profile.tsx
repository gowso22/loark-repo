import { useQuery } from "react-query";
import { fetchProfile } from "../api/api";
import { IProfile } from "../interface/amorises";


const Profile = () => {
  const { data } = useQuery<IProfile>("profile", fetchProfile);

  const life = data?.Stats[7].Tooltip[1];
  const cleanStr = life?.replace(/<\/?[^>]+>/g, "");
  const lifeValue = cleanStr?.match(/\d+/g);

  const addLife = data?.Stats[7].Tooltip[2];
  const cleanStr2 = addLife?.replace(/<\/?[^>]+>/g, "");
  const addLifeValue = cleanStr2?.match(/.\d+/g);

  return (
    <>
      <div>대아름 profile</div>
      {data && (
        <div>
          <img src={data.CharacterImage} />
          <div>원정대 : {data.ExpeditionLevel}</div>
          <div>pvp : {data.PvpGradeName}</div>
          <div>영지레벨 : {data.TownLevel}</div>
          <div>영지 : {data.TownName}</div>
          <div>길드 : {data.GuildName}</div>
          <div>
            스킬 포인트 : {data.UsingSkillPoint} / {data.TotalSkillPoint}
          </div>
          <div>
            {data.Stats.slice(0, 6).map((stat, index) => (
              <div key={index}>
                <div>
                  {stat.Type} : {stat.Value}
                </div>
              </div>
            ))}
          </div>
          <div>
            {data.Stats.slice(6, 7).map((stat, index) => (
              <div key={index}>
                <div>
                  {stat.Type} : {stat.Value}
                </div>
              </div>
            ))}

            {data.Stats.slice(7, 8).map((stat, index) => (
              <div key={index}>
                <div>
                  {stat.Type} : {stat.Value}
                </div>
              </div>
            ))}
            <div>기본 공격력 : {lifeValue}</div>
            <div>추가 공격력 : {addLifeValue}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
