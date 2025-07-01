import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";

export default function App(){
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "#0F172A",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
    }}>
      <Header />
      <ContactList />
      <Footer />
    </div>
  )
}