import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Гаррі Поттер і філософський камінь</h1>
      </header>
      <main>
        <h2>Назва книги: Гаррі Поттер і філософський камінь</h2>
        <h3>Автор: Джоан Роулінг</h3>
        <h4>Жанр: Фентезі</h4>
        <h4>Кількість сторінок: 223</h4>
        <div className="book-reviews">
          <h5>Рецензії:</h5>
          <p>"Це чудова книга для дітей та дорослих, яка захоплює з перших сторінок."</p>
          <p>"Магічний світ Гаррі Поттера приголомшливо описаний, і сюжет тримає у напрузі до останньої сторінки." </p>
          <p1>Рекомендую почитати !</p1>
        </div>
      </main>
    </div>
  );
}

export default App;
