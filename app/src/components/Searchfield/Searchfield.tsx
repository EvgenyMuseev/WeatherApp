import React, { useState } from "react";
import { Textfield } from "../Textfield";
import { IconButton } from "../Buttons";
import { SearchIcon } from "../Svg/Icons";
import classNames from "classnames";
import styles from "./Searchfield.module.scss";
import { fetchCityWeather } from "../../store/searchSlice/searchSlice";
import { useAppDispatch } from "../../hook";

interface SearchfieldProps {
  className?: string;
}

export const Searchfield = ({ className }: SearchfieldProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickSearch = () => {
    dispatch(fetchCityWeather(searchValue));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Textfield
        value={searchValue}
        onChange={handleChangeField}
        onKeyDown={handleKeyDown}
        className={styles.searchField}
        placeholder="Введите название города"
      />
      {searchValue?.length >= 1 && (
        <IconButton
          onClick={onClickSearch}
          className={styles.searchButton}
          icon={<SearchIcon />}
        />
      )}
    </div>
  );
};
