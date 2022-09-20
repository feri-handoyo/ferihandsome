
function App() {
  const socialMedia = [
    {
    name:'Github',
    link:'https://github.com/ferihandsome',
    icon: 'assets/images/github.svg'
    },
    {
      name:'Instagram',
      link:'https://www.instagram.com/feryhandoyo/',
      icon: 'assets/images/instagram.svg'
    },
    {
      name:'Linkedin',
      link:'https://www.linkedin.com/in/feri-handoyo-a5a657128/',
      icon: 'assets/images/linkedin.svg'
    },
]
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
  return (
    <div style={{minHeight:'100vh', paddingLeft:'4rem', paddingRight:'4rem'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'2rem', flexDirection:'column'}}>
    <img src="assets/images/profile.jpg" alt="My Profile" style={{width:'12rem', height:'12rem', objectFit: 'cover', borderRadius: "50%"}}/>
    <p style={{fontSize:'4rem', fontWeight:'600'}}>Feri Handoyo</p>
    <code>Front-All Dev</code>
    {/* <img src={window.location.origin + '/public/images/profile.jpg'}></img> */}
    </div>
    <p style={{fontSize:'2rem', fontWeight:'600'}}>About Me</p>
    <p style={{fontSize:'2rem'}}>Hai, nama saya Feri Handoyo, saya berumur {getAge('1997-04-13')} tahun. saya mahasiswa Institut Teknologi Telkom Purwokerto. saya tertarik dengan dunia Software Engineering yang memiliki motivasi dan semangat di bidang teknologi kreatif dan inovasi. saya sangat suka membangun software indah yang sederhana, ramah serta memiliki performa yang optimal, senang jika dapat bertemu dengan kamu dilain waktu.</p>
    <div style={{display:'flex', gap:'2rem', justifyContent:'center'}}>
    {socialMedia.map((data, i)=><a key={i} href={data.link} target={'_blank'} rel="noreferrer"><img src={data.icon} alt={data.name} style={{width:'6rem', height:'6rem'}}/></a>)}
    </div>
    </div>
  );
}

export default App;
