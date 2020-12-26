import {CensusSubjectMetaData} from "./CensusSubject";

export class CensusAPIFields {
  group:string;
  compositeFields: CensusAPICompositeField[] = [];
  constructor({censusSubject, fieldType}:{censusSubject:CensusSubjectMetaData, fieldType:string}) {
    this.group = censusSubject.group;
    const variables:string[] = [];
    censusSubject.variables.forEach((variable:string) => {
      variables.push(variable);
    });
    const fields:string[] = [];
    const subjectFields:Map<string,string> | undefined = censusSubject.subjectFields.get(fieldType);
    if (subjectFields) {
      subjectFields.forEach((field:string) => {
        fields.push(field);
      });
    }
    fields.forEach((field:string) => {
      variables.forEach((variable:string) => {
        this.compositeFields.push(new CensusAPICompositeField({
          group: this.group,
          variable,
          field
        }));
      })
    });
  }
  // ex: S0804_C01_001E,S0804_C02_001E,S0804_C03_001E,S0804_C04_001E
  toString():string {
    const fieldStrings:string[] = [];
    this.compositeFields.forEach((compositeField) => {
        fieldStrings.push(compositeField.toString());
    });
    return fieldStrings.join(',');
  }
}

export class CensusAPICompositeField {
  group:string;
  variable:string;
  field:string;
  constructor({group, variable, field}:{group:string, variable:string, field:string}) {
    this.group = group;
    this.variable = variable;
    this.field = field;
  }
  // ex: S0804_C01_001E {group}_{variable}_{field}
  toString ():string {
    return `${this.group}_${this.variable}_${this.field}`
  }
}