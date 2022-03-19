import styled from "styled-components";

const Header = styled.header`
  width: calc(100% - 70px);
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
`

const SearchContainer = styled.div`
  width: 33%;
`

const SearchInput = styled.input`
  padding-left: 5px;
  width: 70%;
  height: 30px;
  border: 1px solid #313131;
  border-right: none;
  background-color: #121212;
  color: #dfdfdf;
`

const SearchKeyboard = styled.button`
  padding: 0;
  width: 5%;
  height: 30px;
  border: 1px solid #313131;
  border-left: none;
  background-color: #121212;
  color: #dfdfdf;
  cursor: pointer;
`


export { Header, SearchContainer, SearchInput, SearchKeyboard  }