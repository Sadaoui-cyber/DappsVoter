function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {
  return (
    <footer>
      <br /> 
      <h2 style={{ fontSize: "18px" }}> 💻 Développé par:</h2>
      <Link uri={"https://github.com/Sadaoui-cyber?tab=repositories"} text={"Khelifa SADAOUI"} />
      <Link uri={"https://github.com/Benji09bal?tab=repositories"} text={"Benjamin LEGRAND"} />
      <br /> <br /> 
      <h2 style={{ fontSize: "18px" }}> 💻 Formation ALYRA (BUTERIN) :</h2>
      <Link uri={"https://www.alyra.fr/"} text={"Alyra L’école blockchain"} />
    </footer>
  );
}

export default Footer;
