import Header from 'components/Header';
import Footer from 'components/Footer';
import Pages from 'pages/Pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Pages />
      </main>
      <Footer />
    </div>
  );
}

export default App;