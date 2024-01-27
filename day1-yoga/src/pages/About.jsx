const imglogo = "https://cdn.vectorstock.com/i/preview-1x/53/02/zen-yoga-meditation-abstract-symbol-vector-19855302.jpg";
const trainerImages = [
    { src: 'image_url_1.jpg', name: 'Trainer Name 1' },
    { src: 'image_url_2.jpg', name: 'Trainer Name 2' },
    { src: 'image_url_3.jpg', name: 'Trainer Name 3' },
    { src: 'image_url_4.jpg', name: 'Trainer Name 4' }
];

function About() {
    return (
        <div>
            <div className="aboutclass" style={{ backgroundImage: `url(${imglogo})`, backgroundSize: 'cover', width: '100%', height: '150px', fontFamily: 'sans-serif', textAlign: 'center' }}>
                <h1>About Us</h1>
                <h3>Home/About Us</h3>
            </div>
            <div className="aboutclass2" style={{ backgroundColor: 'moccasin', width: '750px', height: '350px', fontFamily: 'sans-serif', margin: '0 auto', marginTop: '20px', display: 'flex', alignItems: 'center', padding: '20px' }}>
                <img src={imglogo} alt="" style={{ marginRight: '20px' }} />
                <div>
                    <h2 style={{ color: 'black' }}>Learn About Us</h2>
                    <p>Welcome to ZenFlowYoga! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et maximus neque. Ut at mollis ipsum. Nam venenatis eget nulla nec posuere. Aenean vitae ipsum vel ipsum tincidunt ultrices.</p>
                </div>
            </div>
            <div>
                <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Yoga Trainers</h2>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    {trainerImages.map((trainer, index) => (
                        <div key={index} style={{ margin: '0 20px', textAlign: 'center' }}>
                            <img src={trainer.src} alt={trainer.name} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
                            <p>{trainer.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;
