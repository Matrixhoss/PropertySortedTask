import { PropertyData } from "../types/data";
import data from "../data.json";

export const findId = (
  properties: PropertyData[],
  targetId: number
): boolean => {
  for (const property of properties) {
    if (property.id === targetId) {
      return true;
    }
  }
  return false;
};

export const findProperty = (id: number): PropertyData | undefined => {
  for (const property of data) {
    if (property.id === id) {
      return property;
    }
  }
  return undefined;
};
