export interface IProfile {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string;
  Title: string;
  GuildMemberGrade: string;
  GuildName: string;
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats: [
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    },
    {
      Type: string;
      Value: number;
      Tooltip: string[];
    }
  ];
  Tendencies: [
    {
      Type: string;
      Point: number;
    },
    {
      Type: string;
      Point: number;
    },
    {
      Type: string;
      Point: number;
    },
    {
      Type: string;
      Point: number;
    }
  ];
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: number;
  ItemMaxLevel: number;
}

export interface IEquipment{
  
    Type: string;
    Name: string;
    Icon: string;
    Grade: string;
    Tooltip: string;
  
}
