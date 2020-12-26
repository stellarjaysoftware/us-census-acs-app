export enum CensusSubject { TransportationMeans }

export class CensusSubjectMetaData {
  name:CensusSubject;
  group:string;
  variables:Map<string,string>;
  subjectFields:Map<string,Map<string,string>>;
  constructor({name, group, variables, subjectFields}:{name:CensusSubject, group:string, variables:Map<string,string>, subjectFields:Map<string,Map<string,string>>}) {
    this.name = name;
    this.group =group;
    this.variables = variables;
    this.subjectFields = subjectFields;
  }
}