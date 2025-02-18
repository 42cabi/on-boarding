import styled from "styled-components";

const SearchResult = ({
  searchList,
  setSearchName,
}: {
  searchList: string[];
  setSearchName: (value: string) => void;
}) => {
  return (
    <SearchResultStyled>
      {searchList.length > 0 && (
        <SearchUlStyled>
          {searchList.map((result) => (
            <SearchLiStyled
              key={result}
              onMouseDown={() => setSearchName(result)}
            >
              {result}
            </SearchLiStyled>
          ))}
        </SearchUlStyled>
      )}
    </SearchResultStyled>
  );
};

const SearchResultStyled = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1000;
  border-radius: 8px;
  background-color: var(--ref-white);
`;

const SearchUlStyled = styled.ul`
  min-height: 30px;
  padding-left: 0px;
`;

const SearchLiStyled = styled.li`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 3px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--ref-purple-500);
    color: var(--ref-white);
  }
`;

export default SearchResult;