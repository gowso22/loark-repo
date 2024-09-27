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
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
    },
    {
      Type: string;
      Value: number;
      Tooltip: string;
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

export interface IEquipment {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}

export interface IWeapon {
  Element_000: {
    type: string;
    value: {};
  };
  Element_001: {
    type: string;
    value: {};
  };
  Element_002: {
    type: string;
    value: {};
  };
  Element_003: {
    type: string;
    value: {};
  };
  Element_004: {
    type: string;
    value: {};
  };
  Element_005: {
    type: string;
    value: {};
  };
  Element_006: {
    type: string;
    value: {};
  };
  Element_007: {
    type: string;
    value: {};
  };
  Element_008: {
    type: string;
    value: {};
  };
  Element_009: {
    type: string;
    value: {};
  };
  Element_010: {
    type: string;
    value: {};
  };
  Element_011: {
    type: string;
    value: {};
  };
  Element_012: {
    type: string;
    value: {};
  };
  Element_013: {
    type: string;
    value: {};
  };
  Element_014: {
    type: string;
    value: {};
  };
}
