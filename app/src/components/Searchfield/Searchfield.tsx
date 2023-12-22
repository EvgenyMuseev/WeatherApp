import React from 'react';
import { Textfield } from '../Textfield';
import { IconButton } from '../Buttons';
import { SearchIcon } from '../Svg/Icons';
import classNames from 'classnames';
import styles from "./Searchfield.module.scss";

interface SearchfieldProps {
  className?: string;
}

export const Searchfield = ({className}: SearchfieldProps) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Textfield className={styles.searchField} placeholder="Введите название города"/>
      <IconButton className={styles.searchButton} icon={<SearchIcon/>}/>
    </div>
  )
}
