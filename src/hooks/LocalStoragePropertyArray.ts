import { useState } from "react";
import { PropertyData } from "../types/data";

function usePropertyDataArray() {
  const key = "propertyDataArray";

  const initialStoredValue = localStorage.getItem(key);
  const initial: PropertyData[] = initialStoredValue
    ? JSON.parse(initialStoredValue)
    : [];

  const [propertyDataArray, setPropertyDataArray] =
    useState<PropertyData[]>(initial);

  const addPropertyData = (propertyData: PropertyData) => {
    const updatedArray = [...propertyDataArray, propertyData];
    setPropertyDataArray(updatedArray);
    localStorage.setItem(key, JSON.stringify(updatedArray));
  };

  const removePropertyData = (id: number) => {
    const updatedArray = propertyDataArray.filter((data) => data.id !== id);
    setPropertyDataArray(updatedArray);
    localStorage.setItem(key, JSON.stringify(updatedArray));
  };

  const clearPropertyDataArray = () => {
    setPropertyDataArray([]);
    localStorage.removeItem(key);
  };

  return [
    propertyDataArray,
    addPropertyData,
    removePropertyData,
    clearPropertyDataArray,
  ] as const;
}

export default usePropertyDataArray;
