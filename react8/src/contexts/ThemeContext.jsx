import React from "react";

// createContext()를 사용하여 생성한 Context를 따로 파일로 분리하여 사용
const ThemeContext = React.createContext("light");
ThemeContext.displayName = '테마 컨텍스트';

export default ThemeContext;