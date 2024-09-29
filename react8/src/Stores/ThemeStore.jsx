import { create } from 'zustand';

// zustand는 커스텀훅을 활용하기 때문에 zustand로 생성된 상태 변수에 반드시 접두사로 use를 사용해야 함
// 접미사 Store는 사용자가 원하는 형태로 변경하거나 생략해도 상관없음(관례적으로 사용하는 이름임)
// zustand로 생성된 변수에 여러 개의 데이터를 저장하고자 할 경우 object 타입의 데이터를 입력하면 됨
const useThemeStore = create((set) => ({
    // theme: {type: 'button', color: 'blue'},
    theme: 'primary', // 데이터가 저장되는 변수명, 기본값을 설정
    setTheme: (newTheme) => set(() => ({theme: newTheme})), // 저장된 데이터를 수정하기 위한 함수, 사용자가 원하는 이름으로 지정하면 됨
}));

// 다른 곳에서 활용하기 위해 export default로 출력
export default useThemeStore;