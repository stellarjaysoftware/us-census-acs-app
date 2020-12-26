import {CensusSubject, CensusSubjectMetaData} from "../models/CensusSubject";
import {TRANSPORT_VARS, FIELD_LABELS, TRANSPORT_FIELDS} from "../constants";

export const transportationMeansSubject = new CensusSubjectMetaData({
  name: CensusSubject.TransportationMeans,
  group: 'S0804',
  variables: new Map([
    ['total','C01'],
    [TRANSPORT_VARS.DROVE_ALONE, 'C02'],
    [TRANSPORT_VARS.CARPOOLED, 'C03'],
    [TRANSPORT_VARS.PUBLIC_TRANSIT, 'C04'],
  ]),
  subjectFields: new Map([
    [TRANSPORT_FIELDS.TOTAL, new Map([
      [FIELD_LABELS.TOTAL,'001E']
    ])],
    [TRANSPORT_FIELDS.AGE, new Map([
      [FIELD_LABELS._16_TO_19,'002E'],
      [FIELD_LABELS._20_TO_24,'003E'],
      [FIELD_LABELS._24_TO_44,'004E'],
      [FIELD_LABELS._45_TO_54,'005E'],
      [FIELD_LABELS._55_TO_59,'006E'],
      [FIELD_LABELS._60P,'007E']
    ])],
    [TRANSPORT_FIELDS.SEX, new Map([
      [FIELD_LABELS.MALE,'009E'],
      [FIELD_LABELS.FEMALE,'0010E']
    ])],
  ])
});