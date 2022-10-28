import { SyntheticEvent, useState } from "react";
import { VIEW_TYPE_LIST } from "../utils/constants";


export const useChangeView = () => {
  const [viewType, setViewType] = useState(VIEW_TYPE_LIST);

  const handleChangeView = (event, data) => {
    const value = data.value?.toString();

    if (value) {
      setViewType(() => value);
    }
  };

  return { viewType, handleChangeView };
};
