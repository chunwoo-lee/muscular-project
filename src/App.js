import logo from './logo.svg';
import './App.css'; //./ -> 현재 폴더에 있는 파일 읽는 것

//클래스형태로 만들어진 컴포넌트에는 꼭 render 함수가 있어야한다.
//그리고 그 내부에서는 JSX를 return 해줘야한다 밑에 보이는 html코드가 JSX 이다

function App() {
  
  return (
    <div className="App">
      hii
    </div>
  );
}

export default App;

//작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내기를 해주는 역할