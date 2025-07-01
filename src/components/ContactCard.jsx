export default function ContactCard(){
    return (
        <div style={{
            width: "100%",
            height: "30%",
        }}>
            <div style={{
            borderRadius: 25,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1%",
            color: "#1E293B", 
            backgroundColor: "#F8FAFC",
            }}>
                <h3>Jean Paul Ruiz Arones</h3>
                <p style={{fontSize:"14px"}}>Telefono: 965834833</p>
                <p style={{fontSize:"14px"}}>Email: jpaul.ruiz.1802@gmail.com</p>
                <p style={{fontSize:"14px"}}>Instagram: jean_rp</p>
                <button style={{
                    padding: "1% 3% 1% 3%",
                    borderRadius: "10px",
                    backgroundColor: "#3B82F6"
                }}>
                    <a href="https://github.com/RuizJpaul" style={{textDecoration:"none", color:"black"}} target="_blank" >Ir a github</a>
                </button>
            </div>
        </div>
    )
}