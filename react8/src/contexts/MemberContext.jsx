import React from "react";

const MemberContext = React.createContext('손님');
MemberContext.displayName = '멤버 컨텍스트';

export default MemberContext;