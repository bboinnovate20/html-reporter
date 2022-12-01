import React from 'react';
import { SearchIcon } from '../../icons/index';
import { Input, SearchIconWrapper, Wrapper } from './style';

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <Wrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Input spellCheck="true" type="search" name="search" placeholder={placeholder} />
    </Wrapper>
  );
};

export default Search;
