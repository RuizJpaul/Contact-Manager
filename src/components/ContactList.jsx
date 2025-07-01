import ContactCard from "./ContactCard";

export default function ContactList(){
    return(
        <div style={{
            width: "30%",
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
    )
}